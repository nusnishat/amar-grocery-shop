import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../../Providers/AuthProviders';
import CartProduct from './CartProduct/CartProduct';

const Cart = () => {
    const {user, orders, setOrders} = useContext(AuthContext)
    useEffect(()=>{
        fetch(`http://localhost:5000/checkOut?email=${user?.email}`)
        .then(res => res.json())
        .then(data=>setOrders(data))
    }, []);
    

    return (
        <div className='bg-custom-light'>
            <div className='py-16 bg-custom-gradient text-center text-4xl text-white font-semibold'>
                <h1>Cart</h1>
            </div>
            <div className='md:grid grid-cols-3 py-20 px-12 md:px-20'>
                <div className='col-span-2'>
                    {
                        orders.map(order=><CartProduct key={order._id} order={order}></CartProduct>)
                    }
                </div>
                <div>

                </div>
            </div>
        </div>
    );
};

export default Cart;