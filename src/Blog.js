import React from 'react'
import { useState } from 'react'
import { FaEye, FaComments } from 'react-icons/fa'
import { Link } from 'react-router-dom'



const Blog = () => {
    const [blogs, setBlogs] = useState([
        { title: 'Blog Post 1', details: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse consectetur voluptatem, molestias consequuntur excepturi architecto facilis....", image: "images/image2.jpg", views: "12k", comment: "10k", id: 1 },
        { title: 'Blog Post 2', details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s....", image: "images/image3.jpg", views: "10k", comment: "7k", id: 2 },
        { title: 'Blog Post 3', details: "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.....", image: "images/image4.jpg", views: "5k", comment: "980", id: 3 }
    ])



    return (
        <section class="text-black body-font" id="blogs">
            <div class="flex flex-col text-center w-full mb-2">
                <h1 class="sm:text-3xl text-2xl font-medium title-font mb-0 text-gray-900">Blog Posts</h1>
            </div>
            <div class="container px-5 py-24 mx-auto">

                <div class="flex flex-wrap -m-4">
                    {blogs.map((blog) => (
                        <div class="p-4 md:w-1/3" key={blog.id}>
                                <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                    <img class="lg:h-48 md:h-36 w-full object-cover object-center" src={blog.image} alt="blog" />
                                    <div class="p-6">
                                        <h1 class="title-font text-xl font-semibold text-gray-900 mb-3">{blog.title}</h1>
                                        <p class="leading-relaxed mb-3">{blog.details}</p>
                                        <div class="flex items-center flex-wrap ">
                                            <a class="text-blue-600 inline-flex items-center md:mb-2 lg:mb-0 cursor-pointer">Learn More
                                            </a>
                                            <span class="text-black mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200 cursor-pointer">
                                                <FaEye class="w-4 h-4 mr-1" /> {blog.views}
                                            </span>
                                            <span class="text-black inline-flex items-center leading-none text-sm cursor-pointer">
                                                <FaComments class="w-4 h-4 mr-1" /> {blog.comment}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Blog