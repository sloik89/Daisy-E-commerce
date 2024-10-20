import { LoaderFunction, redirect, useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import { ComplexPagination, OrdersList, SectionTitle } from "../components";
import { ReduxStore } from "../store";
import { customFetch } from "../utilis/customFetch";
import { type OrderResponse } from "../utilis/types";

export const loader =
  (store: ReduxStore): LoaderFunction =>
  async ({ request }): Promise<OrderResponse | null> => {
    
    const token = store.getState().userState.user?.token;
    const user = store.getState().userState.user;
    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);
    if (!user) {
      toast.warn("You must logged in to view orders");
      redirect("/login");
    }
    try {
      const res = await customFetch<OrderResponse>(
        "orders/showAllMyOrder?limit=10",
        {
          params,
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      
      return res.data;
    } catch (err) {
      console.log(err);
    }
    return null;
  };
const Orders = () => {
  const data = useLoaderData() as OrderResponse;
  console.log(data);
  if (data.meta.pagination.total < 1) {
    <SectionTitle title="please make an order" />;
  }
  return (
    <div>

      <OrdersList />
      <ComplexPagination />
    </div>
  );
};

export default Orders;
