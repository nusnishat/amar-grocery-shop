import { Link, useNavigate} from 'react-router-dom';
import Swal from 'sweetalert2'
import { FaGoogle, FaFacebookF } from "react-icons/fa";
import { useContext, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProviders';

const Login = () => {
    const {login} = useContext(AuthContext);
    const navigate = useNavigate();
    const [error, setError] = useState([]);

    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        
        login(email, password)
        .then(result=>{
            console.log('click')
            const loggedUser = result.user;
            form.reset();
            console.log(loggedUser);
            Swal.fire("Login Successfull!!");
        // navigate('/home/dashboard');
        })
        .catch(error =>{
            setError(error.message);
        })
       
    }

    return (
        <div>
            <div className='py-16 bg-custom-gradient text-center text-4xl text-white font-semibold'>
                <h1>Sign In</h1>
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
                        <h1 className='text-2xl font-bold my-4'>Sign Up to <span className='text-custom-red'>Amar-Grocery</span></h1>
                        {/* ---------------------------buttons--------------------- */}
                        <div className='flex flex-wrap space-x-4'>
                            <button className='px-4  mt-2 py-2 bg-red-600 text-white font-semibold rounded-md'><FaGoogle className='inline me-2 text-xl font-bold' />Sign up with Google</button>
                            <button className='px-4  mt-2 py-2 text-xl bg-sky-600 text-white fot-bold rounded-md'><FaFacebookF/></button>
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
                            <form onSubmit={handleLogin} className="space-y-6">
                               
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
                                <h1 className='text-center'>Don't have an account? <Link className='text-orange ms-2 underline font-semibold text-right' to='/signUp'>Sign Up</Link></h1>
                                <div>
                                    <button
                                    type="submit"
                                    className="w-full py-2 px-4 bg-custom-gradient-red text-white font-medium rounded-md hover:shadow-xl hover:font-bold"
                                    >
                                    Sign In
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

export default Login;