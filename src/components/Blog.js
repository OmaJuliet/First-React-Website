import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { FaEye, FaComments } from 'react-icons/fa';


const Blog = () => {
    const [blogs] = useState([
        { title: 'Blog Post 1', details: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse consectetur voluptatem....", image: "images/image2.jpg", views: "12k", comment: "10k", id: 1 },
        { title: 'Blog Post 2', details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum ....", image: "images/image3.jpg", views: "10k", comment: "7k", id: 2 },
        { title: 'Blog Post 3', details: "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.....", image: "images/image4.jpg", views: "5k", comment: "980", id: 3 }
    ])



    return (
        <>
        <Navbar />

            <section className="text-black body-font mt-4">
                <div className="flex flex-col text-center w-full mb-2">
                    <h1 className="sm:text-2xl text-xl font-medium title-font mb-0 text-gray-900">Blog Posts</h1>
                </div>
                <div className="container px-5 py-8 mx-auto">

                    <div className="flex flex-wrap -m-4">
                        {blogs.map((blog) => (
                            <div className="p-4 md:w-1/3" key={blog.id}>
                                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                    <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={blog.image} alt="blog" />
                                    <div className="p-6">
                                        <h1 className="title-font text-xl font-semibold text-gray-900 mb-3">{blog.title}</h1>
                                        <p className="leading-relaxed mb-3">{blog.details}</p>
                                        <div className="flex items-center flex-wrap ">
                                            <p className="text-blue-600 inline-flex items-center md:mb-2 lg:mb-0 cursor-pointer">Learn More
                                            </p>
                                            <span className="text-black mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200 cursor-pointer">
                                                <FaEye className="w-4 h-4 mr-1" /> {blog.views}
                                            </span>
                                            <span class="text-black inline-flex items-center leading-none text-sm cursor-pointer">
                                                <FaComments className="w-4 h-4 mr-1" /> {blog.comment}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Blog