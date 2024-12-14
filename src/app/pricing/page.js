import React from 'react'
import Contact from '../homecontact/homecontact'

const Pricing = () => {
    return (
        <div>
            <section className="absolute top-1/2 md:top-1/4 left-8 transform -translate-y-1/2 md:-translate-y-0  text-white px-4 md:px-8">
                <div className='invisible lg:visible'>
                    <p className=" text-text-sm md:text-xl font-medium tracking-wide">Pricing</p>
                    <h1 className="text-1xl  md:text-5xl font-light mt-2 md:leading-14" >
                        Terraa Force will  offers flexible <br />Pricing to suit your specific needs
                    </h1>
                </div>
            </section>
            <section className="relative text-center text-yellow-700 my-5 px-10 pb-2 " >
                <h1 className="text-4xl font-bold pb-5" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">Choose the right plan</h1>
                <p className="pb-5" data-aos="fade-down">Prices in ₹ INR</p>
                <p className="pb-5 italic underline" data-aos="fade-down">“The cost may vary weekly, monthly, or yearly according to the plan”</p>
                <div className="w-[100%] border-b-2 border-yellow-700 mx-auto  pb-2 " data-aos="fade-down"></div>
                <div className="container mx-auto px-4 py-8">
                    {/* Title Section */}
                    <div className="text-center mb-8">
                        <h2 className="text-2xl font-bold">Services</h2>
                    </div>

                    {/* Pricing Table */}
                    <div className="overflow-x-auto">
                        <table className="text-xs md:table-auto w-full border-collapse border border-gray-300 md:text-base">
                            <thead>
                                <tr className="bg-gray-100">
                                    <th className="border border-gray-300 p-4"></th>
                                    <th className="border border-gray-300 p-4">
                                        <div className="text-center">
                                            <h3 className="text-lg font-semibold">Basic</h3>
                                            <p className="text-sm text-gray-500">Starter Team</p>
                                            <button className="mt-2 bg-blue-500 text-white text-sm py-2 px-4 rounded hover:bg-blue-600">
                                                Get a Quote
                                            </button>
                                        </div>
                                    </th>
                                    <th className="border border-gray-300 p-4">
                                        <div className="text-center">
                                            <h3 className="text-lg font-semibold">Standard</h3>
                                            <p className="text-sm text-gray-500">Experienced Team</p>
                                            <button className="mt-2 bg-blue-500 text-white text-sm py-2 px-4 rounded hover:bg-blue-600">
                                                Get a Quote
                                            </button>
                                        </div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th colSpan="2" className='text-left p-4 text-2xl font-medium'>Vacant Land Services</th>
                                </tr>
                                <tr>
                                    <td className="border border-gray-300 p-4 text-left md:indent-10">User Register</td>
                                    <td className="border border-gray-300 p-4 text-center">
                                        <span className="text-green-500 font-bold">✔</span>
                                    </td>
                                    <td className="border border-gray-300 p-4 text-center">
                                        <span className="text-green-500 font-bold">✔</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-300 p-4 text-left md:indent-10">Upload Documents</td>
                                    <td className="border border-gray-300 p-4 text-center">
                                        <span className="text-green-500 font-bold">✔</span>
                                    </td>
                                    <td className="border border-gray-300 p-4 text-center">
                                        <span className="text-green-500 font-bold">✔</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-300 p-4 text-left md:indent-10">Document Verification</td>
                                    <td className="border border-gray-300 p-4 text-center">
                                        <span className="text-green-500 font-bold">✔</span>
                                    </td>
                                    <td className="border border-gray-300 p-4 text-center">
                                        <span className="text-green-500 font-bold">✔</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-300 p-4 text-left md:indent-10">Representative Visit</td>
                                    <td className="border border-gray-300 p-4 text-center">
                                        <span className="text-green-500 font-bold">✔</span>
                                    </td>
                                    <td className="border border-gray-300 p-4 text-center">
                                        <span className="text-green-500 font-bold">✔</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-300 p-4 text-left md:indent-10">Land patta</td>
                                    <td className="border border-gray-300 p-4 text-center">
                                        <span className="text-red-500 font-bold">✖</span>
                                    </td>
                                    <td className="border border-gray-300 p-4 text-center">
                                        <span className="text-green-500 font-bold">✔</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-300 p-4 text-left md:indent-10">Land fencing and Compound wall</td>
                                    <td className="border border-gray-300 p-4 text-center">
                                        <span className="text-red-500 font-bold">✖</span>
                                    </td>
                                    <td className="border border-gray-300 p-4 text-center">
                                        <span className="text-green-500 font-bold">✔</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-300 p-4 text-left md:indent-10">Trespassers occupancy</td>
                                    <td className="border border-gray-300 p-4 text-center">
                                        <span className="text-red-500 font-bold">✖</span>
                                    </td>
                                    <td className="border border-gray-300 p-4 text-center">
                                        <span className="text-green-500 font-bold">✔</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-300 p-4 text-left md:indent-10">Land Measurement</td>
                                    <td className="border border-gray-300 p-4 text-center">
                                        <span className="text-red-500 font-bold">✖</span>
                                    </td>
                                    <td className="border border-gray-300 p-4 text-center">
                                        <span className="text-green-500 font-bold">✔</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-300 p-4 text-left md:indent-10">Vacant land tax</td>
                                    <td className="border border-gray-300 p-4 text-center">
                                        <span className="text-red-500 font-bold">✖</span>
                                    </td>
                                    <td className="border border-gray-300 p-4 text-center">
                                        <span className="text-green-500 font-bold">✔</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-300 p-4 text-left md:indent-10">Land regularisation approval</td>
                                    <td className="border border-gray-300 p-4 text-center">
                                        <span className="text-red-500 font-bold">✖</span>
                                    </td>
                                    <td className="border border-gray-300 p-4 text-center">
                                        <span className="text-green-500 font-bold">✔</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-300 p-4 text-left md:indent-10">Building plan approval</td>
                                    <td className="border border-gray-300 p-4 text-center">
                                        <span className="text-red-500 font-bold">✖</span>
                                    </td>
                                    <td className="border border-gray-300 p-4 text-center">
                                        <span className="text-green-500 font-bold">✔</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-300 p-4 text-left md:indent-10">Sub division approval</td>
                                    <td className="border border-gray-300 p-4 text-center">
                                        <span className="text-red-500 font-bold">✖</span>
                                    </td>
                                    <td className="border border-gray-300 p-4 text-center">
                                        <span className="text-green-500 font-bold">✔</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-300 p-4 text-left md:indent-10">Temporary EB Service</td>
                                    <td className="border border-gray-300 p-4 text-center">
                                        <span className="text-red-500 font-bold">✖</span>
                                    </td>
                                    <td className="border border-gray-300 p-4 text-center">
                                        <span className="text-green-500 font-bold">✔</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-300 p-4 text-left md:indent-10">Borewell (If Required)</td>
                                    <td className="border border-gray-300 p-4 text-center">
                                        <span className="text-red-500 font-bold">✖</span>
                                    </td>
                                    <td className="border border-gray-300 p-4 text-center">
                                        <span className="text-green-500 font-bold">✔</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-300 p-4 text-left md:indent-10">Land survey</td>
                                    <td className="border border-gray-300 p-4 text-center">
                                        <span className="text-red-500 font-bold">✖</span>
                                    </td>
                                    <td className="border border-gray-300 p-4 text-center">
                                        <span className="text-green-500 font-bold">✔</span>
                                    </td>
                                </tr>
                                <tr>
                                    <th colSpan="2" className='text-left p-4 text-2xl font-medium'>Building & Flat Services</th>
                                </tr>
                                <tr>
                                    <td className="border border-gray-300 p-4 text-left md:indent-10">Property Tax (corporation or local body)</td>
                                    <td className="border border-gray-300 p-4 text-center">
                                        <span className="text-red-500 font-bold">✖</span>
                                    </td>
                                    <td className="border border-gray-300 p-4 text-center">
                                        <span className="text-green-500 font-bold">✔</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-300 p-4 text-left md:indent-10">Water Tax (corporation or Local body)</td>
                                    <td className="border border-gray-300 p-4 text-center">
                                        <span className="text-red-500 font-bold">✖</span>
                                    </td>
                                    <td className="border border-gray-300 p-4 text-center">
                                        <span className="text-green-500 font-bold">✔</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan="3" className="border border-gray-300 p-4 text-left  font-medium indent-10">Maintenance Work</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-300 p-4 text-left md:indent-16 "><span className='text-xl'>&#x2B9A;</span> Carpentry</td>
                                    <td className="border border-gray-300 p-4 text-center">
                                        <span className="text-red-500 font-bold">✖</span>
                                    </td>
                                    <td className="border border-gray-300 p-4 text-center">
                                        <span className="text-green-500 font-bold">✔</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-300 p-4 text-left md:indent-16"><span className='text-xl'>&#x2B9A;</span> EB Services</td>
                                    <td className="border border-gray-300 p-4 text-center">
                                        <span className="text-red-500 font-bold">✖</span>
                                    </td>
                                    <td className="border border-gray-300 p-4 text-center">
                                        <span className="text-green-500 font-bold">✔</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-300 p-4 text-left md:indent-16 "><span className='text-xl'>&#x2B9A;</span> Civil Works</td>
                                    <td className="border border-gray-300 p-4 text-center">
                                        <span className="text-red-500 font-bold">✖</span>
                                    </td>
                                    <td className="border border-gray-300 p-4 text-center">
                                        <span className="text-green-500 font-bold">✔</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-300 p-4 text-left md:indent-16 "><span className='text-xl'>&#x2B9A;</span> Painting</td>
                                    <td className="border border-gray-300 p-4 text-center">
                                        <span className="text-red-500 font-bold">✖</span>
                                    </td>
                                    <td className="border border-gray-300 p-4 text-center">
                                        <span className="text-green-500 font-bold">✔</span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                </div>
                <div className="w-[100%] border-b-2 border-yellow-700 mx-auto  pb-2 " data-aos="fade-down"></div>
            </section >
            <section className="relative   text-center text-yellow-700 my-5 px-10 pb-2" data-aos="fade-down">
                <Contact />
            </section>
            {/* ---------------Contact  end--------------- */}
        </div>
    )
}

export default Pricing 
