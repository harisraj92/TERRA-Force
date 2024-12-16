'use client';
import React, { useState } from "react";
import Contact from '../homecontact/homecontact'

const Pricing = () => {
    const [isAnnually, setIsAnnually] = useState(false); // State for duration
    const [currency, setCurrency] = useState("USD"); // State for currency

    // Exchange rate for USD to INR
    const exchangeRate = 84.92;

    // Pricing data in USD
    const pricingData = {
        starter: { monthly: 20, annually: 200 },
        standard: { monthly: 30, annually: 300 },
        premium: { monthly: 50, annually: 500 },
    };

    // Function to get the price based on currency and duration
    const getPrice = (plan) => {
        const price = isAnnually
            ? pricingData[plan].annually
            : pricingData[plan].monthly;

        return currency === "INR" ? Math.round(price * exchangeRate) : price;
    };

    return (
        <div>
            <section className="absolute top-1/2 md:top-1/4 left-8 transform -translate-y-1/2 md:-translate-y-0  text-white px-4 md:px-8">
                <div className='invisible lg:visible'>
                    <p className=" text-text-sm md:text-xl font-medium tracking-wide">Pricing</p>
                    <h1 className="text-1xl  md:text-5xl font-light mt-2 md:leading-14" >
                        NILAM will  offers flexible <br />Pricing to suit your specific needs
                    </h1>
                </div>
            </section>
            <section className="relative text-center text-gray-700 my-5 px-10 pb-2 " >
                <div className="mb-4 space-y-4 text-center">
                    <h1 className="text-4xl font-semibold leading-tight">Pricing</h1>
                    <p className="px-4 sm:px-8 lg:px-24">
                        The cost may vary monthly or annually according to the plan
                    </p>

                    {/* Toggle Buttons for Duration */}
                    <div className="inline-flex relative right-2">
                        <button
                            onClick={() => setIsAnnually(false)}
                            className={`px-4 py-1 font-semibold border rounded-l-lg ${!isAnnually
                                ? "bg-yellow-700 border-yellow-700 text-gray-50"
                                : "bg-white border-yellow-700 text-gray-800"
                                }`}
                        >
                            Monthly
                        </button>
                        <button
                            onClick={() => setIsAnnually(true)}
                            className={`px-4 py-1 font-semibold border rounded-r-lg ${isAnnually
                                ? "bg-yellow-700 border-yellow-700 text-gray-50"
                                : "bg-white border-yellow-700 text-gray-800"
                                }`}
                        >
                            Annually
                        </button>
                    </div>

                    {/* Toggle Buttons for Currency */}
                    <div className="mt-4 inline-flex">
                        <button
                            onClick={() => setCurrency("USD")}
                            className={`px-4 py-1 font-semibold border rounded-l-lg ${currency === "USD"
                                ? "bg-yellow-700 border-yellow-700 text-gray-50"
                                : "bg-white border-yellow-700 text-gray-800"
                                }`}
                        >
                            USD $
                        </button>
                        <button
                            onClick={() => setCurrency("INR")}
                            className={`px-4 py-1 font-semibold border rounded-r-lg ${currency === "INR"
                                ? "bg-yellow-700 border-yellow-700 text-gray-50"
                                : "bg-white border-yellow-700 text-gray-800"
                                }`}
                        >
                            INR ₹
                        </button>
                    </div>
                </div>

                <div className="container mx-auto px-4 py-8">


                    {/* Pricing Table */}
                    <div className="overflow-x-auto ">
                        <table className="text-xs md:table-auto w-full border-collapse border  border-gray-300 md:text-base">
                            <thead>
                                <tr className="bg-gray-100">
                                    <th className="border border-gray-300 p-4"></th>
                                    <th className="border border-gray-300 p-4">
                                        <div className="text-center">
                                            <h3 className="text-lg font-semibold">Starter</h3>
                                            <span className="pb-2 text-4xl">
                                                {currency === "INR" ? "₹" : "$"}
                                                {getPrice("starter")}
                                            </span>
                                            <span className="text-lg">{isAnnually ? "/yr" : "/mo"}</span>
                                            <br />
                                            <button className="mt-2 bg-yellow-700 text-white text-sm py-2 px-4 rounded-full hover:bg-yellow-600">
                                                Get a Quote
                                            </button>
                                        </div>
                                    </th>
                                    <th className="border border-gray-300 p-4">
                                        <div className="text-center">
                                            <h3 className="text-lg font-semibold">Standard</h3>
                                            <span className="pb-2 text-4xl">
                                                {currency === "INR" ? "₹" : "$"}
                                                {getPrice("standard")}
                                            </span>
                                            <span className="text-lg">{isAnnually ? "/yr" : "/mo"}</span>
                                            <br />
                                            <button className="mt-2 bg-yellow-700 text-white text-sm py-2 px-4 rounded-full hover:bg-yellow-600">
                                                Get a Quote
                                            </button>
                                        </div>
                                    </th>
                                    <th className="border border-gray-300 p-4">
                                        <div className="text-center">
                                            <h3 className="text-lg font-semibold">Premium</h3>
                                            <span className="pb-2 text-4xl">
                                                {currency === "INR" ? "₹" : "$"}
                                                {getPrice("premium")}
                                            </span>
                                            <span className="text-lg">{isAnnually ? "/yr" : "/mo"}</span>
                                            <br />
                                            <button className="mt-2 bg-yellow-700 text-white text-sm py-2 px-4 rounded-full hover:bg-yellow-600">
                                                Get a Quote
                                            </button>
                                        </div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border border-gray-300 p-4 text-left md:indent-10">User Register</td>
                                    <td className="border border-gray-300 p-4 text-center">
                                        <span className="text-green-500 font-bold">✔</span>
                                    </td>
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
                                    <td className="border border-gray-300 p-4 text-center">
                                        <span className="text-green-500 font-bold">✔</span>
                                    </td>
                                </tr>
                                <tr>
                                    <th colSpan="3" className='text-left p-4 text-2xl font-medium'>Vacant Land Services</th>
                                </tr>

                                <tr>
                                    <td className="border border-gray-300 p-4 text-left md:indent-10">Land patta</td>
                                    <td className="border border-gray-300 p-4 text-center">
                                        <span className="text-red-500 font-bold">✖</span>
                                    </td>
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
                                        <span className="text-red-500 font-bold">✖</span>
                                    </td>
                                    <td className="border border-gray-300 p-4 text-center">
                                        <span className="text-green-500 font-bold">✔</span>
                                    </td>
                                </tr>
                                <tr>
                                    <th colSpan="3" className='text-left p-4 text-2xl font-medium'>Building & Flat Services</th>
                                </tr>
                                <tr>
                                    <td className="border border-gray-300 p-4 text-left md:indent-10">Property Tax (corporation or local body)</td>
                                    <td className="border border-gray-300 p-4 text-center">
                                        <span className="text-red-500 font-bold">✖</span>
                                    </td>
                                    <td className="border border-gray-300 p-4 text-center">
                                        <span className="text-green-500 font-bold">✔</span>
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
                                    <td className="border border-gray-300 p-4 text-center">
                                        <span className="text-green-500 font-bold">✔</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan="4" className="border border-gray-300 p-4 text-left  font-medium indent-10">Maintenance Work</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-300 p-4 text-left md:indent-16 "><span className='text-xl'>&#x2B9A;</span> Carpentry</td>
                                    <td className="border border-gray-300 p-4 text-center">
                                        <span className="text-red-500 font-bold">✖</span>
                                    </td>
                                    <td className="border border-gray-300 p-4 text-center">
                                        <span className="text-green-500 font-bold">✔</span>
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
                                    <td className="border border-gray-300 p-4 text-center">
                                        <span className="text-green-500 font-bold">✔</span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                </div>
                <div className="w-[100%] border-b-2 border-yellow-700 mx-auto  pb-2 " ></div>
            </section >
            <section className="relative   text-center text-yellow-700 my-5 px-10 pb-2">
                <Contact />
            </section>
            {/* ---------------Contact  end--------------- */}
        </div>
    )
}

export default Pricing 
