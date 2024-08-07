import { FaHome, FaPhone, FaLink, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const ContactUs = () => {
    return (
        <div className="bg-custom-light">
            <div className='py-16 bg-custom-gradient text-center text-4xl text-white font-semibold'>
                <h1>Contact Us</h1>
            </div>
            <div className=' px-12 md:px-20 py-16'>
                <div className='flex flex-wrap'>
                    {/* Contact Information Section */}
                    <div className="w-full lg:w-1/2 mb-8 lg:mb-0 p-4">
                        <div className=''>
                            <h3 className='text-gray-800 mb-4 text-3xl font-semibold'>Get In Touch</h3>
                            <div className='mb-4'>
                                <h5 className='text-gray-600 flex items-center mb-2'><FaHome className="mr-2 text-blue-500" /> Address:</h5>
                                <p className='text-gray-700'>Street 10, K block, Halishahar <br /> Chittagong Town, Bangladesh</p>
                            </div>
                            <div className='mb-4'>
                                <h5 className='text-gray-600 flex items-center mb-2'><FaPhone className="mr-2 text-green-500" /> Mobile:</h5>
                                <p className='text-gray-700'>01878896612, 03123</p>
                            </div>
                            <div className='mb-4'>
                                <h5 className='text-gray-600 flex items-center mb-2'><HiMail className="mr-2 text-red-500" /> Email:</h5>
                                <p className='text-gray-700'>amargrocery@gmail.com</p>
                            </div>
                            <div className='mb-4'>
                                <h5 className='text-gray-600 flex items-center mb-2'><FaLink className="mr-2 text-purple-500" /> Website:</h5>
                                <p className='text-gray-700'>www.amargrocery.com</p>
                            </div>
                            <div className='mt-6 flex justify-center space-x-4'>
                                <a href="https://facebook.com" className="text-blue-600 hover:text-blue-800"><FaFacebookF size={20} /></a>
                                <a href="https://twitter.com" className="text-blue-400 hover:text-blue-600"><FaTwitter size={20} /></a>
                                <a href="https://linkedin.com" className="text-blue-700 hover:text-blue-900"><FaLinkedinIn size={20} /></a>
                                <a href="https://instagram.com" className="text-pink-500 hover:text-pink-700"><FaInstagram size={20} /></a>
                            </div>
                        </div>
                    </div>
                    {/* Contact Form Section */}
                    <div className="w-full lg:w-1/2">
                        <div className='bg-white shadow-lg rounded-lg p-8'>
                            <h3 className='text-gray-800 mb-6 text-3xl font-semibold'>Send Us a Message</h3>
                            <form>
                                <div className="mb-4">
                                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Your Name</label>
                                    <input type="text" placeholder='Enter Your Name' className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" id="name" />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Your Email</label>
                                    <input type="email" placeholder='Enter Your Email' className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" id="email" />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Your Message</label>
                                    <textarea className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" id="message" rows="4" placeholder="Enter your message here"></textarea>
                                </div>
                                <button type="submit" className="w-full py-2 px-4 bg-custom-gradient-red text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
                {/* Map Section */}
                <div className='py-20'>
                    <h3 className='text-gray-800 my-8 text-3xl font-semibold text-center'>Find Us Here</h3>
                    <div className='w-full h-64'>
                        <MapContainer center={[23.8103, 90.4125]} zoom={13} className='h-full'>
                            <TileLayer
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            />
                            <Marker position={[23.8103, 90.4125]} />
                        </MapContainer>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
