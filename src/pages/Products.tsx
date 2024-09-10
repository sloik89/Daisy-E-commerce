import { Fillters, ProductsContainer, Pagination } from "../components";
import { type LoaderFunction, useNavigation } from "react-router-dom";
import { customFetch } from "../utilis/customFetch";
import { Loader } from "../components";
export const loader: LoaderFunction = async ({ request }) => {
  const res = await customFetch("products?limit=10");
  console.log(res);
  return res.data.products;
  return null;
};
const Products = () => {
  const navigation = useNavigation();
  console.log(navigation);
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
