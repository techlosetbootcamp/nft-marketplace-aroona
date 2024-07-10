import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className=" bg-bgPrimary text-primaryText overflow-x-hidden">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
