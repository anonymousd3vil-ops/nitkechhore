import { Link } from "react-router-dom";
import Footer from "../components/footer";
import { commonHoverEffect } from "../styles/commonStyles.js";

function MainLayout({children}) {
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm p-5 flex-col md:flex-row">
                <div className="flex-1">
                    <Link to={"/"} className="btn btn-ghost text-3xl rounded-lg font-primary">nitkechhore</Link>
                </div>
                <div className="hidden md:block w-full">
                    <div className="flex items-center justify-center gap-5 font-secondary text-xl font-bold">
                       <Link to={'/'} className={commonHoverEffect}>Home</Link> 
                       <Link to={'/about'} className={commonHoverEffect}>About Us</Link> 
                       <Link to={'/contact'} className={commonHoverEffect}>Contact Us</Link> 
                      
                    </div>
                </div>
                <div className="flex gap-2">
                    <input type="text" placeholder="Search" className="input w-24 md:w-auto border rounded-lg" />
                    <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                        <img
                            alt="Tailwind CSS Navbar component"
                            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-200 rounded-lg z-1 mt-3 w-60 p-2 shadow">
                        <li><a>Profile</a></li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                    </div>
                </div>
            </div>
            {children}
            <Footer/>
        </div>
            
    );
}

export default MainLayout;