import React from 'react'
import { FaArrowUp, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
    return (

        <footer class="text-gray-600 body-font">
            <div class="container px-5 py-24 mx-auto">
                <div class="flex flex-wrap md:text-left text-center order-first">
                    <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3 uppercase">navigate</h2>
                        <nav class="list-none mb-10">
                            <li>
                                <a class="text-gray-600 hover:text-gray-800 cursor-pointer hover:underline">Home</a>
                            </li>
                            <li>
                                <a class="text-gray-600 hover:text-gray-800 cursor-pointer hover:underline">About</a>
                            </li>
                            <li>
                                <a class="text-gray-600 hover:text-gray-800 cursor-pointer hover:underline">Features</a>
                            </li>
                            <li>
                                <a class="text-gray-600 hover:text-gray-800 cursor-pointer hover:underline">Blogs</a>
                            </li>
                        </nav>
                    </div>
                    <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3 uppercase">our services</h2>
                        <nav class="list-none mb-10">
                            <li>
                                <a class="text-gray-600 hover:text-gray-800 cursor-pointer hover:underline">Service 1</a>
                            </li>
                            <li>
                                <a class="text-gray-600 hover:text-gray-800 cursor-pointer hover:underline">Service 2</a>
                            </li>
                            <li>
                                <a class="text-gray-600 hover:text-gray-800 cursor-pointer hover:underline">Service 3</a>
                            </li>
                            <li>
                                <a class="text-gray-600 hover:text-gray-800 cursor-pointer hover:underline">Service 4</a>
                            </li>
                        </nav>
                    </div>
                    <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3 uppercase">contact us</h2>
                        <nav class="list-none mb-10">
                            <li>
                                <a class="text-gray-600 hover:text-gray-800 cursor-pointer hover:underline">Phone: +234 8012345678</a>
                            </li>
                            <li>
                                <a class="text-gray-600 hover:text-gray-800 cursor-pointer hover:underline">Email: info@company.com</a>
                            </li>
                            <li>
                                <a class="text-gray-600 hover:text-gray-800 cursor-pointer hover:underline">Duo: +234 819876543</a>
                            </li>
                            <li>
                                <a class="text-gray-600 hover:text-gray-800 cursor-pointer hover:underline">Location: Lagos, Nigeria</a>
                            </li>
                        </nav>
                    </div>
                    <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3 uppercase">subscribe to our newsletter</h2>
                        <div class="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
                            <div class="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                                {/* <label for="footer-field" class="leading-7 text-sm text-gray-600">Placeholder</label> */}
                                <input type="text" id="footer-field" name="footer-field" class="sm:mb-8 w-full bg-gray-100 rounded border-2 border-gray-300 focus:bg-transparent text-base mb-0 text-black py-1 px-3 leading-8" />
                            </div>
                            <button class="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded">Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="">
                <div class="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
                    <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                        <span class="text-xl cursor-pointer">Company Name</span>
                    </a>
                    <p class="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">Copyright © || 2022</p>
                    <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                        <a href=""><FaTwitter/></a>
                        <a href="" class="ml-3"><FaInstagram/></a>
                        <a href="" class="ml-3"><FaLinkedin/></a>
                        <a href="" class="ml-3"><FaFacebook/></a>
                    </span>
                </div>
            </div>

          <a href="#top" class="animate-bounce go-to-top active"><FaArrowUp /></a>
        </footer>

    )
}

export default Footer