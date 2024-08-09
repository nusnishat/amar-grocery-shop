import { FaBasketShopping } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { AuthContext } from "../../Providers/AuthProviders";
import { useContext, useEffect} from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const {user, cartProducts, setCartProducts} = useContext(AuthContext)
    useEffect(()=>{
        fetch(`http://localhost:5000/checkOut?email=${user?.email}`)
        .then(res => res.json())
        .then(data=>setCartProducts(data))
    }, []);
    
    return (
        <div className='md:flex bg-custom-gradient py-4 px-8 space-y-4'>
            <div className="text-2xl text-white font-semibold flex items-center justify-center my-auto mx-auto">
                <div className="p-2 me-2 rounded-md bg-custom-gradient-red text-white">
                    <FaBasketShopping className="text-3xl"></FaBasketShopping>
                </div>
                <div>
                    <p className="mt-2 text-2xl">Amar Grocery</p>
                </div>
            </div>
            <div className="flex items-center justify-center my-auto mx-auto md:w-1/2 shadow-sm">
                <input type="text" className="form-control w-full p-2" placeholder="Search Product" />
                <button className="py-2 px-4 bg-custom-gradient-red text-white" type="button">Search</button>
            </div>
            <div className="flex items-center justify-center my-auto mx-auto p-2 px-6 bg-white font-semibold rounded-full">
                <FaShoppingCart className="me-2 text-xl mt-1 inline" ></FaShoppingCart>
                <Link to="/cart" className="inline">My Cart ({cartProducts.length})</Link>

            </div>
        </div>
    );
};

export default Header;