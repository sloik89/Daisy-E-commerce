import day from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import { useLoaderData } from "react-router-dom";
import { type OrderResponse } from "../utilis/types";
day.extend(advancedFormat);

const OrdersList = () => {
  const { meta, order } = useLoaderData() as OrderResponse;
  return (
    <div className="mt-8">
      <h4>total orders :{meta.pagination.total}</h4>
      <div>
        <table className="table table-zebra">
          <thead>
            <tr>
              <th>Name</th>
              <th>Address</th>
              <th>Products</th>
              <th>Cost</th>
              <th className="hidden sm:block">Date</th>
            </tr>
          </thead>
          <tbody>
            {order.map((item) => {
              const date = day(item.createdAt).format("hh:mm a - MMM Do, YYYY");
              return (
                <tr key={item._id}>
                  <td>{item._id}</td>
                  <td>{item.address}</td>
                  <td>{item.numItemsInCart}</td>
                  <td>{item.total}</td>
                  <td>{date}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrdersList;
