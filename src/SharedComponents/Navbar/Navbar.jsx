import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaUser } from "react-icons/fa";
import { AuthContext } from '../../Providers/AuthProviders';

const Navbar = () => {
    const {user} = useContext(AuthContext);
  
    return (
        <div className="navbar bg-base-100">
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
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li>
                    <a>Shop</a>
                    <ul className="p-2">
                        <li><a href='/products/VegetablesFruits'>Fruits and Vegetables</a></li>
                        <li><a href='/products/MeatFish'>Meat and Fish</a></li>
                        <li><a href='/products/HomeKitchen'>Home and Kitchen</a></li>
                        <li><a href='/products/BeautyHealth'>Beauty and Health Care</a></li>
                        <li><a href='/products/Snacks'>Snacks</a></li>
                        <li><a href='/products/Cooking'>Cooking</a></li>  
                    </ul>
                    </li>
                    <li><NavLink to='/aboutUs'>AboutUs</NavLink></li>
                    <li><NavLink to='/contactUs'>Contact Us</NavLink></li>
                </ul>
                </div>
            </div>
            <div className="navbar-start  text-2xl font-semibold hidden lg:flex ">
                <ul className="menu menu-horizontal px-1">
                <li className='px-4 bg-custom-gradient-red'>
                    <details>
                    <summary>All Category</summary>
                    <ul className="p-2">
                        <li><a href='/products/VegetablesFruits'>Fruits and Vegetables</a></li>
                        <li><a href='/products/MeatFish'>Meat and Fish</a></li>
                        <li><a href='/products/HomeKitchen'>Home and Kitchen</a></li>
                        <li><a href='/products/BeautyHealth'>Beauty and Health Care</a></li>
                        <li><a href='/products/Snacks'>Snacks</a></li>
                        <li><a href='/products/Cooking'>Cooking</a></li>  
                    </ul>
                    </details>
                </li>
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/aboutUs'>AboutUs</NavLink></li>
                <li><NavLink to='/contactUs'>Contact Us</NavLink></li>
                </ul>
            </div>
            <div className="navbar-end me-6 font-semibold">
                <FaUser className='me-2' />
                {
                    user?
                     <button>Sign Out</button>
                    :
                    <Link to='/signUp'>Sign Up</Link>
                }
            </div>
            </div>
    );
};

export default Navbar;