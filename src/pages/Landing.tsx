import { Hero, FeaturedProducts } from "../components";
import { type LoaderFunction, useLoaderData } from "react-router-dom";
import { customFetch } from "../utilis/customFetch";
import { type Product } from "../utilis/types";
export const loader: LoaderFunction = async (): Promise<Product[]> => {
  const res = await customFetch("products");
  console.log(res);
  return res.data;
};
const Landing = () => {
  return (
    <>
      <Hero />
      <FeaturedProducts />
    </>
  );
};

export default Landing;
