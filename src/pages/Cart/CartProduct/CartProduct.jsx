import React, { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProviders';

const CartProduct = ({cartProduct}) => {
    const { _id, title, price, quantity, imagePath } = cartProduct;
    const {handleDelete} = useContext(AuthContext);
    return (
        <div className='grid grid-cols-3 bg-white py-6 my-4 px-4'>
            <div className=''><img className='w-2/3' src={imagePath} alt="" /></div>
            <div className='col-span-2  '>
                <p className='text-xl font-semibold text-custom-teal'>{title}</p>
                <p className='mt-4 '><span className='font-semibold'>Price: </span>{price} Tk</p>
                <p className='mt-2 '><span className='font-semibold'>Quantity: </span>{quantity}</p>
                <button onClick={()=>handleDelete(_id)} className='rounded-sm mt-6 px-4 py-2 bg-red-500 text-white'>Remove</button>
            </div>
        </div>
    );
};

export default CartProduct;