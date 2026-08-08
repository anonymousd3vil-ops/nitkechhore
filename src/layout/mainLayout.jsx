import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/footer";
import { commonHoverEffect } from "../styles/commonStyles.js";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../applicationStates/reduxSlices/userAuthSlice.js";
import ThemeToggle from "../components/ThemeToggel.jsx";

function MainLayout({children}) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isLoggedIn = useSelector((state) => state.auth.isLoggedin);
    const profilePic = useSelector((state) => state?.auth?.data?.avatar?.secure_url);

    const handelLogout = async (event) => {
    event.preventDefault();

    const res = await dispatch(logout());
    
    if(res?.payload?.success){
      navigate('/')
    }
  }

    return (
        <div>
            <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50 flex">
                <ThemeToggle /> 
                {
                    isLoggedIn && (

                        <div className="w-10 rounded-full btn p-0.5">
                            <img
                                className="rounded-full"
                                alt="Profile Picture"
                                src={profilePic}
                                onClick={() => navigate('/profile')}
                            />
                        </div>
                    )
                }
                {
                    isLoggedIn && (
                        <div>
                            <button onClick={handelLogout} className="btn btn-primary rounded-full">Logout</button>
                        </div>
                    )
                }
                {
                    !isLoggedIn && (
                        <Link to={'/user/login'}><button className="btn btn-primary rounded-full">Login</button></Link>
                    )
                }
            </div>
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
                <div className="flex gap-2 md:flex-row flex-col items-center justify-center">
                    <input type="text" placeholder="Search" className="input w-24 md:w-auto border rounded-lg font-secondary" />
                    {
                        isLoggedIn && 
                        <div className="flex flex-col md:flex-row items-center justify-center">
                            <div>
                                <button onClick={handelLogout} className="btn btn-primary rounded-full px-8">Logout</button>
                            </div>
                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    
                                    <div className="w-10 rounded-full">
                                        <img
                                            alt="Tailwind CSS Navbar component"
                                            src={profilePic}
                                            />
                                    </div>
                                    
                                </div>
                            
                                <ul
                                    tabIndex="-1"
                                    className="menu menu-sm dropdown-content bg-base-200 rounded-lg z-1 mt-3 w-60 p-2 shadow">
                                    <li><Link to={'/profile'}>Profile</Link></li>
                                    <li><Link>Settings</Link></li>
                                    <li><Link onClick={handelLogout}>Logout</Link></li>
                                </ul>
                                
                            </div>
                        </div>
                    }
                    {
                        !isLoggedIn &&
                        <div className="flex ">
                            <Link to={'/user/login'}><button className="btn btn-outline btn-primary rounded-full px-8">Login</button></Link>
                            <Link to={'/user/register'}><button className="btn btn-primary rounded-full px-8">Signup</button></Link>
                        </div>
                    }
                </div>
            </div>
            {children}
            <Footer/>
        </div>
            
    );
}

export default MainLayout;