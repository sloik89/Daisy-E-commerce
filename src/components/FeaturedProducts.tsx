import { SectionTitle, ProductsGrid } from "../components";
import { Loader } from "../components";
import { useLocation } from "react-router-dom";
const FeaturedProducts = () => {
  return (
    <>
      <SectionTitle title="featured products" />
      <ProductsGrid />
    </>
  );
};

export default FeaturedProducts;
