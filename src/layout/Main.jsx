import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const Main = () => {
    return (
        <div className="h-full">
            <Navbar></Navbar>
            <div className="h-full">
            <Outlet></Outlet>
            </div>
            <Footer></Footer>

        </div>
    );
};

export default Main;