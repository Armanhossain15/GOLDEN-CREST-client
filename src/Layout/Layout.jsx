import { Outlet } from "react-router-dom";
import Navbar from "../Component/Navbar/Navbar";
import Footer from "../Component/Footer/Footer";


const Layout = () => {
    return (
        <div className="font-rale">
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Layout;