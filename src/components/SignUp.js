import React, { useState } from 'react';
import { Link, useNavigate  } from "react-router-dom";
import img from "../images/third.png";

// import for Firebase authentication
import { UserAuth } from '../context/AuthContext';

//Imports for toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function SignUp() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [setError] = useState('')
    const { createUser } = UserAuth();
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            await createUser(email, password);
            navigate('/login')
        } catch (e) {
            setError(e.message);
            // console.log(e.message);
            toast(e.message)
        }
    };

    return (
        <>
            <section className="text-gray-600 relative">
                <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
                    <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                        <img src={img} className="w-screen h-screen absolute inset-0" alt="signup" />
                    </div>
                    <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                        <h2 className="text-gray-900 text-xl mb-1 text-Blue font-medium">Sign up</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="relative mt-2 mb-4">
                                <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                                <input onChange={(e) => setEmail(e.target.value)} type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                            <div className="relative mb-4">
                                <label htmlFor="password" className="leading-7 text-sm text-gray-600">Password</label>
                                <input onChange={(e) => setPassword(e.target.value)} type="password" id="password" name="password" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                            
                            <button className="btn mt-4">Sign Up</button>
                            <p className="mt-6">Already have an account? {' '}<Link to="/login" className="text-Blue underline decoration-2">Login</Link></p>

                        </form>
                    </div>
                </div>
            </section>
            <ToastContainer />
        </>
    );
}

export default SignUp