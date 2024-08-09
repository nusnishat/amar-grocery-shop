import { useContext, useEffect } from 'react';
import { AuthContext } from '../../Providers/AuthProviders';
import CartProduct from './CartProduct/CartProduct';
import CartCalculation from './CartCalculation/CartCalculation';

const Cart = () => {
    const {user, cartProducts, setCartProducts} = useContext(AuthContext)
    useEffect(()=>{
        fetch(`https://amar-grocery-shop-server.onrender.com/checkOut?email=${user?.email}`)
        .then(res => res.json())
        .then(data=>setCartProducts(data))
    }, [user]);

    return (
        <div className='bg-custom-light'>
            <div className='py-16 bg-custom-gradient text-center text-4xl text-white font-semibold'>
                <h1>Cart</h1>
            </div>
           {
            cartProducts.length != 0?
            <div className='md:grid grid-cols-3 gap-8 py-20 px-8 md:px-20'>
            <div className='col-span-2'>
                    {
                        cartProducts.map(cartProduct=><CartProduct key={cartProduct._id} cartProduct={cartProduct}></CartProduct>)
                    }
                </div>
                <div>
                    <CartCalculation cartProducts={cartProducts}></CartCalculation>
                </div>
            </div>
            :
            <div className='py-24 text-3xl font-semibold flex justify-center'>Your cart is empty !</div>
           }
        </div>
    );
};

export default Cart;