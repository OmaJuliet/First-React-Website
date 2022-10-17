import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import pic from "../images/about.jpg";
import pics from "../images/about2.jpg";
import picture from '../images/image2.jpg';
import { FaArrowUp, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Link } from "react-router-dom";


// import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';


const Home = () => {
    const [imgToggler, setImgToggler] = useState(false)
    const [about, setAbout] = useState(false);
    const [btnContent, setBtnContent] = useState(false);

    const handleClick = () => {
        setImgToggler(!imgToggler)
        setAbout(!about);
        setBtnContent(!btnContent)
    }



    const { user } = UserAuth();
    // const navigate = useNavigate();


    return (
        <>
            <Navbar />

            {/* Hero section */}
            <section className="body-font mt-0 lg:mt-0" id="top">
                <h2 className="flex items-center"> Welcome {user && user.email}</h2>
                <div className="container mx-auto flex px-5 py-12 md:py-0 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-2 md:mb-0 items-center text-center">
                        <h1 className="title-font sm:text-3xl text-2xl mb-4 font-medium text-gray-900">Housing Agency.
                            <br className="hidden lg:inline-block" /> Lorem ipsum dolor sit
                        </h1>
                        <p className="mb-8 leading-relaxed">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse consectetur voluptatem, molestias consequuntur excepturi architecto facilis reiciendis. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse consectetur voluptatem, molestias consequuntur excepturi architecto facilis reiciendis.</p>
                        <div className="flex justify-center">
                            <Link to="/signup"><button className="btn">Book a session</button></Link>
                        </div>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <img className="object-cover object-center rounded" alt="hero" src={picture} />
                    </div>
                </div>
            </section>


            {/* About section */}
            <section className="">
                <div className="container mx-auto flex px-5 py-12 md:py-0 md:flex-row flex-col items-center mx-auto mt-40 lg:mt-2">
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                        {imgToggler ? <img src={pics} className="object-cover object-center rounded" alt="hero" /> : <img src={pic} className="object-cover object-center rounded" alt="hero" />}
                    </div>
                    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">A little bit about us
                        </h1>
                        <p className="mb-8 leading-relaxed">{about ? "This is to test the second portion of the about section. Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse consectetur voluptatem, molestias consequuntur excepturi architecto facilis reiciendis. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse consectetur voluptatem, molestias consequuntur excepturi." : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse consectetur voluptatem, molestias consequuntur excepturi architecto facilis reiciendis. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse consectetur voluptatem, molestias consequuntur excepturi architecto facilis reiciendis."}</p>
                        <div className="flex justify-center">
                            <button onClick={handleClick} className="btn inline-flex text-white bg-blue-400 border-0 py-2 px-6 focus:outline-none hover:bg-blue-500 rounded-full text-lg capitalize">
                                {btnContent ? "Go back" : "Read More"}
                            </button>
                        </div>
                    </div>
                </div>
            </section>


            {/* Contact section */}
            <section className="body-font">
                <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
                    <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
                        <h1 className="title-font font-medium text-3xl text-gray-900">Want to have a chat with us?</h1>
                        <p className="leading-relaxed mt-4">Send us an email. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis, provident beatae, repellat asperiores sequi error esse assumenda quibusdam cumque, alias non earum explicabo sit officiis dignissimos architecto accusantium natus dolore nobis blanditiis consequatur! Sunt, at!</p>
                    </div>
                    <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
                        <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Contact</h2>
                        <div className="relative mb-4">
                            <label className="leading-7 text-sm text-gray-600">Full Name</label>
                            <input type="text" id="full-name" name="full-name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div className="relative mb-4">
                            <label className="leading-7 text-sm text-gray-600">Message</label>
                            <textarea type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></textarea>
                        </div>
                        <button className="text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg">Message</button>
                    </div>
                </div>
            </section>


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
                                    <p className="text-gray-600 hover:text-gray-800 cursor-pointer hover:underline">Phone: +234 8012345678</p>
                                </li>
                                <li>
                                    <p className="text-gray-600 hover:text-gray-800 cursor-pointer hover:underline">Email: info@company.com</p>
                                </li>
                                <li>
                                    <p className="text-gray-600 hover:text-gray-800 cursor-pointer hover:underline">Duo: +234 819876543</p>
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
                                <button className="lg:mt-0 xl:mt-0 flex-shrink-0 inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded">Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
                        <p className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                            <span className="text-xl cursor-pointer">Company Name</span>
                        </p>
                        <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">Copyright © || 2022</p>
                        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                            <p><FaTwitter /></p>
                            <p className="ml-3"><FaInstagram /></p>
                            <p className="ml-3"><FaLinkedin /></p>
                            <p className="ml-3"><FaFacebook /></p>
                        </span>
                    </div>
                </div>

                <a href="#top" className="animate-bounce go-to-top active"><FaArrowUp /></a>
            </footer>
        </>
    )
}

export default Home