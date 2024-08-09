import { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";
import { AuthContext } from "../../../Providers/AuthProviders";

const Product = ({product}) => {
    const { _id, title, price, quantity, imagePath } = product;
    const {handleAddToCart} = useContext(AuthContext);
    return (
        <div className='text-center bg-white rounded-md shadow-md pb-8 px-6'>
            <img className="w-2/3 mx-auto" src={imagePath} alt={title} />
            <h6 className='text-custom-teal text-xl mb-2 mx-2'>{title}</h6>
            <p className=''>{quantity}</p>
            <p className='price'><span className="text-2xl me-2">৳</span>{price}</p>
            <button onClick={()=>handleAddToCart(product)} className='bg-custom-gradient-red text-white px-4 py-2 mt-2 rounded-badge'>
                <FaShoppingCart className="inline"/> Add to cart
            </button>
        </div>
    );
};

export default Product;