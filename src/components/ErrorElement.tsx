import { useRouteError, type ErrorResponse } from "react-router-dom";

const ErrorElement = () => {
  const err = useRouteError() as ErrorResponse;
  console.log(err);
  return <h4 className="font-bold text-5xl">There was an error</h4>;
};

export default ErrorElement;
