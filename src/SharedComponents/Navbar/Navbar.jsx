import { NavLink } from 'react-router-dom';

const Navbar = () => {
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
                    <li><NavLink to='/home'>Home</NavLink></li>
                    <li>
                    <a>Shop</a>
                    <ul className="p-2">
                        <li><NavLink to='/all'>All</NavLink></li>
                        <li><NavLink to='/all'>Fruits and Vegetables</NavLink></li>
                        <li><NavLink to='/all'>Meat and Fish</NavLink></li>
                        <li><NavLink to='/all'>Home and Kitchen</NavLink></li>
                        <li><NavLink to='/all'>Beauty and Health Care</NavLink></li>
                        <li><NavLink to='/all'>Snacks</NavLink></li>
                        <li><NavLink to='/all'>Cooking</NavLink></li>  
                    </ul>
                    </li>
                    <li><NavLink to='/aboutUs'>AboutUs</NavLink></li>
                    <li><NavLink to='/contactUs'>Contact Us</NavLink></li>
                </ul>
                </div>
            </div>
            <div className="navbar-start hidden lg:flex ">
                <ul className="menu menu-horizontal px-1">
                <li className='px-4 bg-custom-gradient-red'>
                    <details>
                    <summary>All Category</summary>
                    <ul className="p-2">
                        <li><NavLink to='/all'>All</NavLink></li>
                        <li><NavLink to='/all'>Fruits and Vegetables</NavLink></li>
                        <li><NavLink to='/all'>Meat and Fish</NavLink></li>
                        <li><NavLink to='/all'>Home and Kitchen</NavLink></li>
                        <li><NavLink to='/all'>Beauty and Health Care</NavLink></li>
                        <li><NavLink to='/all'>Snacks</NavLink></li>
                        <li><NavLink to='/all'>Cooking</NavLink></li>  
                    </ul>
                    </details>
                </li>
                <li><NavLink to='/home'>Home</NavLink></li>
                <li><NavLink to='/aboutUs'>AboutUs</NavLink></li>
                <li><NavLink to='/contactUs'>Contact Us</NavLink></li>
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Button</a>
            </div>
            </div>
    );
};

export default Navbar;