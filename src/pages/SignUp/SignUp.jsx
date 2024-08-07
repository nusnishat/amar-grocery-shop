import { Link} from 'react-router-dom';

import { FaGoogle, FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";

const SignUp = () => {
  
    

    return (
        <div>
            <div className='py-16 bg-custom-gradient text-center text-4xl text-white font-semibold'>
                <h1>Sign Up</h1>
            </div>
            <div className='grid grid-cols-1 gap-4 md:grid-cols-2 px-12 md:px-20 py-16'>
                {/* -----------banner start------------ */}
                <div className='flex justify-center items-center'>
                    <img className='w-2/3' src="/src/images/login.svg" alt="" />
                </div>
                {/* -----------banner end------------ */}
                {/* ----------sign up layout------------ */}
                <div className='space-y-4'>
                    <div className='flex justify-center text-center'>
                        <div>
                        <h1 className='text-2xl font-bold mt-4'>Sign Up to <span className='text-custom-red'>Amar-Grocery</span></h1>
                        {/* ---------------------------buttons--------------------- */}
                        <div className='flex flex-wrap space-x-4'>
                            <button className='px-4  mt-2 py-2 bg-red-600 text-white font-semibold rounded-md'><FaGoogle className='inline me-2 text-xl font-bold' />Sign up with Google</button>
                            <button className='px-4  mt-2 py-2 text-xl bg-sky-600 text-white fot-bold rounded-md'><FaFacebookF/></button>
                            <button className='px-4  mt-2 py-2 text-xl bg-cyan-800 text-white fot-bold rounded-md'><FaLinkedinIn/></button>
                            <button className='px-4  mt-2 py-2 text-xl bg-black text-white fot-bold rounded-md'><FaGithub/></button>
                        </div>
                    </div>
                    </div>
                    {/* ---------------------------------------------------------- */}
                    <div className="flex items-center justify-center mt-4">
                        <div className="flex-grow border-t border-gray-300"></div>
                        <span className="mx-4 text-gray-500">Or with Email</span>
                        <div className="flex-grow border-t border-gray-300"></div>
                    </div>

                    {/* --------------form section start ---------------------*/}
                    <div className="flex items-center justify-center">
                        <div className="bg-white w-full max-w-md">
                            <form className="space-y-6">
                                <div>
                                    <label  className="block text-sm font-medium text-gray-700">Phone Number</label>
                                    <input
                                    required
                                    type="number"
                                    name="phone"
                                    placeholder='Ex- 01XXXXXXXX5'
                                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                </div>
                                <div>
                                    <label  className="block text-sm font-medium text-gray-700">Email</label>
                                    <input
                                    required
                                    type="email"
                                    name="email"
                                    placeholder='Enter email'
                                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                </div>
                                <div>
                                    <label  className="block text-sm font-medium text-gray-700">Password</label>
                                    <input
                                    required
                                    type="password"
                                    name='password'
                                    placeholder='Enter password'
                                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">Confirm Password</label>
                                    <input
                                    required
                                    type="password"
                                    name='confirmPassword'
                                    placeholder='Confirm password'
                                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                </div>
                                <h1 className='text-center'>Already have an account? <Link className='text-orange ms-2 underline font-semibold text-right' to='/login'>Sign In</Link></h1>
                                <div>
                                    <button
                                    type="submit"
                                    className="w-full py-2 px-4 bg-custom-gradient-red text-white font-medium rounded-md hover:shadow-xl hover:font-bold"
                                    >
                                    SignUp
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    {/* ---------form section end----------- */}
                </div>
            </div>
        </div>
    );
};

export default SignUp;