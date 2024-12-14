import React from 'react'
import Link from "next/link";
import Contact from '../homecontact/homecontact';

const Testimonials = () => {
    const clients = [
        {
            title: "GreenFields Estates",
            description:
                "TerraForce has transformed how we monitor our properties, offering reliable and real-time updates!",
            bgColor: "bg-[#e5e2d9]",
        },
        {
            title: "Urban Land Holdings",
            description:
                "With TerraForce's comprehensive services, managing multiple lands has never been this seamless.",
            bgColor: "bg-[#d9d7c6]",
        },
        {
            title: "Prime Land Developers",
            description:
                "Their on-site inspections and detailed media reports are invaluable for remote property management.",
            bgColor: "bg-[#e6e1c5]",
        },
        {
            title: "Future Realty Inc.",
            description:
                "Thanks to TerraForce, we've streamlined our land documentation process with ease and precision.",
            bgColor: "bg-[#eae4c6]",
        },
        {
            title: "Estate Vision Properties",
            description:
                "Their drone surveys and geospatial mapping tools are a game-changer for modern land oversight.",
            bgColor: "bg-[#e4e2f4]",
        },
        {
            title: "Heritage Land Co.",
            description:
                "TerraForce has become our trusted partner for secure and efficient land management.",
            bgColor: "bg-[#d9e3ef]",
        },
        {
            title: "Vista Land Corporation",
            description:
                "We appreciate their flexible monitoring plans and prompt notifications for better land control.",
            bgColor: "bg-[#f5e7d8]",
        },
        {
            title: "GOLDEN TERRAIN LTD.",
            description:
                "TerraForce delivers exceptional service with advanced tools that make decision-making effortless.",
            bgColor: "bg-[#d0d1d5]",
        },
        {
            title: "Horizon Property Solutions",
            description:
                "Their customer-centric approach ensures every detail is managed with precision and care.",
            bgColor: "bg-[#e0dfe5]",
        },
        {
            title: "Pioneer Land Developers",
            description:
                "With TerraForce, we've experienced unmatched professionalism in every aspect of land management.",
            bgColor: "bg-[#ece7db]",
        },
    ];
    return (
        <div>
            <section className="absolute top-1/2 md:top-1/4 left-8 transform -translate-y-1/2 md:-translate-y-0  text-white px-4 md:px-8">
                <div className='invisible lg:visible'>
                    <p className=" text-text-sm md:text-xl font-medium tracking-wide">Testimonials</p>
                    <h1 className="text-1xl  md:text-5xl font-light mt-2 md:leading-14" >
                        Case Studies from Terraa Force <br />
                        Customers
                    </h1>
                </div>
            </section>
            <section className="relative text-center text-yellow-700 my-5 px-10 pb-2 " >
                <h1 className="text-4xl font-bold pb-5" data-aos="fade-down">Customers like yours Terraa Force to grow faster</h1>
                <p className="pb-5" data-aos="fade-down">Empowering landowners with smarter solutions,Redefining excellence in land management and care.From monitoring to seamless oversight,Your trusted partner, always there</p>

                <div className="container mx-auto px-4 py-8">
                    <div
                        className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-auto"
                    >
                        {/* First Row: 2 Columns */}
                        <div className="col-span-1 lg:col-span-2 bg-[#e5e2d9] p-6 rounded-md shadow-md">
                            <h3 className="text-lg font-semibold mb-4">{clients[0].title}</h3>
                            <p className="text-gray-700 mb-4">{clients[0].description}</p>

                        </div>
                        <div className="col-span-1 bg-[#d9d7c6] p-6 rounded-md shadow-md">
                            <h3 className="text-lg font-semibold mb-4">{clients[1].title}</h3>
                            <p className="text-gray-700 mb-4">{clients[1].description}</p>

                        </div>

                        {/* Second Row: 3 Columns */}
                        {clients.slice(2, 5).map((client, index) => (
                            <div
                                key={index}
                                className="col-span-1 bg-[#e6e1c5] p-6 rounded-md shadow-md"
                            >
                                <h3 className="text-lg font-semibold mb-4">{client.title}</h3>
                                <p className="text-gray-700 mb-4">{client.description}</p>

                            </div>
                        ))}
                        {/* third Row: 1 Small Column, 1 Large Column */}
                        <div className="col-span-1 bg-[#d9e3ef] p-6 rounded-md shadow-md">
                            <h3 className="text-lg font-semibold mb-4">{clients[8].title}</h3>
                            <p className="text-gray-700 mb-4">{clients[8].description}</p>

                        </div>
                        <div className="col-span-1 sm:col-span-2 bg-[#ece7db] p-6 rounded-md shadow-md">
                            <h3 className="text-lg font-semibold mb-4">{clients[9].title}</h3>
                            <p className="text-gray-700 mb-4">{clients[9].description}</p>

                        </div>

                        {/* fourth Row: 3 Columns */}
                        {clients.slice(5, 8).map((client, index) => (
                            <div
                                key={index}
                                className="col-span-1 bg-[#e4e2f4] p-6 rounded-md shadow-md"
                            >
                                <h3 className="text-lg font-semibold mb-4">{client.title}</h3>
                                <p className="text-gray-700 mb-4">{client.description}</p>

                            </div>
                        ))}
                    </div>
                </div>

                <div className="w-[100%] border-b-2 border-yellow-700 mx-auto  pb-2 " data-aos="fade-down"></div>
            </section >
            {/* Contact us*/}
            <section className="relative   text-center text-yellow-700 my-5 px-10 pb-2" data-aos="fade-down">
                <Contact />
            </section>
            {/* ---------------Contact  end--------------- */}
        </div>
    )
}

export default Testimonials
