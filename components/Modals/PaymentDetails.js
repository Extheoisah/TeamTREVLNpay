import { useEffect, useState } from "react";
import Modal from "../Modal";
import moment from "moment";

const PaymentDetails = (props) => {
  const { isOpen, setIsOpen } = props;
  const [history, setHistory] = useState([]);

  useEffect(() => {
    setHistory(props.history);
  }, [props.history]);

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="Payments">
      {/* <table className="mb-2">
        <thead className="">
          <tr className="flex gap-x-12 items-center">
            <th>
              <p className="text-xs text-blue-700">Currency</p>
            </th>
            <th>
              <p className="text-xs text-blue-700">Amount</p>
            </th>
            <th>
              <p className="text-xs text-blue-700">Date</p>
            </th>
            <th>
              <p className="text-xs text-blue-700">Status</p>
            </th>
          </tr>
        </thead>

        <tbody>
          {history.length
            ? history.map((h, i) => (
                
                <tr className="text-center border" key={i}>
                  <td className="">{h.currency}</td>
                  <td className="">{h.amount}</td>
                  <td className="">
                    {moment(h.transaction_date).format("DD-MM-YYYY")}
                  </td>
                  <td
                    className={`${
                      history.status === "SUCCESS"
                        ? "text-green-700"
                        : "text-blue-700"
                    } font-medium text-xs `}
                  >
                    {h.status.toLowerCase()}
                  </td>
                </tr>
              ))
            : null}
        </tbody>
      </table> */}
      <table className="md:table-fixed w-full max-w-xl">
        <thead className="text-left font-medium text-blue-700">
          <tr className="text-sm text-center border-0 border-y-[1px] border-blue-200">
            <th className="py-3 text-left">Currency</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody className="text-grey-700 text-sm">
          {history.length ? (
            history.map((h, i) => (
              <tr
                key={i}
                className="text-center border-0 border-y-[1px] border-blue-200 cursor-pointer hover:bg-blue-200"
              >
                <td className="py-3 text-left">{h.currency}</td>
                <td>{h.amount} Sats</td>
                <td>{moment(h.transaction_date).format("DD-MM-YYYY")}</td>
                <td
                  className={`${
                    h.status === "SUCCESS" ? "text-green-700" : "text-blue-700"
                  } font-medium text-xs `}
                >
                  {h.status.toLowerCase()}
                </td>
              </tr>
            ))
          ) : (
            <tr className="empty text-center">
              <td colSpan={4}>You have not made any transactions </td>
            </tr>
          )}
        </tbody>
      </table>
    </Modal>
  );
};

export default PaymentDetails;
