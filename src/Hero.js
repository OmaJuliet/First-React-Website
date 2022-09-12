import React from 'react'
import pic from './images/image2.jpg'

const Hero = () => {
  return (
    <section class="body-font mt-0 lg:mt-8" id="top">
      <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-2 md:mb-0 items-center text-center">
          <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Company's short intro.
            <br class="hidden lg:inline-block" /> Lorem ipsum dolor sit
            <br class="hidden lg:inline-block" /> consectetur
          </h1>
          <p class="mb-8 leading-relaxed">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse consectetur voluptatem, molestias consequuntur excepturi architecto facilis reiciendis. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse consectetur voluptatem, molestias consequuntur excepturi architecto facilis reiciendis.</p>
          <div class="flex justify-center">
            <button className="btn">Sign Up</button>
          </div>
        </div>
        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img class="object-cover object-center rounded" alt="hero" src={pic} />
        </div>
      </div>
    </section>
  )
}

export default Hero