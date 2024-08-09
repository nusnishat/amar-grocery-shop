import {  useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Product from './Product/Product';

const Products = () => {
    const params = useParams();
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        fetch(`https://amar-grocery-shop-server.onrender.com/products/${params.department}`)
        .then(res =>res.json())
        .then(data=>setProducts(data))
    }, []);


    return (
        <div className='pb-20 px-8 md:px-20 bg-custom-light'>
           <div className="text-center">
                {params.department === 'MeatFish' ? (
                    <div>
                        <img src="https://i.ibb.co/2PLMqW1/tofu-meat-alternatives.webp" alt="Meat and Fish" className="mx-auto mb-2" />
                        <p className="text-3xl font-bold mb-12 mt-6">Meat and Fish</p>
                    </div>
                ) : params.department === 'HomeKitchen' ? (
                    <div>
                        <img src="https://i.ibb.co/VqYsvhb/home-appliances.webp" alt="Home Kitchen" className="mx-auto mb-2" />
                        <p className="text-3xl font-bold mb-12 mt-6">Home Kitchen</p>
                    </div>
                ) : params.department === 'BeautyHealth' ? (
                    <div>
                        <img src="https://i.ibb.co/Y2j1pHL/health-care.webp" alt="Beauty and Health" className="mx-auto mb-2" />
                        <p className="text-3xl font-bold mb-12 mt-6">Beauty and Health</p>
                    </div>
                ) : params.department === 'Snacks' ? (
                    <div>
                        <img src="https://i.ibb.co/m9qcpD3/frozen-canned.webp" alt="Snacks" className="mx-auto mb-2" />
                        <p className="text-3xl font-bold mb-12 mt-6">Snacks</p>
                    </div>
                ) : params.department === 'Cooking' ? (
                    <div>
                        <img src="https://i.ibb.co/sscKFtT/mpimage.webp" alt="Cooking" className="mx-auto mb-2" />
                        <p className="text-3xl mt-6 mb-12 font-semibold">Cooking</p>
                    </div>
                ) : params.department === 'VegetablesFruits' ? (
                    <div>
                        <img src="https://i.ibb.co/dp0fCKV/fresh-vegetables.webp" alt="Vegetables and Fruits" className="mx-auto mb-2" />
                        <p className="text-3xl font-bold mb-12 mt-6">Vegetables and Fruits</p>
                    </div>
                ) : (
                    <p className="text-center text-red-500">Department not found</p>
                )}
            </div>
            <div className='grid gri-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12'>
                {
                    products.map(product=><Product key={product._id} product ={product}></Product>)
                }
            </div>
        </div>
    );
};

export default Products;