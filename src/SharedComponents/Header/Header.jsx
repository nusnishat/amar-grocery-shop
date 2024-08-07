import { FaBasketShopping } from "react-icons/fa6";

const Header = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3  bg-custom-gradient py-4 px-4 md:px-8'>
            <div className="flex">
                <div className="p-4 bg-custom-gradient-red text-white">
                    <FaBasketShopping></FaBasketShopping>
                </div>
                <div>
                    <p>Amar Grocery</p>
                </div>
            </div>
            <div>

            </div>
            <div>

            </div>
        </div>
    );
};

export default Header;