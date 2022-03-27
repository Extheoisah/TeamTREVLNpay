require("dotenv").config();
const axios = require('axios');
const { Payment } = require('../models/payment');
const endpoint = process.env.GALOY_API;
const headers = {
	"content-type": "application/json",
    "Authorization": `bearer ${process.env.JWT_TOKEN}`
};

exports.getPayments = async (req, res) => {
    const payments = await Payment.query();
    return res.status(200).json(payments);
};

exports.processPayments = async (req, res) => {
    const paymentRequests = req.body;
    for(paymentRequest of paymentRequests) {

    }
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