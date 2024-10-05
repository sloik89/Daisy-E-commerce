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

import { ErrorElement } from "./components";

// loaders
import { loader as landingLoader } from "./pages/Landing";
import { loader as singleLoader } from "./pages/SingleProduct";
import { loader as productsLoader } from "./pages/Products";

// actions
import { action as registerAction } from "./pages/Register";
import { action as loginAction } from "./pages/Login";
import { store } from "./store";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <ErrorElement />,
        loader: landingLoader,
      },
      {
        path: "about",
        element: <About />,
      },

      {
        path: "products",
        element: <Products />,
        loader: productsLoader,
      },
      {
        path: "products/:id",
        element: <SingleProduct />,
        loader: singleLoader,
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
    action: loginAction(store),
  },
  {
    path: "register",
    element: <Register />,
    action: registerAction,
  },
]);
function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
