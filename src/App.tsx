import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  Home,
  About,
  Landing,
  Login,
  Register,
  Cart,
  Checkout,
  SingleProduct,
  Products,
  Error,
  Orders,
} from "./pages";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "about",
        element: <About />,
      },

      {
        path: "products",
        element: <Products />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "orders",
        element: <Orders />,
      },
      {
        path: "checkout",
        element: <Checkout />,
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "register",
    element: <Register />,
  },
]);
function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
