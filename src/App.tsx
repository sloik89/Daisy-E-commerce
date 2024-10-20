import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  About,
  Cart,
  Checkout,
  Error,
  Home,
  Landing,
  Login,
  Orders,
  Products,
  Register,
  SingleProduct,
} from "./pages";

import { ErrorElement } from "./components";

// loaders
import { loader as checkoutLoader } from "./pages/Checkout";
import { loader as landingLoader } from "./pages/Landing";
import { loader as ordersLoader } from "./pages/Orders";
import { loader as productsLoader } from "./pages/Products";
import { loader as singleLoader } from "./pages/SingleProduct";
// actions
import { action as checkoutAction } from "./components/CheckoutForm";
import { action as loginAction } from "./pages/Login";
import { action as registerAction } from "./pages/Register";
import { store } from "./store";
const queryClient = new QueryClient({
  defaultOptions:{
    queries:{
      staleTime:1000 * 60 * 5
    }
  }
})
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
        loader: landingLoader(queryClient),
      },
      {
        path: "about",
        element: <About />,
      },

      {
        path: "products",
        element: <Products />,
        loader: productsLoader(queryClient),
      },
      {
        path: "products/:id",
        element: <SingleProduct />,
        loader: singleLoader(queryClient),
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "orders",
        element: <Orders />,
        loader: ordersLoader(store,queryClient),
      },
      {
        path: "checkout",
        element: <Checkout />,
        loader: checkoutLoader(store),
        action: checkoutAction(store,queryClient),
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
  return (
  <QueryClientProvider client={queryClient}>
  <RouterProvider router={router}></RouterProvider>;
  <ReactQueryDevtools initialIsOpen={false}/>
  </QueryClientProvider>)

}

export default App;
