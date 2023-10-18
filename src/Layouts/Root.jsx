import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Navbar/Navbar";
import Footer from "../Pages/Footer/Footer";



const Root = () => {
    return (
        <div className="">
            <Navbar></Navbar>
            <Outlet></Outlet>
            {/* <SendMessage></SendMessage> */}
            <Footer></Footer>

        </div>
    );
};

export default Root;