import { useNavigation } from "react-router-dom";
const SubmitBtn = ({ title }: { title: string }) => {
  const navigation = useNavigation();

  const isSubmiting = navigation.state === "submitting";
  return (
    <button
      className="btn-primary btn uppercase tracking-wider"
      disabled={isSubmiting}
    >
      {isSubmiting ? <span className="loading loading-spinner"></span> : title}
    </button>
  );
};

export default SubmitBtn;
