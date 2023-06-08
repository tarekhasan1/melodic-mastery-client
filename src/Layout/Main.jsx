import { Outlet } from "react-router-dom";
import NavigationBar from "../components/Navbar/NavigationBar";
import './Main.css'


const Main = () => {
    return (
        <div className="container-fluid universal-bg">
        <NavigationBar></NavigationBar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;