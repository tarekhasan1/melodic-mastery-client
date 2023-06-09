import { Outlet } from "react-router-dom";
import NavigationBar from "../components/Navbar/NavigationBar";
import "./Main.css";
import Footer from "../components/Footer/Footer";

const Main = () => {
  return (
    <div className="container-fluid universal-bg">
      <NavigationBar></NavigationBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
