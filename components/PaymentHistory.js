import React from 'react';

const PaymentHistory = () => {
  return (
    <div className="p-4">
      <h2 className="text-blue-700 bold text-xl mb-2">Payment history</h2>
      <table className="md:table-fixed w-full">
        <thead className="text-left text-blue-700">
          <tr className="text-sm">
            <th>Recipient</th>
            <th>Amount ( BTC/USD )</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody className="text-grey-700 text-sm">
          <tr>
            <td>isah@rev.com</td>
            <td>1 BTC / 5 USD</td>
            <td>22/03/2022</td>
            <td>Paid</td>
          </tr>
          <tr>
            <td>enie@rev.com</td>
            <td>1 BTC / 5 USD</td>
            <td>22/03/2022</td>
            <td>Paid</td>
          </tr>
          <tr>
            <td>raph@rev.com</td>
            <td>1 BTC / 5 USD</td>
            <td>22/03/2022</td>
            <td>Paid</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PaymentHistory;
