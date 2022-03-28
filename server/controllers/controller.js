require("dotenv").config();
const moment = require('moment');
const axios = require('axios');
const { Payment } = require('../models/payment');
const { Receipt } = require('../models/receipt');
const { PaymentRequest } = require('../models/payment_request');
const endpoint = process.env.GALOY_API;
const headers = {
	"content-type": "application/json",
    "Authorization": `bearer ${process.env.JWT_TOKEN}`
};

exports.getPayments = async (req, res) => {
    const payments = await PaymentRequest.query().withGraphFetched({
        payments: {
            receipt: true,
        },
    });
    return res.status(200).json(payments);
};

exports.processPayments = async (req, res) => {
    const paymentRequests = req.body;
    let paymentRequestPromises = [];

    for(paymentRequest of paymentRequests) {
        const payReq = await PaymentRequest.query().insert({
            amount: paymentRequest.amount,
            btc_usd_ratio: paymentRequest.ratio,
            ln_address: paymentRequest.address,
        });

        paymentRequestPromises.push(pay(payReq));
    }

    Promise.all(paymentRequestPromises)
        .then(async results => {
            // 0. Check status
            for (result of results) {
                for (payment of result) {
                    let receipt = null;
                    if (payment.status === 'SUCCESS') {
                        // 1. create receipt in DB
                        receipt = await Receipt.query().insert({
                            amount: payment.amount,
                            address: payment.address,
                            currency: payment.currency,
                            payment_date: payment.datetime,
                        });
                    }

                    // 2. save payment to DB

                    const pymnt = await Payment.query().insert({
                        receipt_id: receipt.id || null,
                        payment_requests_id: payment.paymentRequestId,
                        amount: payment.amount,
                        ln_address: payment.address,
                        currency: payment.currency,
                        transaction_date: payment.datetime,
                        status: payment.status,
                    });
                    console.log(pymnt)
                }
            }

            return res.status(200).json(results);
        })
        .catch(err => {
            return res.status(500).json(err);
        });

    
};


exports.getUser = (req, res) => {
    axios({
        url: endpoint,
        method: "post",
        headers: headers,
        data: {
            "operationName": "Me",
            "query": `
            query Me {
                me {
                  defaultAccount {
                    wallets {
                      id
                      walletCurrency
                      balance
                    }
                  }
                }
              }`,
            "variables": {}
        }
    })
    .then(response => {
        //TODO: handle error case
        return res.status(200).json(response.data);
    })
    .catch(err => {
        return res.status(500).json({ error: err, msg: "Failure on Galoy's API"});
    })
};

async function pay(paymentRequest) {
    let payments = [];

    let username = paymentRequest.ln_address.split('@')[0];
    let ratio = paymentRequest.btc_usd_ratio;
    let amount = paymentRequest.amount;
    let usdAmount = amount * ratio;
    let btcAmount = amount - usdAmount;

    if (ratio > 0) {
        let usdIdResp = await walletId(username, "USD");
        let usdId = usdIdResp.data.accountDefaultWallet.id;

        let usdInvoiceResp = await generateUsdInvoice(usdId, usdAmount);
        let usdInvoice = usdInvoiceResp.data.lnUsdInvoiceCreateOnBehalfOfRecipient.invoice;

        let usdPaymentResp = await makePayment(process.env.TREV_USD_WALLET_ID, usdInvoice.paymentRequest);
        let usdPaymentStatus = usdPaymentResp.data.data.lnInvoicePaymentSend.status;

        payments.push({
            paymentRequestId: paymentRequest.id,
            address: paymentRequest.ln_address,
            amount: usdAmount,
            status: usdPaymentStatus,
            currency: "USD",
            datetime: moment().format("YYYY-MM-DD hh:mm:ss"),
        })
    }

    if (ratio < 1) {
        let btcIdResp = await walletId(username, "BTC");
        let btcId = btcIdResp.data.accountDefaultWallet.id;

        let btcInvoiceResp = await generateBtcInvoice(btcId, btcAmount);
        let btcInvoice = btcInvoiceResp.data.data.lnInvoiceCreateOnBehalfOfRecipient.invoice;

        let btcPaymentResp = await makePayment(process.env.TREV_BTC_WALLET_ID, btcInvoice.paymentRequest);
        let btcPaymentStatus = btcPaymentResp.data.data.lnInvoicePaymentSend.status;

        payments.push({
            paymentRequestId: paymentRequest.id,
            address: paymentRequest.ln_address,
            amount: btcAmount,
            status: btcPaymentStatus,
            currency: "BTC",
            datetime: moment().format("YYYY-MM-DD hh:mm:ss"),
        })
    }

    return payments;
}

// Get wallet ID
async function walletId(username, currency) {
    const response = await axios({
        url: endpoint,
        method: "post",
        headers: headers,
        data: {
            "operationName": "AccountDefaultWallet",
            "query": `
            query AccountDefaultWallet($username: Username!, $walletCurrency: WalletCurrency) {
                accountDefaultWallet(username: $username, walletCurrency: $walletCurrency) {
                  id
                  walletCurrency
                }
              }`,
            "variables": {
                username: username,
                walletCurrency: currency,
            }
        }
    })
    return response.data;
}

// Generate standard USD invoice on behalf of recipient
async function generateUsdInvoice(id, amount) {
    const response = await axios({
        url: endpoint,
        method: "post",
        headers: headers,
        data: {
            "operationName": "LnUsdInvoiceCreateOnBehalfOfRecipient",
            "query": `
            mutation LnUsdInvoiceCreateOnBehalfOfRecipient($input: LnUsdInvoiceCreateOnBehalfOfRecipientInput!) {
                lnUsdInvoiceCreateOnBehalfOfRecipient(input: $input) {
                  errors {
                    message
                  }
                  invoice {
                    paymentRequest
                    paymentHash
                  }
                }
              }
              `,
            "variables": {
                "input": {
                    "recipientWalletId": id,
                    "amount": amount
                }
            }
        }
    })

    return response.data;
}

// Generate standard BTC invoice on behalf of recipient
async function generateBtcInvoice(id, amount) {
    return await axios({
        url: endpoint,
        method: "post",
        headers: headers,
        data: {
            "operationName": "LnInvoiceCreateOnBehalfOfRecipient",
            "query": `
            mutation LnInvoiceCreateOnBehalfOfRecipient($input: LnInvoiceCreateOnBehalfOfRecipientInput!) {
                lnInvoiceCreateOnBehalfOfRecipient(input: $input) {
                  errors {
                    message
                  }
                  invoice {
                    paymentRequest
                    paymentHash
                    paymentSecret
                    satoshis
                  }
                }
              }
              `,
            "variables": {
                "input": {
                    "recipientWalletId": id,
                    "amount": amount,
                }
            }
        }
    })
}


// Make payment
async function makePayment(walletId, paymentReq) {
    return await axios({
        url: endpoint,
        method: "post",
        headers: headers,
        data: {
            "operationName": "LnInvoicePaymentSend",
            "query": `
            mutation LnInvoicePaymentSend($input: LnInvoicePaymentInput!) {
                lnInvoicePaymentSend(input: $input) {
                  errors {
                    message
                  }
                  status
                }
              }
              `,
            "variables": {
                "input": {
                    "walletId": walletId,
                    "paymentRequest": paymentReq,
                }
            }
        }
    })
}
