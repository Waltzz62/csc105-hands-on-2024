import { NavLink, Outlet } from "react-router-dom";

const NotfoundPage = () => {
    return (
        <div className="flex items-center justify-center h-screen text-center flex-col bg-[#2E5283]">
            <h1 className="font-bold text-[200px] text-white transition-transform transform hover:scale-105">
                404 - Page Not Found.
            </h1>
            <NavLink to="/" className="bg-white text-[#2E5283] px-5 py-5 rounded-md font-bold transition-transform transform hover:scale-105" >
            Back to Home
            </NavLink>
            
        </div>
    )
}
export default NotfoundPage;