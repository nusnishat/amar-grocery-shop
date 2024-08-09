import { useContext, useEffect } from 'react';
import { AuthContext } from '../../Providers/AuthProviders';
import CartProduct from './CartProduct/CartProduct';
import CartCalculation from './CartCalculation/CartCalculation';

const Cart = () => {
    const {user, cartProducts, setCartProducts} = useContext(AuthContext)
    useEffect(()=>{
        fetch(`http://localhost:5000/checkOut?email=${user?.email}`)
        .then(res => res.json())
        .then(data=>setCartProducts(data))
    }, []);

    return (
        <div className='bg-custom-light'>
            <div className='py-16 bg-custom-gradient text-center text-4xl text-white font-semibold'>
                <h1>Cart</h1>
            </div>
            <div className='md:grid grid-cols-3 gap-8 py-20 px-12 md:px-20'>
                <div className='col-span-2'>
                    {
                        cartProducts.map(cartProduct=><CartProduct key={cartProduct._id} cartProduct={cartProduct}></CartProduct>)
                    }
                </div>
                <div>
                    <CartCalculation cartProducts={cartProducts}></CartCalculation>
                </div>
            </div>
        </div>
    );
};

export default Cart;