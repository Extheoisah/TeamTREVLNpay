import { Button } from "../../ui/Button";
import Modal from "../Modal";

const SuccessModal = (props) => {
  const { isOpen, setIsOpen, setOpenSuccessModal } = props;

  function handleSubmit() {
    // setIsOpen(false);
    setIsOpen(false);
  }
  return (
    <Modal setIsOpen={setIsOpen} isOpen={isOpen} title="">
      <div className="grid place-items-center">
          <h4 className="text-center text-blue-700 font-semibold  mt-4 mb-4">Your Payment was successfull</h4>
        <p className="text-center text-blue-700 font-medium">
          Check your payment history for <br />
          more details
        </p>
        <Button onClick={handleSubmit} margin="1rem 0" padding="0.5rem 2rem">Continue</Button>
      </div>
    </Modal>
  );
};
export default SuccessModal;
