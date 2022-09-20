import React from 'react'

const Contact = () => {
    return (
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
    )
}

export default Contact