import React, { useState } from "react";
import { IoChevronDownCircleOutline } from "react-icons/io5";

const paymentHistory = [
  {
    id: 10,
    recipient: "isah@trev.com",
    amount: "1 BTC / 5 USD",
    date: "22/03/2022",
    status: "Paid",
  },
  {
    id: 11,
    recipient: "eni@trev.com",
    amount: "1 BTC / 5 USD",
    date: "22/03/2022",
    status: "Pending",
  },
  {
    id: 12,
    recipient: "vladmir@trev.com",
    amount: "1 BTC / 5 USD",
    date: "22/03/2022",
    status: "Paid",
  },
  {
    id: 13,
    recipient: "raph@trev.com",
    amount: "1 BTC / 5 USD",
    date: "22/03/2022",
    status: "Pending",
  },
];

const PaymentHistory = () => {
  const [openTable, setOpenTable] = useState(true);

  return (
    <>
      <div className="text-blue-700 font-semibold text-xl flex items-center gap-x-2 mb-4">
        <h2>Payment history</h2>
        <span
          onClick={() => setOpenTable(!openTable)}
          className="cursor-pointer hover:transform hover:scale-110"
        >
          <IoChevronDownCircleOutline />
        </span>
      </div>
      <table className="md:table-fixed w-full">
        <thead className="text-left font-medium text-blue-700">
          <tr className="text-sm text-center border-0 border-y-[1px] border-blue-200">
            <th className="py-3 text-left">Recipient</th>
            <th>Amount ( BTC/USD )</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        {openTable && (
          <tbody className="text-grey-700 text-sm">
            {paymentHistory.length > 0 ? (
              paymentHistory.map((history) => (
                <tr
                  key={history.id}
                  className="text-center border-0 border-y-[1px] border-blue-200"
                >
                  <td className="py-3 text-left">{history.recipient}</td>
                  <td>{history.amount}</td>
                  <td>{history.date}</td>
                  <td
                    className={`${
                      history.status === "Paid"
                        ? "text-green-700"
                        : "text-blue-700"
                    } font-medium`}
                  >
                    {history.status}
                  </td>
                </tr>
              ))
            ) : (
              <tr className="empty text-center">
                <td colSpan={4}>You have not made any transactions </td>
              </tr>
            )}
          </tbody>
        )}
      </table>
    </>
  );
};

export default PaymentHistory;
