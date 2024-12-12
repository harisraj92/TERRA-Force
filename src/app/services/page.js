import React from 'react'
import Link from "next/link";
import Contact from '../homecontact/homecontact';


const services = () => {
    return (
        <>
            <section className="absolute top-1/2 md:top-1/4 left-8 transform -translate-y-1/2 md:-translate-y-0  text-white px-4 md:px-8">
                <div className='invisible lg:visible'>
                    <p className=" text-text-sm md:text-xl font-medium tracking-wide">Services</p>
                    <h1 className="text-1xl  md:text-5xl font-light mt-2 md:leading-14" >
                        Terraa Force offers end-to-end <br /> land management services
                    </h1>
                </div>
            </section>
            <section className="relative text-center text-yellow-700 my-5 px-10 pb-2 " >
                <h1 className="text-4xl font-bold pb-5" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">What We Do</h1>
                <p className="pb-5" data-aos="fade-down">Accurate land surveying is the foundation of effective land management, and our services utilize  technology
                    to deliver precision and reliability.</p>
                <div className="w-[100%] border-b-2 border-yellow-700 mx-auto  pb-2 " data-aos="fade-down"></div>
            </section >
            <section className="relative text-center text-yellow-700 my-5 px-10 pb-2 " >
                <h1 className="text-4xl font-bold pb-5" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">Our Services at a Glance</h1>
                <p className='text-2xl'>Vacant Land Services</p>
                <section>
                    <div className="container mx-auto px-4 py-12" data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="1500">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <div className="bg-white p-6 shadow-lg text-center border-t-4 border-yellow-500">
                                <h3 className="text-sm text-gray-500">01.</h3>
                                <h2 className="text-lg font-bold text-gray-900 mt-2">
                                    Land patta
                                </h2>
                                <p className="text-gray-600 mt-4 leading-relaxed">
                                    Land Patta services are crucial for ensuring secure land rights, especially in rural areas, and are important for farmers or anyone who relies on land for their livelihood.
                                </p>
                                <a href="#" className="text-yellow-500 font-semibold mt-4 inline-block">
                                    → GET STARTED NOW
                                </a>
                            </div>
                            <div className="bg-white p-6 shadow-lg text-center border-t-4 border-yellow-500">
                                <h3 className="text-sm text-gray-500">02.</h3>
                                <h2 className="text-lg font-bold text-gray-900 mt-2">
                                    Land fencing and Compound wall
                                </h2>
                                <p className="text-gray-600 mt-4 leading-relaxed">
                                    Land fencing and compound wall services are essential for securing properties and enhancing privacy. Clearly demarcates the boundaries, helping avoid land disputes.
                                </p>
                                <a href="#" className="text-yellow-500 font-semibold mt-4 inline-block">
                                    → GET STARTED NOW
                                </a>
                            </div>
                            <div className="bg-white p-6 shadow-lg text-center border-t-4 border-yellow-500">
                                <h3 className="text-sm text-gray-500">03.</h3>
                                <h2 className="text-lg font-bold text-gray-900 mt-2">
                                    Trespassers' occupancy
                                </h2>
                                <p className="text-gray-600 mt-4 leading-relaxed">
                                    By utilizing these services, property owners can protect their assets, avoid legal disputes, and maintain security and privacy.
                                </p>
                                <a href="#" className="text-yellow-500 font-semibold mt-4 inline-block">
                                    → GET STARTED NOW
                                </a>
                            </div>
                            <div className="bg-white p-6 shadow-lg text-center border-t-4 border-yellow-500">
                                <h3 className="text-sm text-gray-500">04.</h3>
                                <h2 className="text-lg font-bold text-gray-900 mt-2">
                                    Land Measurement
                                </h2>
                                <p className="text-gray-600 mt-4 leading-relaxed">
                                    These services offer both technical expertise and legal support, ensuring that landowners and businesses can make informed decisions based on precise data.
                                </p>
                                <a href="#" className="text-yellow-500 font-semibold mt-4 inline-block">
                                    → GET STARTED NOW
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="container mx-auto px-4 py-12" data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="1500">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <div className="bg-white p-6 shadow-lg text-center border-t-4 border-yellow-500">
                                <h3 className="text-sm text-gray-500">05.</h3>
                                <h2 className="text-lg font-bold text-gray-900 mt-2">
                                    Vacant land tax
                                </h2>
                                <p className="text-gray-600 mt-4 leading-relaxed">
                                    Vacant land tax services ensure compliance with tax laws, help minimize financial burdens, and resolve disputes efficiently. We provide expert guidance on tax assessments, exemptions, and records correction. These services are essential for proper financial planning and effective vacant land management.
                                </p>
                                <a href="#" className="text-yellow-500 font-semibold mt-4 inline-block">
                                    → GET STARTED NOW
                                </a>
                            </div>
                            <div className="bg-white p-6 shadow-lg text-center border-t-4 border-yellow-500">
                                <h3 className="text-sm text-gray-500">06.</h3>
                                <h2 className="text-lg font-bold text-gray-900 mt-2">
                                    Land regularisation approval
                                </h2>
                                <p className="text-gray-600 mt-4 leading-relaxed">
                                    Land regularisation approval services help legalize unauthorized properties, ensuring compliance with regulations and avoiding legal issues. They secure necessary approvals, enhance property value, and provide peace of mind to landowners.
                                </p>
                                <a href="#" className="text-yellow-500 font-semibold mt-4 inline-block">
                                    → GET STARTED NOW
                                </a>
                            </div>
                            <div className="bg-white p-6 shadow-lg text-center border-t-4 border-yellow-500">
                                <h3 className="text-sm text-gray-500">07.</h3>
                                <h2 className="text-lg font-bold text-gray-900 mt-2">
                                    Building Plan Approval
                                </h2>
                                <p className="text-gray-600 mt-4 leading-relaxed">
                                    Building plan approval services ensure your construction complies with legal and safety standards. They streamline the approval process, prevent legal complications, and provide a strong foundation for hassle-free property development.
                                </p>
                                <a href="#" className="text-yellow-500 font-semibold mt-4 inline-block">
                                    → GET STARTED NOW
                                </a>
                            </div>
                            <div className="bg-white p-6 shadow-lg text-center border-t-4 border-yellow-500">
                                <h3 className="text-sm text-gray-500">08.</h3>
                                <h2 className="text-lg font-bold text-gray-900 mt-2">
                                    Sub Division Approval
                                </h2>
                                <p className="text-gray-600 mt-4 leading-relaxed">
                                    Subdivision approval services are vital for dividing large land parcels into smaller plots legally and efficiently. These services ensure compliance with local regulations, proper documentation, and optimal land use. This facilitates smooth property transactions and future development.
                                </p>
                                <a href="#" className="text-yellow-500 font-semibold mt-4 inline-block">
                                    → GET STARTED NOW
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="container mx-auto px-4 py-12" data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="1500">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <div className="bg-white p-6 shadow-lg text-center border-t-4 border-yellow-500">
                                <h3 className="text-sm text-gray-500">09.</h3>
                                <h2 className="text-lg font-bold text-gray-900 mt-2">
                                    Temporary EB Service
                                </h2>
                                <p className="text-gray-600 mt-4 leading-relaxed">
                                    Temporary EB (Electricity Board) services are essential for providing short-term power supply during construction, events, or temporary setups.
                                    These services ensure that electricity is available for operations while meeting safety and regulatory standards.
                                </p>
                                <a href="#" className="text-yellow-500 font-semibold mt-4 inline-block">
                                    → GET STARTED NOW
                                </a>
                            </div>
                            <div className="bg-white p-6 shadow-lg text-center border-t-4 border-yellow-500">
                                <h3 className="text-sm text-gray-500">10.</h3>
                                <h2 className="text-lg font-bold text-gray-900 mt-2">
                                    Borewell (If Required)
                                </h2>
                                <p className="text-gray-600 mt-4 leading-relaxed">
                                    Borewell services, if required, provide a reliable and sustainable water source for agricultural or construction needs. They are essential for accessing groundwater in areas where surface water is limited. Borewells ensure water availability, supporting efficient land use and development.
                                </p>
                                <a href="#" className="text-yellow-500 font-semibold mt-4 inline-block">
                                    → GET STARTED NOW
                                </a>
                            </div>
                            <div className="bg-white p-6 shadow-lg text-center border-t-4 border-yellow-500">
                                <h3 className="text-sm text-gray-500">11.</h3>
                                <h2 className="text-lg font-bold text-gray-900 mt-2">
                                    Land survey
                                </h2>
                                <p className="text-gray-600 mt-4 leading-relaxed">
                                    Land survey services are vital for accurate property boundary identification and legal documentation. They ensure proper land use, prevent disputes, and support development projects. Reliable surveys help in securing land titles and provide essential data for construction and real estate activities.
                                </p>
                                <a href="#" className="text-yellow-500 font-semibold mt-4 inline-block">
                                    → GET STARTED NOW
                                </a>
                            </div>

                        </div>
                    </div>

                    <p className='text-2xl'>Building & Flat Services</p>
                    <div className="container mx-auto px-4 py-12" data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="1500">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <div className="bg-white p-6 shadow-lg text-center border-t-4 border-yellow-500">
                                <h3 className="text-sm text-gray-500">01.</h3>
                                <h2 className="text-lg font-bold text-gray-900 mt-2">
                                    Property Tax
                                </h2>
                                <p className="text-gray-600 mt-4 leading-relaxed">
                                    Property Tax <strong>(corporation or local body)</strong> services ensure timely assessment and payment of taxes, supporting civic infrastructure and development. These services help property owners comply with regulations and avoid penalties.
                                </p>
                                <a href="#" className="text-yellow-500 font-semibold mt-4 inline-block">
                                    → GET STARTED NOW
                                </a>
                            </div>
                            <div className="bg-white p-6 shadow-lg text-center border-t-4 border-yellow-500">
                                <h3 className="text-sm text-gray-500">02.</h3>
                                <h2 className="text-lg font-bold text-gray-900 mt-2">
                                    Water Tax
                                </h2>
                                <p className="text-gray-600 mt-4 leading-relaxed">
                                    Water tax services  <strong>(corporation or local body)</strong> ensure the fair distribution and payment for water usage. These services help maintain water supply systems and promote sustainable usage.
                                </p>
                                <a href="#" className="text-yellow-500 font-semibold mt-4 inline-block">
                                    → GET STARTED NOW
                                </a>
                            </div>
                            <div className="bg-white p-6 shadow-lg text-center border-t-4 border-yellow-500">
                                <h3 className="text-sm text-gray-500">03.</h3>
                                <h2 className="text-lg font-bold text-gray-900 mt-2">
                                    Maintenance work
                                </h2>
                                <p className="text-gray-600 mt-4 leading-relaxed">
                                    Maintenance work services, including <strong>Carpentry, EB services, Civil works, and Painting</strong>, ensure the longevity and functionality of buildings. These services address repair and upkeep needs, enhancing property value and safety.
                                </p>
                                <a href="#" className="text-yellow-500 font-semibold mt-4 inline-block">
                                    → GET STARTED NOW
                                </a>
                            </div>
                            <div className="bg-white p-6 shadow-lg text-center border-t-4 border-yellow-500">
                                <h3 className="text-sm text-gray-500">04.</h3>
                                <h2 className="text-lg font-bold text-gray-900 mt-2">
                                    Document verification
                                </h2>
                                <p className="text-gray-600 mt-4 leading-relaxed">
                                    Document verification services are essential for ensuring the authenticity and legality of important records. They help prevent fraud and ensure compliance with regulations. Accurate verification safeguards both individuals and organizations in legal and financial matters.
                                </p>
                                <a href="#" className="text-yellow-500 font-semibold mt-4 inline-block">
                                    → GET STARTED NOW
                                </a>
                            </div>

                        </div>
                    </div>


                </section>
                <div className="w-[100%] border-b-2 border-yellow-700 mx-auto  pb-2 " data-aos="fade-down"></div>
            </section >

            {/* Frequently Asked Questions */}
            <section className="relative   text-center text-yellow-700 my-5 px-10 pb-2 animate-fadeUp delay-100" data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500" >
                <h1 className="text-4xl font-bold pb-5 relative left-5">Frequently Asked Questions</h1>
                <div className="container text-left flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                    <div className="space-y-4">
                        <details className="w-full border border-yellow-700 rounded-lg" open>
                            <summary className="px-4 py-6  text-xl font-semibold">Service Overview</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600 font-bold">Q :  What is included in the manual land inspection service? </p>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">A : Our manual inspection service includes an on-site visit by our professionals, high-quality photo or video capture, and a detailed report with expert insights. You’ll have access to these reports and visual documentation through a personalized online portal.</p>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600 font-bold">Q :  How often can I schedule inspections? </p>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">A : You can choose a frequency that suits your needs—weekly, bi-weekly, monthly, or quarterly. We also offer flexible on-demand inspections when needed.</p>
                        </details>
                        <details className="w-full border border-yellow-700 rounded-lg">
                            <summary className="px-4 py-6  text-xl font-semibold">Booking and Scheduling Inspections</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600 font-bold">Q :  How do I book an inspection? </p>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">A : You can book inspections through our website’s online booking system. Alternatively, you can contact our support team via phone or email to schedule a visit.</p>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600 font-bold">Q :  Can I reschedule or cancel an inspection? </p>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">A : Yes, you can reschedule or cancel your inspection through the online portal or by contacting our support team. We require at least 24 hours' notice for changes.</p>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600 font-bold">Q :  How far in advance should I book? </p>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">A : We recommend booking inspections at least 48 hours in advance, especially for high-demand periods. However, we also accommodate urgent inspections based on availability.</p>
                        </details>
                        <details className="w-full border border-yellow-700 rounded-lg">
                            <summary className="px-4 py-6  text-xl font-semibold">Reports and Photo/Video Documentation</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600 font-bold">Q :  What kind of report will I receive after an inspection? </p>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">A : You will receive a detailed report highlighting the current condition of your land, photos or videos captured during the visit, and expert insights with actionable recommendations.</p>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600 font-bold">Q :  How soon will I receive the report after the visit? </p>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">A : Reports are usually uploaded to your online portal within 24-48 hours after the inspection.</p>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600 font-bold">Q :  What if I need additional details or clarification on the report? </p>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">A : You can request additional information or clarification through the portal or contact our support team directly.</p>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600 font-bold">Q :  Can I compare reports from different inspections? </p>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">A : Yes, our online portal allows you to compare past reports side-by-side, helping you track changes over time.</p>
                        </details>
                    </div>
                </div>
                <div className="p-4 my-5 ">
                    <Link
                        href="/faq"
                        className="float-right hover:uppercase hover:underline hover:italic"
                    >
                        Find More ...
                    </Link>
                </div>
                <div className="w-[100%] border-b-2 border-yellow-700 mx-auto  pb-2 "></div>
            </section>
            {/* ---------------Frequently Asked Questions  end--------------- */}

            {/* Contact us*/}
            <section className="relative   text-center text-yellow-700 my-5 px-10 pb-2" data-aos="fade-up"
                data-aos-duration="3000">
                <Contact />
            </section>
            {/* ---------------Contact  end--------------- */}
        </>
    )
}

export default services
