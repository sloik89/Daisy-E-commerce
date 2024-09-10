import { type LoaderFunction, useLoaderData } from "react-router-dom";
import { type Product } from "../utilis/types";
import { Link } from "react-router-dom";
import { formatPrice } from "../utilis/formatPrice";

const ProductsList = () => {
  const products = useLoaderData() as Product[];
  return (
    <div className="pt-12 grid gap-y-4 ">
      {products.map((product, idx) => {
        return (
          <Link
            className="card w-full shadow-xl hover:shadow-2xl transition duration-300 flex flex-column md:flex-row bg-base-300 group "
            key={product._id}
            to={`/products/${product._id}`}
          >
            <figure className="px-4 pt-4">
              <img
                src={product.image}
                alt=""
                className="rounded-xl h-[210px] w-[210px] group-hover:scale-105 transition duration-300"
              />
            </figure>
            <div className="card-body ">
              <h2 className="font-bold capitalize text-xl tracking-wide">
                {product.name}
              </h2>
              <h3>{product.company}</h3>
              <span className="text-secondary ml-0 sm:ml-auto">
                {formatPrice(product.price)}
              </span>
            </div>
          </Link>
        );
      })}
    </div>
  );
};
export default ProductsList;
