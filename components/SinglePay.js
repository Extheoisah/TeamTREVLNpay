import CustomSelect from "./CustomSelect";
import { Input } from "../ui/Input";
import { Label } from "../ui/Label";
import { Button } from "../ui/Button";
import { Formik, Form } from "formik";
import Yup from "yup";

const validationSchema = Yup.object().shape({
  email: Yup.string().required('This field is required!').email('Input a valid email'),
  password: Yup.string().required('This field is required!').min(6, 'Password must be up to six(6) characters')
});

const SinglePay = () => {
  return (
    <section className="mt-6">
      <div className="border border-blue-300 rounded-lg px-3 pt-4 pb-2 mt-8 mb-4 relative">
        <label className="text-blue-700 text-xs font-medium absolute -top-[3%] bg-white px-1">
          Recipient
        </label>
        <div className="flex items-center gap-x-3">
          <input className="" type="radio" name="split-payment" />
          <Label name="split-payment" fontSize="1rem">
            Split payment
          </Label>
        </div>
        <div className="flex flex-col gap-y-2 mt-4">
          <Input placeholder="Enter recipient BTC wallet ID/username" />
          <Input placeholder="Enter recipient lightning address (optional)" />
          <CustomSelect
            label="Amount"
            placeholder="Enter amount you wish to send"
          />
        </div>
      </div>
      <div className="flex flex-col">
        <Label fontSize="1rem">Note (optional)</Label>
        <textarea
          placeholder="Send a note to your recipient"
          className="border border-blue-300 rounded-lg p-3"
        />
      </div>
      <Button width="100%" margin="2rem 0 0 0">Confirm Payment</Button>
    </section>
  );
};

export default SinglePay;
