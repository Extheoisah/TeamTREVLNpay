import CustomSelect from './CustomSelect';
import { Input } from '../ui/Input';
import { Label } from '../ui/Label';
import { Button } from '../ui/Button';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useMemo, useCallback, useState } from 'react';
import axios from '../helpers/axios';

const validationSchema = Yup.object().shape({
  address: Yup.string().required('This field is required!'),
  amount: Yup.number().required('This field is required!').min(1, 'Amount must be 0 satoshi'),
  ratio: Yup.number().required('This field is required!'),
});

const SinglePay = () => {
  const [btnText, setBtnText] = useState('Confirm Payment');
  const [msg, setMsg] = useState({
    type: '',
    msg: ''
  });
  const initialValues = useMemo(
    () => ({
      address: '',
      amount: 0,
      ratio: '0.1',
    }),
    []
  );

  const formSubmit = useCallback((values, { setSubmitting }) => {
    const body = {
      address: values.address,
      amount: values.amount,
      ratio: values.ratio,
    };

    setBtnText('Confirming Payment ...');

    axios
      .post(`/api/pay`, [body])
      .then(async (res) => {
        setMsg({
          type: 'success',
          msg: 'Successfully made payment'
        });

        // Set to default values
        values.address = '';
        values.amount = '';
        values.ratio = '0.1';

        setBtnText('Confirm Payment');
      })
      .catch((err) => {
        setMsg({
          type: 'error',
          msg: 'Error occured while making payment'
        });

        setBtnText('Confirm Payment');
      });

    setSubmitting(false);
  }, []);

  const displayMsg = useCallback(() => {
    if(msg.msg) {
      setTimeout(() => {
        setMsg({
          type: '',
          msg: '',
        });
      }, 5000);

      if(msg.type === 'success') {
        return <p className="msgSucess">{msg.msg}</p>
      } else {
        return <p className="msgError">{msg.msg}</p>
      }
    }
  }, [msg.msg, msg.type]);

  return (
    <section className="mt-6">
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={formSubmit}>
        {({ values, isSubmitting, handleChange, errors }) => (
          <Form>
            <div className="border border-blue-300 rounded-lg px-3 pt-4 pb-2 mt-8 mb-4 relative">
              <label className="text-blue-700 text-xs font-medium absolute -top-[3%] bg-white px-1">
                Recipient
              </label>
              <div className="flex flex-col gap-y-2 mt-4">
                {displayMsg()}
                <section>
                  <Label>LN address</Label>
                  <Input
                    placeholder="Enter recipient lightning address"
                    onChange={handleChange}
                    name="address"
                    value={values.address}
                  />
                  {errors.address ? <p className="formErrors">{errors.address}</p> : null}
                </section>
                <section>
                  <Label>Amount</Label>
                  <Input
                    placeholder="Enter amount in satoshi"
                    onChange={handleChange}
                    type="number"
                    name="amount"
                    value={values.amount}
                  />
                  {errors.amount ? <p className="formErrors">{errors.amount}</p> : null}
                </section>
                <section>
                  <Label>Ratio</Label>
                  <Input
                    placeholder="Enter btc to usd ratio e.g (0.5)"
                    onChange={handleChange}
                    type="number"
                    name="ratio"
                    value={values.ratio}
                  />
                  {errors.ratio ? <p className="formErrors">{errors.ratio}</p> : null}
                </section>
              </div>
            </div>
            <Button
              type="submit"
              width="100%"
              margin="2rem 0 0 0"
              disabled={isSubmitting}>
              {btnText}
            </Button>
          </Form>
        )}
      </Formik>
    </section>
  );
};

export default SinglePay;
