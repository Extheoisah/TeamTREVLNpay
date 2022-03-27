import React from 'react';
import Image from 'next/image';

const PaymentDetails = () => {
  return (
    <div className="px-8 py-20">
      <div className="flex items-center justify-center mb-20 mt-5">
        <Image
          src="/icons/bitcoin-logo.svg"
          alt="logo"
          width={30}
          height={30}
        />
        <p className="text-blue-700 font-header text-lg">TREV</p>
      </div>
      <ul className="list-disc text-sm text-blue-700 details">
        <li>
          Trev provides a payment solution that allows you to make payments to
          single or multiple lightning addresses.
        </li>
        <li>
          No need to worry about bitcoin’s market volatity when making payments.{' '}
        </li>
        <li>
          You can tell trev how much of your BTC payment should be sent in
          Bitcoin and how much should be transferred in USD.
        </li>
        <li>
          Send your recipient USD directly from your Bitcoin wallet in real time
          on the lightning network.
        </li>
        <li>
          Have a register of lightning addresses you wish to pay simultaneously?
          You can import the CSV / spreadsheet file and we’ll take make magic
          happen.
        </li>
      </ul>
    </div>
  );
};

export default PaymentDetails;
