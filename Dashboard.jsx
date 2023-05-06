
import { Outlet } from "react-router-dom";
import Footer from "../compontents/Footer/Footer";
import Navbar from "../utils/Navbar";

const Dashboard = () => {
    return (
        <>
         <Navbar/>
         <Outlet/>
         <Footer/>
            
        </>
    );
};

export default Dashboard;