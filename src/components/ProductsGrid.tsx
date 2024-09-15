import { type LoaderFunction, useLoaderData } from "react-router-dom";
import { type ProductsResponse } from "../utilis/types";
import { Link } from "react-router-dom";
import { formatPrice } from "../utilis/formatPrice";

const ProductsGrid = () => {
  const { products } = useLoaderData() as ProductsResponse;

  return (
    <div className="pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {products.map((product, idx) => {
        return (
          <Link
            className="card w-full shadow-xl hover:shadow-2xl transition duration-300"
            key={product._id}
            to={`/products/${product._id}`}
          >
            <figure className="px-4 pt-4">
              <img
                src={product.image}
                alt=""
                className="rounded-xl h-[210px] w-full object-cover"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="font-bold capitalize text-xl tracking-wide">
                {product.name}
              </h2>
              <span className="text-secondary">
                {formatPrice(product.price)}
              </span>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default ProductsGrid;
