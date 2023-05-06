import { Outlet } from "react-router-dom";
import Navbar from "../utils/Navbar"
import Footer from "../compontents/Footer/Footer"

const Main = () => {
    return (
        <>
         <Navbar/>
         <Outlet/>
         <Footer/>
            
        </>
    );
};

export default Main;