import { useEffect, useState } from 'react';
import Modal from '../Modal';
import moment from 'moment';

const PaymentDetails = (props) => {
  const { isOpen, setIsOpen } = props;
  const [history, setHistory] = useState([]);

  useEffect(() => {
    setHistory(props.history);
  }, [props.history]);

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="Payments">
      <div className="flex payment-modal mb-20">
        <section><p className="text-xs">Currency</p></section>
        <section><p className="text-xs">Amount</p></section>
        <section><p className="text-xs">Date</p></section>
        <section><p className="text-xs">Status</p></section>
      </div>
      {history.length
        ? history.map((h, i) => (
            <div className="flex payment-modal mb-20" key={i}>
              <section><p className="text-xs">{h.currency}</p></section>
              <section><p className="text-xs">{h.amount}</p></section>
              <section>
                <p className="text-xs">{moment(h.transaction_date).format('DD-MM-YYYY')}</p>
              </section>
              <section>
                <p
                  className={`${
                    history.status === 'SUCCESS'
                      ? 'text-green-700'
                      : 'text-blue-700'
                  } font-medium text-xs`}>
                  {h.status.toLowerCase()}
                </p>
              </section>
            </div>
          ))
        : null}
    </Modal>
  );
};

export default PaymentDetails;
