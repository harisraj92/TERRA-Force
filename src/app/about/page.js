import React from 'react'
import Link from "next/link";
import Image from 'next/image';
import Contact from '../homecontact/homecontact';

const About = () => {
    return (
        <>


            <section className="absolute top-1/2 md:top-1/4 left-8 transform -translate-y-1/2 md:-translate-y-0  text-white px-4 md:px-8">
                <div className='invisible lg:visible'>
                    <p className=" text-text-sm md:text-xl font-medium tracking-wide">About Us</p>
                    <h1 className="text-1xl  md:text-5xl font-light mt-2 md:leading-14" >
                        Your Trusted Partner in Land <br />Oversight and Services.
                    </h1>
                </div>

            </section>

            <section className="relative text-center text-yellow-700 my-5 px-10 pb-2 " >
                <h1 className="text-4xl font-bold pb-5" data-aos="fade-down">Who We are</h1>
                <p className="pb-5" data-aos="fade-down">Empowering landowners with smarter solutions,Redefining excellence in land management and care.From monitoring to seamless oversight,Your trusted partner, always there</p>


                <div className="flex flex-wrap justify-evenly items-center pb-8">
                    <div className="w-96 h-96 border-2 p-10 rounded-full border-yellow-700-400 text-center flex flex-col justify-center items-center bg-yellow-200 shadow-lg" data-aos="fade-down">
                        {/* Icon/Image */}
                        <div className="mb-4">
                            <img
                                src="./images/user-journey.png" /* Replace with the path to your icon */
                                alt="Journey Icon"
                                className="w-20 h-20 mx-auto"
                            />
                        </div>

                        {/* Title */}
                        <h2 className="text-lg font-semibold mb-4">Journey</h2>

                        {/* Description */}
                        <p className="text-sm px-4 leading-relaxed text-gray-600">
                            Begin a journey where innovation meets precision, seamlessly managing land
                            with care and vision. From monitoring to delivering trust, we redefine
                            excellence – for land and beyond.
                        </p>
                    </div>

                    <div className="w-72 h-72 border-2 px-5 rounded-full border-yellow-700-400 text-center flex flex-col justify-center items-center bg-yellow-200 shadow-lg" data-aos="fade-down">
                        {/* Icon/Image */}
                        <div className="mb-4">
                            <img
                                src="./images/footprints.png" /* Replace with the path to your icon */
                                alt="Journey Icon"
                                className="w-20 h-20 mx-auto"
                            />
                        </div>

                        {/* Title */}
                        <h2 className="text-lg font-semibold mb-4">FootPrint</h2>

                        {/* Description */}
                        <p className="text-sm px-4 leading-relaxed text-gray-600">
                            Leaving a mark of trust and innovation in land management
                        </p>
                    </div>
                    <div className="w-72 h-72 border-2 px-5 rounded-full border-yellow-700-400 text-center flex flex-col justify-center items-center bg-yellow-200 shadow-lg"
                        data-aos="fade-down">
                        {/* Icon/Image */}
                        <div className="mb-4">
                            <img
                                src="./images/research.png" /* Replace with the path to your icon */
                                alt="Journey Icon"
                                className="w-20 h-20 mx-auto"
                            />
                        </div>

                        {/* Title */}
                        <h2 className="text-lg font-semibold mb-4">R & D</h2>

                        {/* Description */}
                        <p className="text-sm px-4 leading-relaxed text-gray-600">
                            Terraa Force's R&D pioneers innovative technologies to redefine seamless and efficient land management
                        </p>
                    </div>
                </div>
                <div className="w-[100%] border-b-2 border-yellow-700 mx-auto  pb-2 " data-aos="fade-down"></div>
            </section >

            {/* Testimonials */}
            <section className="relative   text-center text-yellow-700 my-5 px-10 pb-2" >
                <h1 className="text-4xl font-bold pb-5 relative left-5">Testimonials</h1>
                <div className="container flex flex-col items-center justify-center mx-auto lg:flex-row lg:flex-wrap lg:justify-evenly lg:px-10 ">
                    <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg" data-aos="fade-down">
                        <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 strokeLinejoin bg-yellow-300">
                            <p className="relative px-6 py-1 text-lg italic text-center strokeLinejoin text-gray-800">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-8 h-8 strokeLinejoin text-violet-600">
                                    <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                                    <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                                </svg>Terraa Force made managing my property so much easier while I was away. I trust them with all my land inspections and updates.
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute right-0 w-8 h-8 strokeLinejoin text-violet-600">
                                    <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                                    <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                                </svg>
                            </p>
                        </div>
                        <div className="flex flex-col items-center justify-center p-8 rounded-b-lg strokeLinejoin bg-yellow-200 strokeLinejointext-gray-50">
                            <Image
                                src="/images/man.png" width={64} height={64} alt="" className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full strokeLinejoinbg-gray-500 strokeLinejoinbg-gray-300"
                            />

                            <p className="text-xl font-semibold leading-tight">Prime Land Developers</p>
                            <p className="text-sm uppercase">CEO</p>
                        </div>
                    </div>
                    <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg" data-aos="fade-down">
                        <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 strokeLinejoin bg-yellow-300">
                            <p className="relative px-6 py-1 text-lg italic text-center strokeLinejoin text-gray-800">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-8 h-8 strokeLinejoin text-violet-600">
                                    <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                                    <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                                </svg>The Terraa Force team is always on time, professional, and thorough in their inspections. I couldn’t ask for better service.
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute right-0 w-8 h-8 strokeLinejoin text-violet-600">
                                    <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                                    <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                                </svg>
                            </p>
                        </div>
                        <div className="flex flex-col items-center justify-center p-8 rounded-b-lg strokeLinejoin bg-yellow-200 strokeLinejointext-gray-50">
                            <Image
                                src="/images/user.png" width={64} height={64} alt="" className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full strokeLinejoinbg-gray-500 strokeLinejoinbg-gray-300"
                            />

                            <p className="text-xl font-semibold leading-tight">Urban Land Holdings</p>
                            <p className="text-sm uppercase">CEO</p>
                        </div>
                    </div>
                    <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg" data-aos="fade-down">
                        <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 strokeLinejoin bg-yellow-300">
                            <p className="relative px-6 py-1 text-lg italic text-center strokeLinejoin text-gray-800">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-8 h-8 strokeLinejoin text-violet-600">
                                    <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                                    <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                                </svg>The process of uploading documents and verifying them through DocuSign was quick and easy. Terraa Force’s digital verification system is excellent.
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute right-0 w-8 h-8 strokeLinejoin text-violet-600">
                                    <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                                    <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                                </svg>
                            </p>
                        </div>
                        <div className="flex flex-col items-center justify-center p-8 rounded-b-lg strokeLinejoin bg-yellow-200 strokeLinejointext-gray-50">
                            <Image
                                src="/images/woman.png" width={64} height={64} alt="" className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full strokeLinejoinbg-gray-500 strokeLinejoinbg-gray-300"
                            />

                            <p className="text-xl font-semibold leading-tight">GreenFields Estates</p>
                            <p className="text-sm uppercase">CEO</p>
                        </div>
                    </div>

                </div>
                <div className="p-4 my-5 ">
                    <Link
                        href="/testimonials"
                        className="float-right hover:uppercase hover:underline hover:italic"
                    >
                        Find More ...
                    </Link>
                </div>
                <div className="w-[100%] border-b-2 border-yellow-700 mx-auto  pb-2 "></div>
            </section >
            {/* ---------------Testimonials  end--------------- */}
            {/* Contact us*/}
            <section className="relative   text-center text-yellow-700 my-5 px-10 pb-2" data-aos="fade-down">
                <Contact />
            </section>
            {/* ---------------Contact  end--------------- */}
        </>

    )
}

export default About