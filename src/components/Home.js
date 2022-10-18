import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import pic from "../images/about.jpg";
import pics from "../images/about2.jpg";
import picture from '../images/gallery1.jpg';


// import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

//Imports for toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const notify = () => {
    toast("Not yet active", {
        position: "top-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });
}


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


    return (
        <>
            <Navbar />

            {/* Hero section */}
            <section className="body-font mt-0 lg:mt-0" id="top">
                <div className="flex flex-col text-center w-full mb-4">
                    <h2 className="text-base text-Blue tracking-widest font-medium mb-1">Welcome {user && user.email}</h2>
                </div>
                <div className="container mx-auto flex px-2 lg:px-5 py-12 md:py-0 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-2 md:mb-0 items-center text-center">
                        <h1 className="sm:text-3xl text-2xl mb-4 font-medium text-black">Krystal Home and Decors </h1>
                        <p className="mb-8 leading-relaxed">Intelligent design for every lifestyle. We create Playful, modern, and inspirational indoor designs and decorations suitable for just anyone, be it in the home, office, school, restaurant and so on.</p>
                        <div className="flex justify-center">
                            <button onClick={notify} className="btn">Contact Us</button>
                        </div>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <img className="object-cover object-center rounded" alt="hero" src={picture} />
                    </div>
                </div>
            </section>


            {/* About section */}
            <section className="">
                <div className="container mx-auto flex px-2 lg:px-5 py-12 md:py-0 md:flex-row flex-col items-center mx-auto mt-12 lg:mt-2">
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                        {imgToggler ? <img src={pics} className="object-cover object-center rounded" alt="hero" /> : <img src={pic} className="object-cover object-center rounded" alt="hero" />}
                    </div>
                    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">A little bit about us
                        </h1>
                        <p className="mb-8 leading-relaxed flex-start">{about ? "This is to test the second portion of the about section. Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse consectetur voluptatem, molestias consequuntur excepturi architecto facilis reiciendis. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse consectetur voluptatem, molestias consequuntur excepturi." : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse consectetur voluptatem, molestias consequuntur excepturi architecto facilis reiciendis. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse consectetur voluptatem, molestias consequuntur excepturi architecto facilis reiciendis."}</p>
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
                        <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Send us a text</h2>
                        <div className="relative mb-4">
                            <label className="leading-7 text-sm text-gray-600">Full Name</label>
                            <input type="text" id="full-name" name="full-name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div className="relative mb-4">
                            <label className="leading-7 text-sm text-gray-600">Message</label>
                            <textarea type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></textarea>
                        </div>
                        <button className="btn">Send</button>
                    </div>
                </div>
            </section>


            <Footer />
            <ToastContainer />
        </>
    )
}

export default Home