const SubmitBtn = ({ title }: { title: string }) => {
  return (
    <button className="btn-primary btn uppercase tracking-wider">
      {title}
    </button>
  );
};

export default SubmitBtn;
