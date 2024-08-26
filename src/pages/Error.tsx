import { useRouteError, Link, type ErrorResponse } from "react-router-dom";
const Error = () => {
  const error = useRouteError() as ErrorResponse;

  if (error.status === 404) {
    return (
      <main className="min-h-[100vh] grid place-items-center px-8 ">
        <div className="text-center">
          <p className="text-9xl text-primary">404</p>
          <h1 className="text-3xl font-bold mt-4 mb-4">Page not found</h1>
          <p className="mb-8">
            Sorry, we couldn't find the page you're looking for.
          </p>
          <div>
            <Link className="btn btn-secondary uppercase tracking-wide" to="/">
              go back home
            </Link>
          </div>
        </div>
      </main>
    );
  }
  return (
    <main className="min-h-[100vh] grid place-items-center">
      <h4 className="text-4xl">there was an error...</h4>
    </main>
  );
};

export default Error;
