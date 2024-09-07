import { type LoaderFunction } from "react-router-dom";
import { customFetch } from "../utilis/customFetch";

export const loader: LoaderFunction = async ({ params }) => {
  const { id } = params;

  return null;
};
const SingleProduct = () => {
  return <div>SingleProduct</div>;
};

export default SingleProduct;
