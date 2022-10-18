import React, { useState } from "react";
import Navbar from '../components/Navbar';
import "./about.css";
import Footer from '../components/Footer';
import gallery1 from "../images/gallery1.jpg";
import gallery2 from "../images/gallery2.jpg";
import gallery3 from '../images/gallery3.jpg';
import gallery4 from "../images/gallery4.jpg";
import gallery5 from "../images/gallery5.jpg";
import gallery6 from '../images/gallery6.jpg';
import { motion } from 'framer-motion';
import { FaCloudDownloadAlt, FaApple, FaMapMarkerAlt, FaGooglePlay, FaTimes } from 'react-icons/fa';



const Feature = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <>
      <Navbar />
      <section className="popup-texts">
        <h1>About</h1>
        <p className="texts">Intelligent design for every lifestyle. We create Playful, modern, and inspirational indoor designs and decorations suitable for just anyone, be it in the home, office, school, restaurant and so on.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse consectetur voluptatem. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse consectetur voluptatem. Lorem, ipsum dolor sit amet consectetur adipisicing elit. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.</p>
        <button onClick={toggleModal} className="btn-modal">
          View Demo
        </button>


        {modal && (
          <div className="modal animate">
            <div onClick={toggleModal} className="overlay"></div>
            <div className="modal-content">
              <img src={gallery1} alt="demo" />
              <button className="close-modal" onClick={toggleModal}>
                <FaTimes />
              </button>
            </div>
          </div>
        )}
      </section>




      {/* Gallery section */}
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="flex flex-col text-center w-full mb-4">
            <h2 className="text-2xl text-Blue tracking-widest font-semibold mb-4">Gallery</h2>
          </div>
          <div className="flex flex-wrap md:-m-2 -m-1">
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-1/2">
                <img alt="gallery1" className="w-full object-cover h-full object-center block" src={gallery1} />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img alt="gallery2" className="w-full object-cover h-full object-center block" src={gallery2} />
              </div>
              <div className="md:p-2 p-1 w-full">
                <img alt="gallery3" className="w-full h-full object-cover object-center block" src={gallery3} />
              </div>
            </div>
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-full">
                <img alt="gallery4" className="w-full h-full object-cover object-center block" src={gallery4} />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img alt="gallery5" className="w-full object-cover h-full object-center block" src={gallery5} />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img alt="gallery6" className="w-full object-cover h-full object-center block" src={gallery6} />
              </div>
            </div>
          </div>
        </div>
      </section>





      <section>
        <section className="container xxs:px-0 smm:px-12 lgs:px-12 smm:py-12 lgs:py-12 lg:px-4 xlgs:px-20 lg:py-12 py-2 mx-auto">
          <article className="flex flex-wrap -m-4">

            <article className="xxs:px-0 lg:w-1/3">
              <aside className="h-full px-8 pt-12 pb-12 xxs:px-0 xms:px-4 smm:px-4 rounded-lg relative">
                <span className="text-sm text-Pink font-medium mb-4 smm:p-4 bg-fuchsia-100 text-left rounded-full lgs:p-4 lg:p-2 p-2">Design with dsgn</span>
                <h1 className="sm:text-2xl text-xl font-semibold text-gray-900 mt-6 mb-3 text-left">Decorations & Designs</h1>
                <p className="leading-relaxed w-full text-left text-sm">Krystal Homes helps you with the best decorations. Download the app on mobile store, sign up and make reservations for your indoor decorations.</p>
              </aside>
            </article>

            <article className="lg:p-4 lg:w-1/3 xxs:px-0 smm:px-0 lgs:px-2 w-full" data-aos="flip-up" data-aos-duration="1000">
              <aside className="flex bg-Blue rounded-lg h-full xxs:px-2 xms:px-4 smm:px-4 lg:px-4 lgs:px-4 xlgs:px-4 py-8 flex-col">
                <h2 className="text-2xl font-bold ml-2 text-amber-300">Designs</h2>
                <aside className="flex justify-between items-center mb-3 mt-8">
                  <figure className="bg-white rounded px-10 py-2 ml-3"></figure>
                  <section>
                    <figure className="w-10 h-10 inline-flex items-center justify-center rounded-full  text-white bg-amber-300">
                      <img className="w-6 h-6 rounded-full" src={gallery1} alt="notes" />
                    </figure>
                    <figure className="w-10 h-10 inline-flex items-center justify-center rounded-full  text-white bg-amber-300">
                      <img className="w-6 h-6 rounded-full animate-spin" src={gallery2} alt="notes" />
                    </figure>
                    <figure className="w-10 h-10 inline-flex items-center justify-center rounded-full  text-white bg-amber-300">
                      <img className="w-6 h-6 rounded-full" src={gallery3} alt="notes" />
                    </figure>
                  </section>
                </aside>

                <aside className="flex items-center mb-2 p-2">
                  <figure className="animate-pulse p-5 rounded bg-white"></figure>
                  <figure className="bg-white rounded px-10 py-2 ml-3"></figure>
                </aside>

                <aside className="flex items-center mb-2 p-2 bg-amber-300 rounded-lg">
                  <figure className="p-5 rounded bg-white"></figure>
                  <figure className="bg-white rounded px-10 py-2 ml-3"></figure>
                </aside>

                <aside className="flex items-center mb-2 p-2">
                  <figure className="animate-pulse p-5 rounded bg-white"></figure>
                  <figure className="bg-white rounded px-10 py-2 ml-3"></figure>
                </aside>

                <aside className="flex items-center mb-2 p-2">
                  <figure className="p-5 rounded bg-white"></figure>
                  <figure className="animate-pulse bg-white rounded px-10 py-2 ml-3"></figure>
                </aside>
              </aside>
            </article>

            <article className="xxs:px-0 lg:w-1/3">
              <aside className="h-full bg-opacity-75 xxs:px-0 xms:px-4 lg:px-12 xlgs:px-12 py-8 rounded-lg overflow-hidden text-center relative">
                <aside className="flex items-center mb-3 mt-4">
                  <motion.figure animate={{ boxShadow: "0px 0px 5px #ff7191" }} className="border-Pink border-2 rounded-full p-2"></motion.figure>
                  <h2 className="text-xl font-semibold ml-2">Homes</h2>
                </aside>
                <aside className="flex items-center mt-2 ml-8">
                  <motion.figure animate={{ boxShadow: "0px 0px 3px #ff7191" }} className="bg-Pink rounded-full p-1"></motion.figure>
                  <h2 className="text-sm ml-2">Lovely home decorations</h2>
                </aside>


                <aside className="flex items-center mb-3 mt-4">
                  <motion.figure animate={{ boxShadow: "0px 0px 5px rgb(245 158 11)" }} className="border-amber-500 border-2 rounded-full p-2"></motion.figure>
                  <h2 className="text-xl font-semibold ml-2">Offices</h2>
                </aside>
                <aside className="flex items-center mt-2 ml-8">
                  <motion.figure animate={{ boxShadow: "0px 0px 3px rgb(245 158 11)" }} className="bg-amber-500 rounded-full p-1"></motion.figure>
                  <h2 className="text-sm ml-2">Make workplaces lively</h2>
                </aside>


                <aside className="flex items-center mb-3 mt-4">
                  <motion.figure animate={{ boxShadow: "0px 0px 5px #6c56c2" }} className="border-purple border-2 rounded-full p-2"></motion.figure>
                  <h2 className="text-xl font-semibold ml-2">Schools</h2>
                </aside>
                <aside className="flex items-center mt-2 ml-8">
                  <motion.figure animate={{ boxShadow: "0px 0px 3px #6c56c2" }} className="bg-purple rounded-full p-1"></motion.figure>
                  <h2 className="text-sm ml-2">Beautify learning centers</h2>
                </aside>


                <aside className="flex items-center mb-3 mt-4">
                  <motion.figure animate={{ boxShadow: "0px 0px 5px rgb(254 243 199)" }} className="border-amber-100 border-2 rounded-full p-2"></motion.figure>
                  <h2 className="text-xl font-semibold ml-2">Restaurants</h2>
                </aside>
                <aside className="flex items-center mt-2 ml-8">
                  <motion.figure animate={{ boxShadow: "0px 0px 3px rgb(254 243 199)" }} className="bg-amber-100 rounded-full p-1"></motion.figure>
                  <h2 className="text-sm ml-2">Attract the right customers</h2>
                </aside>

              </aside>
            </article>

          </article>
        </section>
      </section>


      {/* Statistics section */}
      <section>
        <div className="container xxs:px-0 smm:px-2 px-0 smm:py-12 lgs:py-12 lg:px-4 xlgs:px-8 lg:py-12 py-8 mx-auto">
          {/* <div className="flex flex-col text-center w-full mb-2">
            <h1 className="sm:text-3xl text-2xl font-medium mb-2 text-gray-900">Statistics</h1>
          </div> */}
          <div className="flex flex-wrap xxs:mt-0 xxs:mb-2 text-center">
            <div className="lg:p-4 xxs:px-2 xxs:py-4 xms:py-4 sm:w-1/4 xxs:w-1/2 xms:w-1/2">
              <div className="px-4 py-6 rounded-lg">
                <FaCloudDownloadAlt className="text-Blue w-12 h-12 mb-3 inline-block" />
                <p className="mt-2 leading-relaxed text-black">3.8k Downloads</p>
              </div>
            </div>
            <div className="lg:p-4 xxs:px-2 xxs:py-4 xms:py-4 sm:w-1/4 xxs:w-1/2 xms:w-1/2">
              <div className="px-4 py-6 rounded-lg">
                <FaMapMarkerAlt className="text-Blue w-12 h-12 mb-3 inline-block" />
                <p className="mt-2 leading-relaxed text-black">5 Countries</p>
              </div>
            </div>
            <div className="lg:p-4 xxs:px-2 xxs:py-4 xms:py-4 sm:w-1/4 xxs:w-1/2 xms:w-1/2">
              <div className="px-4 py-6 rounded-lg">
                <FaApple className="text-Blue w-12 h-12 mb-3 inline-block" />
                <p className="mt-2 leading-relaxed text-black">Verified</p>
              </div>
            </div>
            <div className="lg:p-4 xxs:px-2 xxs:py-4 xms:py-4 sm:w-1/4 xxs:w-1/2 xms:w-1/2">
              <div className="px-4 py-6 rounded-lg">
                <FaGooglePlay className="text-Blue w-12 h-12 mb-3 inline-block" />
                <p className="mt-2 leading-relaxed text-black">Verified</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      <Footer />
    </>
  );
}

export default Feature