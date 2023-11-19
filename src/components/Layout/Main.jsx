import { Outlet } from "react-router-dom";
import Footer from "../shared/Foote/Footer";
import Navbar from "../shared/Navbar/Navbar";

const Main = () => {
  // const location = useLocation();
  // console.log(location);
  // const noHeader = location.pathname.includes("login");
  // const noHeaderForRegister = location.pathname.includes("register");
  return (
    <div>
       <Navbar></Navbar>
      <Outlet></Outlet>
    <Footer></Footer>
    </div>
  );
};

export default Main;
