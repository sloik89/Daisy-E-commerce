import { FormInput } from "../components";
import { SubmitBtn } from "../components";
import { Form, Link } from "react-router-dom";

const Login = () => {
  return (
    <section className="h-screen grid place-items-center">
      <Form className="flex flex-col gap-y-4">
        <h3 className="text-3xl text-center font-bold">Login</h3>
        <FormInput type="text" label="What is your name" name="name" />
        <FormInput type="password" label="Password" name="password" />
        <SubmitBtn title="Login" />
        <SubmitBtn title="guest user" />
        <p>
          Not a member yet? <Link to="/register">Register</Link>
        </p>
      </Form>
    </section>
  );
};

export default Login;
