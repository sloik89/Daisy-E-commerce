import { Fillters, ProductsContainer, Pagination } from "../components";
import { type LoaderFunction, useNavigation } from "react-router-dom";
import { customFetch } from "../utilis/customFetch";
import { Loader } from "../components";
export const loader: LoaderFunction = async ({ request }) => {
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);

  const res = await customFetch("products", { params });

  console.log(params);
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
