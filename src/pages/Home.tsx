import { Outlet } from "react-router-dom";
const Home = () => {
  return (
    <section>
      Home
      <Outlet />
    </section>
  );
};

export default Home;
