import { Outlet } from "react-router-dom";
import { Header, Loader, Navbar } from "../components";
import { useNavigation } from "react-router-dom";

const Home = () => {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === "loading";
  return (
    <>
      <Header />
      <Navbar />
      <section className="align-element py-20">
        {isPageLoading ? <Loader /> : <Outlet />}
      </section>
    </>
  );
};

export default Home;
