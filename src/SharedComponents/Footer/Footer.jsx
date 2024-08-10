import { FaShoppingBasket, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaGlobe } from 'react-icons/fa';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="bg-gray-800 text-white">
            {/* Footer Main Section */}
            <div className="py-10">
                <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-8">
                    
                    {/* Company Info */}
                    <div className="flex flex-col">
                        <div className="flex items-center mb-4">
                            <div className='p-2 mr-4 rounded-md bg-custom-gradient-red'>
                                <FaShoppingBasket className="text-3xl" />
                            </div>
                            <span className='text-2xl font-bold'>Amar Grocery</span>
                        </div>
                        <p className="flex items-center mb-2 text-sm">
                            <FaMapMarkerAlt className="mr-2" />
                            Street 10, K block, Halishahar<br /> Chittagong Town, Bangladesh
                        </p>
                        <p className="flex items-center mb-2 text-sm">
                            <FaPhoneAlt className="mr-2" />
                            +61 626 240 310
                        </p>
                        <p className="flex items-center mb-2 text-sm">
                            <FaEnvelope className="mr-2" />
                            amargrocery@gmail.com
                        </p>
                        <p className="flex items-center mb-2 text-sm">
                            <FaGlobe className="mr-2" />
                            www.amargrocery.com
                        </p>
                    </div>

                    {/* Top Cities */}
                    <div>
                        <h6 className="text-lg font-semibold mb-4">Top Cities</h6>
                        <ul className="list-disc list-inside text-sm space-y-2">
                            <li>Dhaka</li>
                            <li>Chittagong</li>
                            <li>Rajshahi</li>
                            <li>Sylhet</li>
                            <li>Khulna</li>
                        </ul>
                    </div>

                    {/* Categories */}
                    <div>
                        <h6 className="text-lg font-semibold mb-4">Categories</h6>
                        <ul className="list-disc list-inside text-sm space-y-2">
                            <li>Fruits and Vegetables</li>
                            <li>Meat and Fish</li>
                            <li>Home Kitchen</li>
                            <li>Beauty and Health Care</li>
                            <li>Snacks</li>
                            <li>Cooking</li>
                        </ul>
                    </div>

                    {/* Customer Service */}
                    <div>
                        <h6 className="text-lg font-semibold mb-4">Customer Service</h6>
                        <ul className="list-disc list-inside text-sm space-y-2">
                            <li>Privacy Policy</li>
                            <li>FAQ</li>
                        </ul>
                    </div>

                </div>
            </div>

            {/* Footer End Section */}
            <div className="bg-gray-900 text-white py-4 text-center">
                <div className="flex justify-center mb-4 space-x-4">
                    <a href="https://facebook.com" className="text-blue-600 hover:text-blue-800">
                        <FaFacebookF size={20} />
                    </a>
                    <a href="https://twitter.com" className="text-blue-400 hover:text-blue-600">
                        <FaTwitter size={20} />
                    </a>
                    <a href="https://linkedin.com" className="text-blue-700 hover:text-blue-900">
                        <FaLinkedinIn size={20} />
                    </a>
                    <a href="https://instagram.com" className="text-pink-500 hover:text-pink-700">
                        <FaInstagram size={20} />
                    </a>
                </div>
                <h6 className="text-sm">&copy; 2024 Amar Grocery. All rights reserved.</h6>
            </div>
        </div>
    );
};

export default Footer;
