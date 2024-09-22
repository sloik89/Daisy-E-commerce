const FormInput = ({
  label,
  name,
  type,
  defaultValue,
  size,
}: {
  label: string;
  name: string;
  type: string;
  defaultValue?: string;
  size?: string | undefined;
}) => {
  return (
    <div className="form-control ">
      <div className="label">
        <span className="label-text">{label}</span>
      </div>
      <input
        type={type}
        placeholder="Type here"
        className={`input input-bordered input-primary ${size}`}
        name={name}
        defaultValue={defaultValue}
      />
    </div>
  );
};

export default FormInput;
