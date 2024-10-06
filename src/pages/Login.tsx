import { FormInput } from "../components";
import { SubmitBtn } from "../components";
import { type Store } from "@reduxjs/toolkit";
import {
  Form,
  Link,
  ActionFunction,
  redirect,
  useNavigate,
} from "react-router-dom";
import { customFetch } from "../utilis/customFetch";
import { AxiosError, AxiosResponse, isAxiosError } from "axios";
import { toast } from "react-toastify";
import { logginUser } from "../features/user/userSlice";
import { useAppDispatch } from "../hooks";

export const action =
  (store: Store): ActionFunction =>
  async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);

    try {
      const res = await customFetch.post("auth/login", data);
      console.log(res);

      store.dispatch(logginUser(res.data));
      return redirect("/products");
    } catch (err) {
      let errMsg;
      console.log(err);
      if (isAxiosError(err)) {
        errMsg = err?.response?.data?.msg;
      } else {
        errMsg = "unknown error";
      }

      toast.error(errMsg);
    }

    return null;
  };
const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const loggingAsGuest = async () => {
    const testUser = {
      email: "test1@gmail.com",
      password: "secret",
    };
    try {
      const res = await customFetch.post("auth/login", testUser);
      dispatch(logginUser(res.data));
      navigate("/products");
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <section className="h-screen grid place-items-center">
      <Form className="flex flex-col gap-y-4" method="post">
        <h3 className="text-3xl text-center font-bold">Login</h3>
        <FormInput type="email" label="Email" name="email" />
        <FormInput type="password" label="Password" name="password" />
        <SubmitBtn title="Login" />
        {/* <SubmitBtn title="guest user" /> */}
        <button
          onClick={loggingAsGuest}
          className="btn btn-primary"
          type="button"
        >
          guest user
        </button>
        <p>
          Not a member yet? <Link to="/register">Register</Link>
        </p>
      </Form>
    </section>
  );
};

export default Login;
