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
