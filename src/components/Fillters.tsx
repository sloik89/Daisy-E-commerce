import { Form, useLoaderData, Link } from "react-router-dom";
import { FormInput, FormSelect, FormRange } from "../components";
import { type ProductsResponse } from "../utilis/types";
import React, { ChangeEvent, useState } from "react";
const Fillters = () => {
  const { meta } = useLoaderData() as ProductsResponse;
  const [range, setRange] = useState(0);

  const handleRange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRange(Number(e.target.value));
    console.log(range);
  };
  return (
    <Form className="py-8 px-4 bg-base-200 rounded-xl grid gap-x-6 gap-y-6 md:grid-cols-3">
      <FormInput
        name="search"
        type="text"
        label="search product"
        size="input-sm"
      />
      <FormSelect
        label="select category"
        name="category"
        list={meta.categories}
        size="select-sm"
      />
      <FormSelect
        label="select company"
        name="company"
        list={meta.companies}
        size="select-sm"
      />
      <FormRange range={range} handleRange={handleRange} />
      <button className="btn btn-primary capitalize btn-sm">search</button>
      <Link to="/products" className="btn btn-accent capitalize btn-sm">
        reset
      </Link>
    </Form>
  );
};

export default Fillters;
