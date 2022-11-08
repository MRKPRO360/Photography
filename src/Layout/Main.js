import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer";
import Nav from "../Pages/Shared/Nav";

export default function Main() {
  return (
    <div className="px-5 mx-auto xl:px-0 max-w-7xl">
      <Nav />
      <div className="pt-20 pb-16">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
