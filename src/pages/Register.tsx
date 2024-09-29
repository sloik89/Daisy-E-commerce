import { FormInput } from "../components";
import { SubmitBtn } from "../components";

import { Form, Link, ActionFunction, redirect } from "react-router-dom";
import { customFetch } from "../utilis/customFetch";
import { type AxiosError, isAxiosError } from "axios";
import { toast } from "react-toastify";
export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    const res = await customFetch.post("auth/register", data);
    console.log(res);
    toast.success("account created succesfull");
    return redirect("/login");
  } catch (err) {
    let error;
    if (isAxiosError(err)) {
      error = err?.response?.data?.msg || "err";
    } else {
      error = "unknown error";
    }
    toast.error(error);
    console.log(error);
  }
  console.log(data);
  return null;
};
const Register = () => {
  return (
    <section className="h-screen grid place-items-center">
      <Form method="POST" className="flex flex-col gap-y-4">
        <h3 className="text-3xl text-center font-bold">Register</h3>
        <FormInput type="text" label="Name" name="name" />
        <FormInput type="email" label="Email" name="email" />
        <FormInput type="password" label="Password" name="password" />
        <SubmitBtn title="Register" />
        {/* <SubmitBtn title="guest user" /> */}
        <p>
          Allready a user? <Link to="/login">Login</Link>
        </p>
      </Form>
    </section>
  );
};

export default Register;
