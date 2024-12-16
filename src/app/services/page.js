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
                        NILAM offers end-to-end <br /> land management services
                    </h1>
                </div>
            </section>
            <section className="relative text-center text-gray-700 my-5 px-10 pb-2 " >
                <h1 className="text-4xl font-bold pb-5">What We Do</h1>
                <p className="pb-5">NILAM to help landowners monitor and maintain their real estate properties remotely. The solution ensures accurate land details verification, digital documentation, and regular updates through an portal.</p>
                <div className="w-[100%] border-b-2 border-yellow-700 mx-auto  pb-2 "></div>
            </section >
            <section className="relative text-center text-gray-700 my-5 px-10 pb-2 " >
                <h1 className="text-4xl font-bold pb-5">Our Services at a Glance</h1>

                <section>
                    <h5 className="text-4xl font-bold pb-5 underline">Primary Services</h5>

                    <div className="container mx-auto px-4 py-12">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <div className="bg-white p-6 shadow-lg text-center border-t-4 border-yellow-700">
                                <h3 className="text-sm text-gray-700">01.</h3>
                                <h2 className="text-lg font-bold text-gray-900 mt-2">
                                    Remote Property Monitoring
                                </h2>
                                <p className="text-gray-600 mt-4 leading-relaxed">
                                    Empowering landowners to keep track of their properties with regular updates and inspections, all from the comfort of their location.
                                </p>

                            </div>
                            <div className="bg-white p-6 shadow-lg text-center border-t-4 border-yellow-700">
                                <h3 className="text-sm text-gray-700">02.</h3>
                                <h2 className="text-lg font-bold text-gray-900 mt-2">
                                    Document Verification Services
                                </h2>
                                <p className="text-gray-600 mt-4 leading-relaxed">
                                    Ensuring the authenticity of land documents through secure digital verification and integration of digital signatures.
                                </p>

                            </div>
                            <div className="bg-white p-6 shadow-lg text-center border-t-4 border-yellow-700">
                                <h3 className="text-sm text-gray-700">03.</h3>
                                <h2 className="text-lg font-bold text-gray-900 mt-2">
                                    On-Site Property Inspections
                                </h2>
                                <p className="text-gray-600 mt-4 leading-relaxed">
                                    Comprehensive physical inspections of properties to gather accurate data, including measurements and condition assessments.
                                </p>

                            </div>
                            <div className="bg-white p-6 shadow-lg text-center border-t-4 border-yellow-700">
                                <h3 className="text-sm text-gray-700">04.</h3>
                                <h2 className="text-lg font-bold text-gray-900 mt-2">
                                    Multimedia Property Updates
                                </h2>
                                <p className="text-gray-600 mt-4 leading-relaxed">
                                    Providing real-time updates through photos, videos, and live-streaming options, giving landowners a detailed view of their property remotely.
                                </p>
                            </div>
                            <div className="bg-white p-6 shadow-lg text-center border-t-4 border-yellow-700">
                                <h3 className="text-sm text-gray-700">05.</h3>
                                <h2 className="text-lg font-bold text-gray-900 mt-2">
                                    Scheduled Monitoring Plans
                                </h2>
                                <p className="text-gray-600 mt-4 leading-relaxed">
                                    Offering flexible monitoring schedules (daily, weekly, or monthly) tailored to the needs of each property owner.
                                </p>
                            </div>
                        </div>
                    </div>

                    <h5 className="text-4xl font-bold pb-5 underline" >Secondary Services</h5>
                    <p className='text-2xl'>Vacant Land Services</p>
                    <div className="container mx-auto px-4 py-12">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <div className="bg-white p-6 shadow-lg text-center border-t-4 border-yellow-700">
                                <h3 className="text-sm text-gray-700">01.</h3>
                                <h2 className="text-lg font-bold text-gray-900 mt-2">
                                    Land patta
                                </h2>
                                <p className="text-gray-600 mt-4 leading-relaxed">
                                    Land Patta services are crucial for ensuring secure land rights, especially in rural areas, and are important for farmers or anyone who relies on land for their livelihood.
                                </p>

                            </div>
                            <div className="bg-white p-6 shadow-lg text-center border-t-4 border-yellow-700">
                                <h3 className="text-sm text-gray-700">02.</h3>
                                <h2 className="text-lg font-bold text-gray-900 mt-2">
                                    Land fencing and Compound wall
                                </h2>
                                <p className="text-gray-600 mt-4 leading-relaxed">
                                    Land fencing and compound wall services are essential for securing properties and enhancing privacy. Clearly demarcates the boundaries, helping avoid land disputes.
                                </p>

                            </div>
                            <div className="bg-white p-6 shadow-lg text-center border-t-4 border-yellow-700">
                                <h3 className="text-sm text-gray-700">03.</h3>
                                <h2 className="text-lg font-bold text-gray-900 mt-2">
                                    Trespassers' occupancy
                                </h2>
                                <p className="text-gray-600 mt-4 leading-relaxed">
                                    By utilizing these services, property owners can protect their assets, avoid legal disputes, and maintain security and privacy.
                                </p>

                            </div>
                            <div className="bg-white p-6 shadow-lg text-center border-t-4 border-yellow-700">
                                <h3 className="text-sm text-gray-700">04.</h3>
                                <h2 className="text-lg font-bold text-gray-900 mt-2">
                                    Land Measurement
                                </h2>
                                <p className="text-gray-600 mt-4 leading-relaxed">
                                    These services offer both technical expertise and legal support, ensuring that landowners and businesses can make informed decisions based on precise data.
                                </p>

                            </div>
                        </div>
                    </div>
                    <div className="container mx-auto px-4 py-12">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <div className="bg-white p-6 shadow-lg text-center border-t-4 border-yellow-700">
                                <h3 className="text-sm text-gray-700">05.</h3>
                                <h2 className="text-lg font-bold text-gray-900 mt-2">
                                    Vacant land tax
                                </h2>
                                <p className="text-gray-600 mt-4 leading-relaxed">
                                    Vacant land tax services ensure compliance with tax laws, help minimize financial burdens, and resolve disputes efficiently. We provide expert guidance on tax assessments, exemptions, and records correction. These services are essential for proper financial planning and effective vacant land management.
                                </p>

                            </div>
                            <div className="bg-white p-6 shadow-lg text-center border-t-4 border-yellow-700">
                                <h3 className="text-sm text-gray-700">06.</h3>
                                <h2 className="text-lg font-bold text-gray-900 mt-2">
                                    Land regularisation approval
                                </h2>
                                <p className="text-gray-600 mt-4 leading-relaxed">
                                    Land regularisation approval services help legalize unauthorized properties, ensuring compliance with regulations and avoiding legal issues. They secure necessary approvals, enhance property value, and provide peace of mind to landowners.
                                </p>

                            </div>
                            <div className="bg-white p-6 shadow-lg text-center border-t-4 border-yellow-700">
                                <h3 className="text-sm text-gray-700">07.</h3>
                                <h2 className="text-lg font-bold text-gray-900 mt-2">
                                    Building Plan Approval
                                </h2>
                                <p className="text-gray-600 mt-4 leading-relaxed">
                                    Building plan approval services ensure your construction complies with legal and safety standards. They streamline the approval process, prevent legal complications, and provide a strong foundation for hassle-free property development.
                                </p>

                            </div>
                            <div className="bg-white p-6 shadow-lg text-center border-t-4 border-yellow-700">
                                <h3 className="text-sm text-gray-700">08.</h3>
                                <h2 className="text-lg font-bold text-gray-900 mt-2">
                                    Sub Division Approval
                                </h2>
                                <p className="text-gray-600 mt-4 leading-relaxed">
                                    Subdivision approval services are vital for dividing large land parcels into smaller plots legally and efficiently. These services ensure compliance with local regulations, proper documentation, and optimal land use. This facilitates smooth property transactions and future development.
                                </p>

                            </div>
                        </div>
                    </div>
                    <div className="container mx-auto px-4 py-12" >
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <div className="bg-white p-6 shadow-lg text-center border-t-4 border-yellow-700">
                                <h3 className="text-sm text-gray-700">09.</h3>
                                <h2 className="text-lg font-bold text-gray-900 mt-2">
                                    Temporary EB Service
                                </h2>
                                <p className="text-gray-600 mt-4 leading-relaxed">
                                    Temporary EB (Electricity Board) services are essential for providing short-term power supply during construction, events, or temporary setups.
                                    These services ensure that electricity is available for operations while meeting safety and regulatory standards.
                                </p>

                            </div>
                            <div className="bg-white p-6 shadow-lg text-center border-t-4 border-yellow-700">
                                <h3 className="text-sm text-gray-700">10.</h3>
                                <h2 className="text-lg font-bold text-gray-900 mt-2">
                                    Borewell (If Required)
                                </h2>
                                <p className="text-gray-600 mt-4 leading-relaxed">
                                    Borewell services, if required, provide a reliable and sustainable water source for agricultural or construction needs. They are essential for accessing groundwater in areas where surface water is limited. Borewells ensure water availability, supporting efficient land use and development.
                                </p>

                            </div>
                            <div className="bg-white p-6 shadow-lg text-center border-t-4 border-yellow-700">
                                <h3 className="text-sm text-gray-700">11.</h3>
                                <h2 className="text-lg font-bold text-gray-900 mt-2">
                                    Land survey
                                </h2>
                                <p className="text-gray-600 mt-4 leading-relaxed">
                                    Land survey services are vital for accurate property boundary identification and legal documentation. They ensure proper land use, prevent disputes, and support development projects. Reliable surveys help in securing land titles and provide essential data for construction and real estate activities.
                                </p>

                            </div>

                        </div>
                    </div>

                    <p className='text-2xl'>Building & Flat Services</p>
                    <div className="container mx-auto px-4 py-12">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <div className="bg-white p-6 shadow-lg text-center border-t-4 border-yellow-700">
                                <h3 className="text-sm text-gray-700">01.</h3>
                                <h2 className="text-lg font-bold text-gray-900 mt-2">
                                    Property Tax
                                </h2>
                                <p className="text-gray-600 mt-4 leading-relaxed">
                                    Property Tax <strong>(corporation or local body)</strong> services ensure timely assessment and payment of taxes, supporting civic infrastructure and development. These services help property owners comply with regulations and avoid penalties.
                                </p>

                            </div>
                            <div className="bg-white p-6 shadow-lg text-center border-t-4 border-yellow-700">
                                <h3 className="text-sm text-gray-700">02.</h3>
                                <h2 className="text-lg font-bold text-gray-900 mt-2">
                                    Water Tax
                                </h2>
                                <p className="text-gray-600 mt-4 leading-relaxed">
                                    Water tax services  <strong>(corporation or local body)</strong> ensure the fair distribution and payment for water usage. These services help maintain water supply systems and promote sustainable usage.
                                </p>

                            </div>
                            <div className="bg-white p-6 shadow-lg text-center border-t-4 border-yellow-700">
                                <h3 className="text-sm text-gray-700">03.</h3>
                                <h2 className="text-lg font-bold text-gray-900 mt-2">
                                    Maintenance work
                                </h2>
                                <p className="text-gray-600 mt-4 leading-relaxed">
                                    Maintenance work services, including <strong>Carpentry, EB services, Civil works, and Painting</strong>, ensure the longevity and functionality of buildings. These services address repair and upkeep needs, enhancing property value and safety.
                                </p>

                            </div>
                            <div className="bg-white p-6 shadow-lg text-center border-t-4 border-yellow-700">
                                <h3 className="text-sm text-gray-700">04.</h3>
                                <h2 className="text-lg font-bold text-gray-900 mt-2">
                                    Document verification
                                </h2>
                                <p className="text-gray-600 mt-4 leading-relaxed">
                                    Document verification services are essential for ensuring the authenticity and legality of important records. They help prevent fraud and ensure compliance with regulations. Accurate verification safeguards both individuals and organizations in legal and financial matters.
                                </p>

                            </div>

                        </div>
                    </div>


                </section>
                <div className="w-[100%] border-b-2 border-yellow-700 mx-auto  pb-2 "></div>
            </section >



            {/* Contact us*/}
            <section className="relative   text-center text-yellow-700 my-5 px-10 pb-2">
                <Contact />
            </section>
            {/* ---------------Contact  end--------------- */}
        </>
    )
}

export default services
