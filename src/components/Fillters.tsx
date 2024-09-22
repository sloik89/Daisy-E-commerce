import { Form, useLoaderData, Link } from "react-router-dom";
import { FormInput, FormSelect, FormRange, FormCheckbox } from "../components";
import { type ProductsResponse } from "../utilis/types";
import React, { ChangeEvent, useState } from "react";
const Fillters = () => {
  const maxPrice = 190000;
  const { meta, params } = useLoaderData() as ProductsResponse;
  const [range, setRange] = useState(parseInt(params.price) || maxPrice);

  const handleRange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRange(Number(e.target.value));
  };
  return (
    <Form className="py-8 px-4 bg-base-200 rounded-xl grid gap-x-6 gap-y-6 md:grid-cols-3">
      <FormInput
        name="search"
        type="text"
        label="search product"
        size="input-sm"
        defaultValue={params.search}
      />
      <FormSelect
        label="select category"
        name="category"
        list={meta.categories}
        size="select-sm"
        defaultValue={params.category}
      />
      <FormSelect
        label="select company"
        name="company"
        list={meta.companies}
        size="select-sm"
        defaultValue={params.company}
      />
      <FormSelect
        label="sort by"
        name="order"
        list={["a-z", "z-a", "high", "low"]}
        size="select-sm"
        defaultValue={params.order}
      />
      <FormRange
        label="price"
        name="price"
        range={range}
        handleRange={handleRange}
      />
      <FormCheckbox defaultValue={params.shipping} />
      <button className="btn btn-primary capitalize btn-sm">search</button>
      <Link to="/products" className="btn btn-accent capitalize btn-sm">
        reset
      </Link>
    </Form>
  );
};

export default Fillters;
