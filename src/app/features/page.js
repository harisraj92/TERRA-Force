"use client";
import React, { useState } from "react";
import Link from "next/link";
import Contact from "../homecontact/homecontact";


const Features = () => {
    const [activeSection, setActiveSection] = useState("Legal and Documentation Issues");
    const sections = {
        "Legal and Documentation Issues": {
            content: [
                { title: "Encroachments", description: "Neighboring property owners or others might encroach upon your land." },
                { title: "Title Disputes", description: "Challenges to ownership may arise due to unclear property titles or fraudulent claims." },
                { title: "Zoning Violations", description: "Local regulations might restrict certain uses of the land." },
                { title: "Tax Compliance", description: "Failure to pay property taxes can lead to legal penalties or property auctions." },
            ],
            image: "./images/legaldocx.png",
        },
        "Environmental Risks": {
            content: [
                { title: "Flooding", description: "Properties near water bodies face risks of flooding during heavy rains." },
                { title: "Pollution", description: "Air or soil pollution may affect the property's value and usability." },
                { title: "Climate Change", description: "Changing weather patterns may impact property safety and viability." },
                { title: "Environmental and Location-Specific Risks", description: "Land in disaster-prone or climate-sensitive areas may lose value, and changing development trends can reduce market demand for certain locations." },
            ],
            image: "./images/environment_risks.jpg",
        },
        "Security Threats": {
            content: [
                { title: "Lack of Monitoring or Surveillance", description: "Unmonitored properties are more susceptible to unauthorized use or damage." },
                { title: "Vandalism and Theft", description: "Destruction of property assets or theft of resources like construction materials or equipment on the land." },
                { title: "Political or Social Unrest", description: "Land occupation or damage during protests, riots, or political instability." },
                { title: "Fraudulent Transactions", description: "Fake documentation or forged titles used to sell or claim land.Double-selling of the same land to multiple buyers." },
                { title: "Legal Disputes", description: "Disputes over unclear property boundaries or historical claims on the land.Third parties filing false claims or disputes against ownership." },

            ],
            image: "./images/landtheft.png",
        },
        "Economic and Market Risks": {
            content: [
                { title: "Economic Fluctuations", description: "Recession, inflation, or high unemployment can reduce demand for land, affect pricing, and increase development costs." },
                { title: "Market Volatility and Demand Imbalance", description: "Unpredictable real estate market cycles and oversupply can lead to declining land values and investment losses" },
                { title: "Interest Rate and Financing Risks", description: "Rising interest rates can increase borrowing costs, making land investments less appealing and harder to finance." },
                { title: "Regulatory and Policy Changes", description: "New zoning laws, environmental regulations, or tax policies can limit land use or profitability." },
            ],
            image: "./images/economic_risks.jpeg",
        },
        "Maintenance and Degradation": {
            content: [
                { title: "Regular Inspections", description: "Frequent checks of boundaries, fences, irrigation systems, and roads to ensure functionality and prevent damage." },
                { title: "Infrastructure Preservation", description: "Maintaining roads, pathways, and drainage systems to ensure access and proper water management." },
                { title: "Monitoring of Resources", description: "Keeping track of land resources (e.g., water, minerals, crops) to ensure sustainable usage and avoid depletion." },
                { title: "Urban Encroachment and Overdevelopment", description: "Land degradation from rapid construction, industrialization, and overuse of natural resources, leading to habitat destruction and reduced land usability." },
            ],
            image: "./images/Maintenance_Degradation.jpeg",
        },
        "Natural Disasters and Climate Risks": {
            content: [
                { title: "Flooding", description: "Heavy rainfall, rising river levels, or coastal storms can lead to land inundation, damaging crops, infrastructure, and soil quality." },
                { title: "Drought", description: "Prolonged dry periods cause water scarcity, negatively affecting agriculture, vegetation, and water resources." },
                { title: "Wildfires", description: "Uncontrolled fires spread rapidly through forests, grasslands, or agricultural land, destroying vegetation and wildlife habitats" },
                { title: "Landslides", description: "Movement of soil, rock, and debris down a slope, typically triggered by heavy rainfall, earthquakes." },
            ],
            image: "./images/Natural_Disasters_Climate.jpeg",
        },
        "Third-Party Claims and Easements": {
            content: [
                { title: "Neighboring Property Claims", description: "Claims from neighboring landowners regarding boundary disputes, encroachments, or misuse of property." },
                { title: "Adverse Possession Claims", description: " Unclear property boundaries or squatter claims that can lead to ownership disputes." },
                { title: "Right of Way", description: "A legal right allowing one party to pass through another's land for a specific purpose (such as road construction or public access)." },
                { title: "Easements for Access", description: " A legal right for someone to cross or use a portion of the land for specific purposes, like accessing another property." },
            ],
            image: "./images/Claims_Easements.jpg",
        },
        "Regulatory and Developmental Challenges": {
            content: [
                { title: "Zoning Restrictions", description: "Limits flexibility for development plans, requiring re-zoning approvals for changes" },
                { title: "Environmental Compliance", description: "Laws and policies to protect the environment, such as wetland preservation or pollution control." },
                { title: "Approval and Permit Delays", description: "Multiple levels of governmental approvals required for land development." },
                { title: "Technological Adaptation", description: "  Requirements to adopt sustainable or smart technologies in land development." },
                { title: "Taxation Policies", description: " High or fluctuating taxes can reduce the profitability of development projects." },
                { title: "Land Acquisition and Ownership Disputes", description: "Complex legal processes to acquire land and establish clear ownership.Lengthy legal disputes, unclear titles, or historical claims can delay development" },
            ],
            image: "./images/Regulatory_Developmental_Challenges.jpeg",
        },

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
            <section className="relative text-center text-yellow-700 my-5 px-10 pb-2 " >
                <div className=" bg-gray-100 p-8">
                    <div className="flex flex-wrap gap-4 mb-8">
                        {Object.keys(sections).map((key) => (
                            <button
                                key={key}
                                onClick={() => setActiveSection(key)}
                                className={`px-4 py-2 rounded-lg ${activeSection === key ? "bg-gray-400 font-semibold" : "bg-gray-200 hover:bg-gray-300"
                                    }`}
                            >
                                {key}
                            </button>
                        ))}
                    </div>

                    {/* Content Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Left Column */}
                        <div className="bg-white rounded-lg shadow-lg p-6">
                            <h2 className="text-lg font-bold mb-4 text-left">{activeSection}</h2>
                            <div className="space-y-4">
                                {sections[activeSection].content.map((item, index) => (
                                    <div key={index}>
                                        <h3 className="font-semibold text-left">{item.title}</h3>
                                        <p className="text-gray-600 indent-14 text-left">{item.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right Column */}
                        <div className="bg-gray-200 rounded-lg flex items-center justify-center">
                            <img
                                src={sections[activeSection].image}
                                alt={activeSection}
                                className="w-3/4 h-3/4 object-contain rounded-md"
                            />
                        </div>
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

export default Features
