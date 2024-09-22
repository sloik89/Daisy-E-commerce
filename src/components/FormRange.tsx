import React from "react";
import { formatPrice } from "../utilis/formatPrice";

type FormRange = {
  range: number;
  handleRange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  label: string;
};
const FormRange = ({ range, handleRange, name, label }: FormRange) => {
  return (
    <div className="form-control">
      <label htmlFor={name} className="label cursor-pointer">
        <span>{formatPrice(range)}</span>
        <span>{label}</span>
      </label>
      <input
        step={1000}
        max={190000}
        value={range}
        onChange={handleRange}
        className="range range-primary"
        type="range"
        name={name}
      />
    </div>
  );
};

export default FormRange;
