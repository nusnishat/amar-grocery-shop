import React from 'react';

const CheckOutSummary = ({cartProducts}) => {
    const totalCartProducts = cartProducts.length;
    let totalPrice = 0;
    cartProducts.map(cartProduct =>{
        totalPrice = totalPrice+cartProduct.price ;
    })
    const amountPayable = totalPrice +100;
    return (
        <div>
            <div className='bg-white pt-8 pb-4 px-12'>
            <h1 className='mb-2 text-custom-teal font-semibold text-2xl'>Cart Summary</h1>
            <hr />
            <div className='flex justify-between mt-2'>
                <p className=''>Total Items  :</p>
                <p>{totalCartProducts}</p>
            </div>
            <div className='flex justify-between'>
                <p className=''>Total Price :</p>
                <p>{totalPrice} Tk</p>
            </div>
            <div className='flex justify-between mb-2'>
                <p>Delivery Charge :</p>
                <p>100 Tk</p>
            </div>
            <hr />
            <div className='flex justify-between mt-2'>
                <p>Amount Payable :</p>
                <p>{amountPayable} Tk</p>
            </div>
        </div>
        </div>
    );
};

export default CheckOutSummary;