import React from "react";

type FormRange = {
  range: number;
  handleRange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
const FormRange = ({ range, handleRange }: FormRange) => {
  return (
    <label htmlFor="">
      {range}
      <input
        step={10}
        max={3000}
        value={range}
        onChange={handleRange}
        className="range range-primary"
        type="range"
      />
    </label>
  );
};

export default FormRange;
