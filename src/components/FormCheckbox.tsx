import React from "react";
const FormCheckbox = ({ defaultValue }: { defaultValue: string }) => {
  console.log(defaultValue);
  const [checked, setChecked] = React.useState(
    defaultValue === "on" ? true : false
  );
  return (
    <div className="form-control">
      <label className="label cursor-pointer">
        <span className="label-text">Free Shipping</span>
      </label>
      <input
        name="shipping"
        type="checkbox"
        className="checkbox checkbox-primary"
        checked={checked}
        onChange={() => setChecked(!checked)}
      />
    </div>
  );
};

export default FormCheckbox;
