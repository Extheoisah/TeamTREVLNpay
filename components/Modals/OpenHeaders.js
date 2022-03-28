import { Button } from "../../ui/Button";
import Modal from "../Modal";

const OpenHeaders = (props) => {
  const { isOpen, setIsOpen } = props;

  function handleSubmit() {
    setIsOpen(false);
  }

  return (
    <Modal setIsOpen={setIsOpen} isOpen={isOpen} title="Headers">
        <p className="text-sm text-blue-700 font-medium mb-2">
          Your file should have the following headers:
        </p>
      <div className="grid place-items-center">
        <ul className="text-sm">
          <li className="text-blue-700 font-medium">
            1. Recipient username
          </li>
          <li className="text-blue-700 font-medium">
            2. Amount
          </li>
          <li className="text-blue-700 font-medium">
            3. Ratio of BTC to USD (in percent)
          </li>
        </ul>
        <Button onClick={handleSubmit} margin="2rem 0 0 0" width="fit-content">
          Back
        </Button>
      </div>
    </Modal>
  );
};
export default OpenHeaders;
