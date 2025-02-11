import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { useContext, useEffect, useState } from "react";
import logoImg from '../assets/logo.png';
import useAuth from "../customHooks/useAuth";

const Navbar = () => {
    const { user, signOutUser, loading, setLoading } = useAuth();
    const links = <>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/about'}>About</Link></li>
        {
            !user && <li><Link to={'/landing'}>Explore</Link></li>
        }
        {
            user &&
            <>
                <li><Link to={'/books'}>All Books</Link></li>
                <li><Link to={'/addBooks'}>Add Books</Link></li>
                <li><Link to={`/borrowedBooks/${user.email}`}>Borrowed Books</Link></li>
            </>
        }
    </>

    // Theme Toggler.
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);
    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };

    const handleLogOut = () => {
        signOutUser()
            .then(() => {
                ////console.log('User signed out')
            })
            .catch(error => {

                ////console.log(error)
            })
    };

    return (
        <div className="bg-[#d1f7c4] text-gray-800 py-5 fixed w-full z-50 top-0">
            <div className="container mx-auto">
                <div className="navbar flex items-center">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                {links}
                            </ul>
                        </div>

                        <div className="flex items-center gap-2">
                            <img src={logoImg} alt="" className="w-10 h-10" />
                            <h3 className="text-2xl text-gray-800">EduShelf</h3>
                        </div>

                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {links}
                        </ul>
                    </div>
                    <div className="navbar-end gap-5">
                    <div className="text-gray-800">
                            <label className="flex cursor-pointer gap-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round">
                                    <circle cx="12" cy="12" r="5" />
                                    <path
                                        d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                                </svg>
                                <input
                                    type="checkbox"
                                    checked={theme === "dark"}
                                    onChange={toggleTheme}
                                    className="toggle theme-controller"
                                />
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round">
                                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                                </svg>
                            </label>
                        </div>

                        {
                            user && user.photoURL ? (
                                <div className="relative group">
                                    <img
                                        src={user.photoURL}
                                        alt=""
                                        className="w-8 h-8 rounded-full"
                                    />
                                    <p
                                        className="absolute top-8 w-[120px] text-center mt-1 left-1/2 transform -translate-x-1/2 bg-blue-500  text-white text-xs font-semibold rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        {user.displayName}
                                    </p>
                                </div>

                            ) : (
                                <Link to={'/auth/register'} className="underline text-black hover:text-blue-700">Register</Link>
                            )
                        }
                        {
                            user && user.email ? (
                                <button onClick={handleLogOut} className="btn border-none bg-[#1a237e] hover:bg-blue-700 text-white">Logout</button>
                            ) : (
                                <Link to={'/auth/login'} className="btn bg-[#1a237e] border-none hover:bg-blue-700 text-white">Login</Link>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;