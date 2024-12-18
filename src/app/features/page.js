'use client'
import { useState } from "react";
import Link from "next/link";
import Pricing from "../pricingDetails/pricingDetails";
import Contact from "../homecontact/homecontact";
import LegalandDocumentationIssues from "../features_legaldocx/page";
import EnvironmentalRisks from "../features_environmentalrisks/page";
import SecurityThreats from "../features_SecurityThreats/page";
import MarketRisks from "../features_MarketRisks/page";
import Maintenance_Degradation from "../features_Maintenance/page";
import NaturalDisasters_ClimateRisks from "../features_ClimateRisks/page";
import ThirdPartyClaims_Easements from "../features_ThirdPartyClaims/page";
import Regulatory_DevelopmentalChallenges from "../features_Regulatory_Developmental/page";

const Features = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedFeature, setSelectedFeature] = useState(null);

    const features = [
        {
            id: 1,
            img: "./images/features/documentissue.png",
            title: "Legal and Documentation Issues",
            description: <LegalandDocumentationIssues />,
        },
        {
            id: 2,
            img: "./images/features/eco-friendly.png",
            title: "Environmental Risks",
            description: <EnvironmentalRisks />,
        },
        {
            id: 3,
            img: "./images/features/SecurityThreats.png",
            title: "Security Threats",
            description: <SecurityThreats />,
        },
        {
            id: 4,
            img: "./images/features/Economic_Market.png",
            title: "Economic and Market Risks",
            description: <MarketRisks />,
        },
        {
            id: 5,
            img: "./images/features/degradation.png",
            title: "Maintenance and Degradation",
            description: <Maintenance_Degradation />,
        },
        {
            id: 6,
            img: "./images/features/disaster.png",
            title: "Natural Disasters and Climate Risks",
            description: <NaturalDisasters_ClimateRisks />,
        },
        {
            id: 7,
            img: "./images/features/claim.png",
            title: "Third-Party Claims and Easements",
            description: <ThirdPartyClaims_Easements />,
        },
        {
            id: 8,
            img: "./images/features/regulatory.png",
            title: "Regulatory and Developmental Challenges",
            description: <Regulatory_DevelopmentalChallenges />,
        },
    ];


    // Handle Modal Open
    const openModal = (feature) => {
        setSelectedFeature(feature);
        setShowModal(true);
    };

    // Handle Modal Close
    const closeModal = () => {
        setSelectedFeature(null);
        setShowModal(false);
    };

    return (
        <div>
            <section className="absolute top-1/2 md:top-1/4 left-8 transform -translate-y-1/2 md:-translate-y-0  text-white px-4 md:px-8">
                <div className='invisible lg:visible'>
                    <p className=" text-text-sm md:text-xl font-medium tracking-wide">Features</p>
                    <h1 className="text-1xl  md:text-5xl font-light mt-2 md:leading-14" >
                        Driving Excellence in Land <br /> Oversight and Decision-Making.
                    </h1>
                </div>
            </section>
            <section className="relative text-center text-gray-700 my-5 px-10 pb-2 " >
                <div className='container mx-auto px-6 py-10 bg-gray-100 rounded-3xl'>
                    <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                        {/* Left Section: Text & Service Cards */}
                        <div className="space-y-6">
                            <p className="text-xl md:text-2xl font-semibold text-gray-900 leading-snug">
                                Secure your land with seamless remote monitoring.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                                {features.map((feature) => (
                                    <div
                                        key={feature.id}
                                        className="p-3 border rounded-lg shadow-sm text-center cursor-pointer bg-white hover:shadow-md transition"
                                        onClick={() => openModal(feature)}
                                    >
                                        <img
                                            src={feature.img}
                                            alt={feature.title}
                                            className="w-10 h-10 mx-auto mb-2"
                                        />
                                        <p className="text-sm font-medium text-gray-700">{feature.title}</p>
                                    </div>
                                ))}
                            </div>

                            {showModal && selectedFeature && (
                                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                                    <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6 relative">
                                        {/* Close Button */}
                                        <button
                                            onClick={closeModal}
                                            className="absolute top-2 right-2 text-gray-400 hover:text-gray-700"
                                        >
                                            &times;
                                        </button>

                                        {/* Modal Content */}
                                        <div className="text-left">
                                            <img
                                                src={selectedFeature.img}
                                                alt={selectedFeature.title}
                                                className="w-16 h-16 mx-auto mb-4"
                                            />
                                            <h3 className="text-lg font-bold text-gray-800 mb-2">
                                                {selectedFeature.title}
                                            </h3>
                                            <div>  {selectedFeature.description}</div>

                                        </div>
                                    </div>
                                </div>
                            )}

                        </div>

                        {/* Right Section: Images Grid */}
                        <div className="grid grid-cols-2 grid-rows-3 gap-4">
                            {/* First Image - Spans 2 Rows */}
                            <div className="row-span-2">
                                <img
                                    src="./images/verifylandpatta.jpg"
                                    alt="Verify Land Patta"
                                    className="w-full h-full object-cover rounded-lg"
                                />
                            </div>

                            {/* Second Image */}
                            <div className="row-span-1">
                                <img
                                    src="./images/surveylanddrone.webp"
                                    alt="Survey Land Drone"
                                    className="w-full h-full object-cover rounded-lg"
                                />
                            </div>

                            {/* Third Image */}
                            <div className="row-span-2">
                                <img
                                    src="./images/documentupload.jpg"
                                    alt="Document Upload"
                                    className="w-full h-full object-cover rounded-lg"
                                />
                            </div>

                            {/* Fourth Image */}
                            <div className="row-span-1">
                                <img
                                    src="./images/surveylanddrone.jpeg"
                                    alt="Survey Land"
                                    className="w-full h-full object-cover rounded-lg"
                                />
                            </div>
                        </div>


                    </div>
                </div>

            </section>

            <section className="relative text-center text-gray-700 my-5 px-10 pb-2">
                <Pricing />
                <div className="w-[100%] border-b-2 border-yellow-700 mx-auto  pb-2 "></div>
            </section>
            {/* Contact us*/}
            <section className="relative   text-center text-gray-700 mt-5 px-10 pb-2">
                <Contact />
            </section>
            {/* ---------------Contact  end--------------- */}
        </div>
    )
}

export default Features