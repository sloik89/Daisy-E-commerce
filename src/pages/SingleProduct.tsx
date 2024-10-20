import { QueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
import {
  Link,
  type LoaderFunction,
  useLoaderData,
  useNavigation,
} from "react-router-dom";
import { addItem } from "../features/cart/cartSlice";
import { useAppDispatch } from "../hooks";
import { customFetch } from "../utilis/customFetch";
import { formatPrice } from "../utilis/formatPrice";
import { type Product } from "../utilis/types";
const singleProductQuery = (id:string | undefined) => {
  return {
    queryKey:[`singleProduct${id}`],
    queryFn:() =>customFetch(`products/${id}`)
  }
}
export const loader =(queryClient:QueryClient): LoaderFunction => async ({ params }) => {
  const { id } = params;
  const res = await queryClient.ensureQueryData(singleProductQuery(id))
  return res.data;
  
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
  const [select, setSelect] = useState(1);
  const dispatch = useAppDispatch();
  const handleAmount = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelect(Number(e.target.value));
  };
  console.log(product);
  const cartProduct = {
    cartId: product._id + stateClr,
    productId: product._id,
    price: product.price,
    title: product.name,
    image: product.image,
    productColor: stateClr,
    company: product.company,
    amount: select,
  };
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
              defaultValue={select}
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
            <button
              onClick={() => dispatch(addItem(cartProduct))}
              className="btn btn-primary mt-3 capitalize"
            >
              add to bag
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleProduct;
