import { FormInput } from "../components";
import { SubmitBtn } from "../components";
import { Form, Link } from "react-router-dom";
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
