import { QueryClient } from "@tanstack/react-query";
import { type LoaderFunction, useNavigation } from "react-router-dom";
import { Fillters, Loader, Pagination, ProductsContainer } from "../components";
import { customFetch } from "../utilis/customFetch";
import { type Params } from '../utilis/types';
const productsProductsQuery =(params:Params)=> {
  const {order,price,company,search,category,shipping} = params
  return{
  queryKey:['Products',order,price,company,search,category,shipping],
  queryFn:()=>customFetch('products',{params})
  }
}
export const loader =(queryClient:QueryClient): LoaderFunction => async ({ request }) => {
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]) as Params;
console.log(params)
  const res = await queryClient.ensureQueryData(productsProductsQuery(params));

  const data = { ...res.data, params };
  return data;
};
const Products = () => {
  const navigation = useNavigation();

  if (navigation.state === "loading") {
    return <Loader />;
  }
  return (
    <div>
      <Fillters />
      <ProductsContainer />
      <Pagination />
    </div>
  );
};

export default Products;
