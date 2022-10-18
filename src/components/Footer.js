import React from 'react';
import { FaArrowUp, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <>
            {/* footer section */}
            <footer className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap md:text-left text-center order-first">
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3 uppercase">navigate</h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <p className="text-gray-600 hover:text-gray-800 cursor-pointer hover:underline">Home</p>
                                </li>
                                <li>
                                    <Link to="/about"><p className="text-gray-600 hover:text-gray-800 cursor-pointer hover:underline">About</p></Link>
                                </li>
                                <li>
                                    <Link to="/features"><p className="text-gray-600 hover:text-gray-800 cursor-pointer hover:underline">Features</p></Link>
                                </li>
                                <li>
                                    <Link to="/blogs"><p className="text-gray-600 hover:text-gray-800 cursor-pointer hover:underline">Blogs</p></Link>
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3 uppercase">our services</h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <p className="text-gray-600 hover:text-gray-800 cursor-pointer hover:underline">Service 1</p>
                                </li>
                                <li>
                                    <p className="text-gray-600 hover:text-gray-800 cursor-pointer hover:underline">Service 2</p>
                                </li>
                                <li>
                                    <p className="text-gray-600 hover:text-gray-800 cursor-pointer hover:underline">Service 3</p>
                                </li>
                                <li>
                                    <p className="text-gray-600 hover:text-gray-800 cursor-pointer hover:underline">Service 4</p>
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3 uppercase">contact us</h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <p className="text-gray-600 hover:text-gray-800 cursor-pointer hover:underline">Phone: +234 8123456789</p>
                                </li>
                                <li>
                                    <p className="text-gray-600 hover:text-gray-800 cursor-pointer hover:underline">Email: krystalhome@info.com</p>
                                </li>
                                <li>
                                    <p className="text-gray-600 hover:text-gray-800 cursor-pointer hover:underline">Twitter: @twitter.com</p>
                                </li>
                                <li>
                                    <p className="text-gray-600 hover:text-gray-800 cursor-pointer hover:underline">Location: Lagos, Nigeria</p>
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3 uppercase">subscribe to our newsletter</h2>
                            <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
                                <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                                    <input type="text" id="footer-field" name="footer-field" className="sm:mb-8 w-full bg-gray-100 rounded border-2 border-gray-300 focus:bg-transparent text-base mb-0 text-black py-1 px-3 leading-8" />
                                </div>
                                <button className="btn xxs:mt-4 lg:mt-0"> Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
                        <p className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                            <span className="text-xl cursor-pointer">Krystal Homes</span>
                        </p>
                        <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">Copyright © || 2022</p>
                        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                            <p className="cursor-pointer"><FaTwitter /></p>
                            <p className="ml-3 cursor-pointer"><FaInstagram /></p>
                            <p className="ml-3 cursor-pointer"><FaLinkedin /></p>
                            <p className="ml-3 cursor-pointer"><FaFacebook /></p>
                        </span>
                    </div>
                </div>

                <a href="#top" className="animate-bounce go-to-top active"><FaArrowUp /></a>
            </footer>
        </>
    )
}

export default Footer