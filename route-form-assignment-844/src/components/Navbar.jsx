import { NavLink,Outlet } from "react-router-dom";

const Navigate = () => {
    return (
        <>
            <nav className="flex space-x-6 justify-center p-6 bg-white shadow-md font-bold text-xl">
                <NavLink to ="/" className="transition-transform transform hover:scale-105" end>Home</NavLink>
                <NavLink to="/login" className="transition-transform transform hover:scale-105" >Login</NavLink>
                <NavLink to="/fav" className="transition-transform transform hover:scale-105" >Favourite</NavLink>
                
            </nav>
            <Outlet></Outlet>
        </>
    )
}
export default Navigate;