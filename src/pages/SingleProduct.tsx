import React, { useState } from "react";
import {
  type LoaderFunction,
  useNavigation,
  useLoaderData,
  Link,
} from "react-router-dom";
import { type Product } from "../utilis/types";
import { customFetch } from "../utilis/customFetch";
import { formatPrice } from "../utilis/formatPrice";

export const loader: LoaderFunction = async ({ params }) => {
  const { id } = params;
  const res = await customFetch(`products/${id}`);
  return res.data;
  console.log(res);
  return null;
};
const createOption = (optionNumber: number) => {
  console.log(optionNumber);
  let option = [];
  for (let i = 1; i <= optionNumber; i++) {
    console.log(i);
    const jxd = <option key={i}>{i}</option>;
    option.push(jxd);
  }
  return option;
};
const SingleProduct = () => {
  const product = useLoaderData() as Product;
  const loading = useNavigation().state === "loading";
  const [stateClr, setStateClr] = useState(product.colors[0]);
  const [select, setSelect] = useState(2);
  const handleAmount = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelect(Number(e.target.value));
  };
  console.log(select);
  return (
    <section>
      <div className="breadcrumbs">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </div>
      <div className="grid gap-y-5 lg:grid-cols-2 lg:gap-x-8 ">
        <img
          className="w-96 h-96 object-cover rounded-lg lg:w-full"
          src={product.image}
          alt={product.name}
        />
        <div>
          <h1 className="capitalize text-3xl font-bold">{product.name}</h1>
          <h4 className="text-xl text-neutral-content font-bold mt-2">
            {product.company}
          </h4>
          <p className="mt-3 text-xl">{formatPrice(product.price)}</p>
          <p className="leading-7 mt-6">{product.description}</p>
          <div className="mt-2">
            <h3 className="mb-3">Colors</h3>
            {product.colors.map((color, idx) => {
              return (
                <button
                  key={color}
                  onClick={() => setStateClr(color)}
                  style={{ backgroundColor: `${color}` }}
                  className={`btn btn-circle btn-xs ${
                    color === stateClr && "border-2 border-secondary"
                  } `}
                ></button>
              );
            })}
          </div>
          <div className="flex items-center gap-3 mt-3">
            <label className="capitalize" htmlFor="amount">
              amount
            </label>
            <select
              onChange={handleAmount}
              className="select select-secondary select-md font-bold"
              id="amount"
            >
              {Array.from({ length: product.inventory }, (_, idx) => {
                const currentIdx = idx + 1;
                return (
                  <option className="font-bold" value={currentIdx} key={idx}>
                    {currentIdx}
                  </option>
                );
              })}
            </select>
          </div>
          <div>
            <button className="btn btn-primary mt-3 capitalize">
              add to bag
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleProduct;
