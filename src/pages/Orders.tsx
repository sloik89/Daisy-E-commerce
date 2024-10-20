import { QueryClient } from "@tanstack/react-query";
import { LoaderFunction, redirect, useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import { ComplexPagination, OrdersList, SectionTitle } from "../components";
import { ReduxStore } from "../store";
import { customFetch } from "../utilis/customFetch";
import { type OrderResponse } from "../utilis/types";
const ordersQuery = (params:{page:string},token:string | undefined) => {
  return {
    queryKey:[`orders${params.page}`,token],
    queryFn:() =>customFetch<OrderResponse>(
      "orders/showAllMyOrder?limit=10",
      {
        params,
        headers: { Authorization: `Bearer ${token}` },
      }
    )
  }
}
export const loader =
  (store: ReduxStore,queryClient:QueryClient): LoaderFunction =>
  async ({ request }): Promise<OrderResponse | null> => {
    
    const token = store.getState().userState.user?.token;
    const user = store.getState().userState.user;
    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]) as {page:string};
    console.log(params)
    if (!user) {
      toast.warn("You must logged in to view orders");
      redirect("/login");
    }
    try {
      const res = await queryClient.ensureQueryData(ordersQuery(params,token))
      
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
