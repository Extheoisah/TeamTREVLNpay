import CustomSelect from "./CustomSelect";
import PaymentDetailsHeader from "./PaymentDetailsHeader";
import SinglePay from "./SinglePay";
import {IoIosCloseCircleOutline} from "react-icons/io"

const PaymentDetails = (props) => {
  const { singlePay,setOpenPaySection } = props;

  return (
    <div className="fixed md:static top-full transform translate-y-[-92%] md:translate-y-0 left-0 w-full min-h-[100vh] md:h-full border-t-[1px] border-blue-200 bg-white px-4">
      <h2 className="text-blue-700 font-semibold text-lg text-center my-4 md:my-8">
        Payment Details
      </h2>
      <span onClick={() => setOpenPaySection(false)} className="md:hidden absolute top-5 text-blue-700 cursor-pointer right-5"><IoIosCloseCircleOutline/></span>
      {singlePay && <PaymentDetailsHeader />}
      <CustomSelect placeholder="Enter your wallet ID" label="Sender" />
      {singlePay ? <SinglePay /> : ""}
    </div>
  );
};

export default PaymentDetails;
