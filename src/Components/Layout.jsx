import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import Topnav from "./Topnav/Topnav";

export default function Layout() {
  return (
    <>
      <div className="parent">
        <Topnav />
        <Navbar />
        <div className="">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
}
