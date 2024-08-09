import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProviders';
import CheckOutSummary from './CheckOutSummary/CheckOutSummary';
import CheckOutCard from './CheckOutSummary/CheckOutCard/CheckOutCard';
import CheckoutForm from './CheckOutForm/CheckOutForm';

const CheckOut = () => {
    const {cartProducts} = useContext(AuthContext);
    console.log(cartProducts)
    return (
        <div className='bg-custom-light'>
            <div className='py-16 bg-custom-gradient text-center text-4xl text-white font-semibold'>
                <h1>Check Out</h1>
            </div>
            <div className='md:grid grid-cols-3  md:gap-8 py-20 px-12 md:px-20'>
                <div className='bg-white py-4 mb-6 md:mb-0'>
                    <CheckOutSummary cartProducts={cartProducts}></CheckOutSummary>
                    {
                        cartProducts.map((cartProduct, indx) => <CheckOutCard key={indx} cartProduct={cartProduct} ></CheckOutCard>)
                    }
                </div>
                <div className='col-span-2'>
                    <CheckoutForm></CheckoutForm>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;