import React, { useState } from "react";

const currencies = [
  { type: "BTC/BTC", value: "BTC-BTC" },
  { type: "BTC/USD", value: "BTC-BTC" },
  { type: "BTC/Lightning Invoice", value: "BTC-Lightning" },
];

const PaymentDetailsHeader = () => {
  const [value, setValue] = useState("");

  const handleInput = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };
  return (
    <form className="flex items-center justify-between border border-blue-200 rounded-lg px-2 py-5 mb-3">
      {currencies.map(({ type, value }) => (
        <div key={type} className="flex items-center gap-x-2">
          <input
            type="radio"
            value={value}
            id={type}
            name="currency"
            // checked={type === "BTC/BTC"}
            onClick={handleInput}
          />
          <label htmlFor={type} name="currency" className="text-blue-700 font-medium">
            {type}
          </label>
        </div>
      ))}
    </form>
  );
};

export default PaymentDetailsHeader;
