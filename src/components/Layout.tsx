import { Outlet } from "react-router-dom";
import Navbar from "../pages/Navbar";
import Footer from "../pages/Footer";

const Layout = () => {
  return (
    <>
      <Navbar />
      <main style={{ minHeight: "80vh" }}>
        <Outlet />
       <Footer />
      </main>
    </>
  );
};

export default Layout;
