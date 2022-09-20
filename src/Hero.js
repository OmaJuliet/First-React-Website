import React from 'react'
import pic from './images/image2.jpg'

const Hero = () => {
  return (
    <section className="body-font mt-0 lg:mt-0" id="top">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-2 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-3xl text-2xl mb-4 font-medium text-gray-900">Company's short intro.
            <br className="hidden lg:inline-block" /> Lorem ipsum dolor sit
          </h1>
          <p className="mb-8 leading-relaxed">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse consectetur voluptatem, molestias consequuntur excepturi architecto facilis reiciendis. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse consectetur voluptatem, molestias consequuntur excepturi architecto facilis reiciendis.</p>
          <div className="flex justify-center">
            <button className="btn">Sign Up</button>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img className="object-cover object-center rounded" alt="hero" src={pic} />
        </div>
      </div>
    </section>
  )
}

export default Hero