
import { QueryClient, type QueryFunctionContext } from "@tanstack/react-query";
import { type LoaderFunction, useLoaderData } from "react-router-dom";
import { FeaturedProducts, Hero } from "../components";
import { customFetch } from "../utilis/customFetch";
import { type Product } from "../utilis/types";
const featuredProductsQuery = {
  queryKey:['featuredProducts'],
  queryFn:()=>customFetch('products')
  
}
export const loader= (queryClient:QueryClient): LoaderFunction =>async (): Promise<Product[]> => {
  const res = await queryClient.ensureQueryData(featuredProductsQuery)
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
