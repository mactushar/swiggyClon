import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Header />

      <main className="px-40 ">
        <Outlet />
      </main>

      <Footer />
    </>
  );
};

export default Layout;
