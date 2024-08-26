const FormInput = ({
  label,
  name,
  type,
  defaultValue,
}: {
  label: string;
  name: string;
  type: string;
  defaultValue?: string;
}) => {
  return (
    <div className="form-control ">
      <div className="label">
        <span className="label-text">{label}</span>
      </div>
      <input
        type={type}
        placeholder="Type here"
        className="input input-bordered input-primary"
        name={name}
      />
    </div>
  );
};

export default FormInput;
