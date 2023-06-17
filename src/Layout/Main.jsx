import { Outlet } from "react-router-dom";
import NavigationBar from "../components/Navbar/NavigationBar";
import "./Main.css";
import Footer from "../components/Footer/Footer";
import { useState } from "react";

const Main = () => {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <div className={darkMode ? "universal-bg-1": "universal-bg-2"}>
      <NavigationBar darkMode={darkMode} setDarkMode={setDarkMode}></NavigationBar>
      <Outlet></Outlet>
      <Footer darkMode={darkMode} setDarkMode={setDarkMode}></Footer>
    </div>
  );
};

export default Main;
