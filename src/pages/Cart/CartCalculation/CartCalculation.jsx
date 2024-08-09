import React from 'react';
import { Link } from 'react-router-dom';

const CartCalculation = ({cartProducts}) => {
    const totalCartProducts = cartProducts.length;
    let totalPrice = 0;
    cartProducts.map(cartProduct =>{
        totalPrice = totalPrice+cartProduct.price ;
    })
    const amountPayable = totalPrice +100;
    return (
        <div className='bg-white py-8 px-12'>
            <h1 className='mb-2 text-custom-teal font-semibold text-2xl'>Price Dteails</h1>
            <hr />
            <div className='flex justify-between mt-4'>
                <p className=''>Total Items  :</p>
                <p>{totalCartProducts}</p>
            </div>
            <div className='flex justify-between mt-4'>
                <p className=''>Total Price ({totalCartProducts}) :</p>
                <p>{totalPrice} Tk</p>
            </div>
            <div className='flex justify-between mb-4 mt-4'>
                <p>Delivery Charge :</p>
                <p>100 Tk</p>
            </div>
            <hr />
            <div className='flex justify-between mt-4'>
                <p>Amount Payable :</p>
                <p>{amountPayable} Tk</p>
            </div>
            <Link to='/checkOut'>
                <button className='w-full bg-custom-gradient-red p-2 text-white rounded-md mt-6'>Proceed To CheckOut</button>
            </Link>

        </div>
    );
};

export default CartCalculation;