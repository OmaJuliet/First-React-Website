import React from 'react'
import { useState } from 'react'
import pic from "./images/image2.jpg";
import pics from "./images/image6.png";


const About = () => {
    const [imgToggler, setImgToggler] = useState(false)
    const [about, setAbout] = useState(false);
    // const [btnContent, setBtnContent] = useState("Read more about us");
    const [btnContent, setBtnContent] = useState(false);

    const handleClick = () => {
        setImgToggler(!imgToggler)
        setAbout(!about);
        // setBtnContent("Go back")
        setBtnContent(!btnContent)
    }


    return (
        // section: mt-0 sm:mt-32 lg:mt-2 lg:mt-0
        <section class="text-gray-600 body-font" id="about">
            {/* <div class="container px-8 py-24 mx-auto mt-12">
              <div class="flex flex-col text-center w-full mb-0">
                <h1 class="sm:text-3xl text-2xl font-semibold title-font mb-0 text-gray-900">About</h1>
              </div> */}

            <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center mx-auto mt-40 lg:mt-2">
                <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                    {imgToggler ? <img src={pics}  class="object-cover object-center rounded" alt="hero" /> : <img src={pic} class="object-cover object-center rounded" alt="hero" /> }
                </div>
                <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                    <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">A little bit about us
                    </h1>
                    <p class="mb-8 leading-relaxed">{about ? "This is to test the second portion of the about section. Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse consectetur voluptatem, molestias consequuntur excepturi architecto facilis reiciendis. Lorem, ipsum dolor sit amet consectetur adipisicing elit." : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse consectetur voluptatem, molestias consequuntur excepturi architecto facilis reiciendis. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse consectetur voluptatem, molestias consequuntur excepturi architecto facilis reiciendis." }</p>
                    <div class="flex justify-center">
                        <button onClick={handleClick} class="btn inline-flex text-white bg-blue-400 border-0 py-2 px-6 focus:outline-none hover:bg-blue-500 rounded-full text-lg capitalize">
                            {/* {btnContent} */}
                            {btnContent ? "Go back" : "Read More"}
                            </button>
                    </div>
                </div>
            </div>
            {/* </div> */}
        </section>
    )
}

export default About