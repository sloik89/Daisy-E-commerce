import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import ProductsGrid from "../components/ProductsGrid";
import ProductsList from "../components/ProductsList";
import { BsFillGridFill, BsList } from "react-icons/bs";

import { type ProductsResponse } from "../utilis/types";
import { RiH4 } from "react-icons/ri";
const ProductsContainer = () => {
  const { totalProducts } = useLoaderData() as ProductsResponse;
  const [layout, setLayout] = useState<"grid" | "list">("grid");
  const setActiveBtn = (pattern: string) => {
    return pattern === layout
      ? " btn btn-primary text-primary-content"
      : " btn btn-ghost text-based-content";
  };
  return (
    <>
      <div className="flex items-center justify-between">
        <h4>
          {totalProducts}Product{totalProducts > 1 && "s"}
        </h4>
        <div className="flex gap-x-4">
          <button
            className={setActiveBtn("grid")}
            onClick={() => setLayout("grid")}
          >
            <BsFillGridFill />
          </button>
          <button
            className={setActiveBtn("list")}
            onClick={() => setLayout("list")}
          >
            <BsList />
          </button>
        </div>
      </div>
      {totalProducts === 0 ? (
        <h4>Sorry, no products matched your search...</h4>
      ) : layout === "grid" ? (
        <ProductsGrid />
      ) : (
        <ProductsList />
      )}
    </>
  );
};

export default ProductsContainer;
