import React from 'react'
import Contact from '../homecontact/homecontact';

const FAQ = () => {
    return (
        <div>
            <section className="absolute top-1/2 md:top-1/4 left-8 transform -translate-y-1/2 md:-translate-y-0  text-white px-4 md:px-8">
                <div className='invisible lg:visible'>
                    <p className=" text-text-sm md:text-xl font-medium tracking-wide">FAQ’s</p>
                    <h1 className="text-1xl  md:text-5xl font-light mt-2 md:leading-14" >
                        Terraa Force Customers <br />Questions and Support
                    </h1>
                </div>
            </section>
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
                        <details className="w-full border border-yellow-700 rounded-lg" open>
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
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">A : You will receive a detailed report highlighting the current condition of your land, photos or videos captured during the visit, and expert insights with actionable recommendations. sample report would be available in our website or we can email it to you.</p>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600 font-bold">Q :  How soon will I receive the report after the visit? </p>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">A : Reports are usually uploaded to your online portal within 24-48 hours after the inspection.</p>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600 font-bold">Q :  What if I need additional details or clarification on the report? </p>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">A : You can request additional information or clarification through the portal or contact our support team directly.</p>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600 font-bold">Q :  Can I compare reports from different inspections? </p>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">A : Yes, our online portal allows you to compare past reports side-by-side, helping you track changes over time.</p>
                        </details>
                        <details className="w-full border border-yellow-700 rounded-lg">
                            <summary className="px-4 py-6  text-xl font-semibold">Online Portal and Data Access</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600 font-bold">Q :  How do I access my inspection reports? </p>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">A : All reports, photos, and videos are uploaded to your personalized online portal. You’ll receive login credentials after signing up for our service.</p>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600 font-bold">Q : Is the online portal secure? </p>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">A : Yes, our portal is secured with the latest encryption protocols to ensure your data is safe and accessible only to you.</p>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600 font-bold">Q :  Can I share the reports with others? </p>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">A : Yes, the portal allows you to download reports and share them with relevant stakeholders, such as legal advisors or potential buyers.</p>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600 font-bold">Q :  Will I get notifications when a report is uploaded? </p>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">A : Yes, you will receive instant notifications via email or SMS when a new report is available in your portal.</p>
                        </details>
                        <details className="w-full border border-yellow-700 rounded-lg">
                            <summary className="px-4 py-6  text-xl font-semibold">Inspection Process and Results</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600 font-bold">Q :  What do your inspectors look for during a visit? </p>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">A : Our inspectors evaluate the overall condition of the land, boundary integrity, potential encroachments, environmental risks (like erosion or overgrowth), and any signs of unauthorized activity.</p>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600 font-bold">Q : Do you provide recommendations based on inspection findings? </p>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">A : Yes, every report includes expert recommendations for addressing issues, such as encroachment prevention, maintenance needs, or security upgrades.</p>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600 font-bold">Q :  What happens if an issue is detected during inspection? </p>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">A : We notify you immediately if urgent action is needed. Our team provides detailed insights and recommendations on how to resolve the issue.</p>
                        </details>
                        <details className="w-full border border-yellow-700 rounded-lg">
                            <summary className="px-4 py-6  text-xl font-semibold">Photo and Video Capture</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600 font-bold">Q :  Can I request both photos and videos for the same inspection? </p>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">A : Yes, we offer both photo and video capture as part of our service. You can specify your preference when booking the inspection.</p>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600 font-bold">Q : What if the weather conditions affect photo or video quality? </p>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">A : In case of unfavorable weather, we will reschedule the photo or video capture to ensure high-quality documentation.</p>
                        </details>
                        <details className="w-full border border-yellow-700 rounded-lg">
                            <summary className="px-4 py-6  text-xl font-semibold">Customization and Additional Services</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600 font-bold">Q :  Can I customize the services I receive? </p>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">A : Yes, we offer customizable service packages to fit your specific needs. You can choose the frequency of inspections, add video documentation, or request specialized reports.</p>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600 font-bold">Q : Do you offer legal assistance if encroachments are found? </p>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">A : While we don’t provide direct legal services, we can connect you with our trusted legal partners and offer detailed documentation to support your case.</p>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600 font-bold">Q : Can I request inspections on an urgent basis? </p>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">A : Yes, we offer emergency inspection services. Please contact us directly, and we’ll do our best to accommodate your request.</p>
                        </details>
                        <details className="w-full border border-yellow-700 rounded-lg">
                            <summary className="px-4 py-6  text-xl font-semibold">Pricing and Payments</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600 font-bold">Q :  How much do your services cost? </p>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">A : Our pricing depends on the frequency of inspections and the services included in your package. You can view detailed pricing on our website or contact us for a customized quote.</p>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600 font-bold">Q : Do you offer any discounts or promotions? </p>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">A : Yes, we offer discounts for long-term packages and referrals. Keep an eye on our website for seasonal promotions and offers.</p>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600 font-bold">Q : What payment methods do you accept? </p>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">A : We accept all major credit cards, bank transfers, and digital wallets. You can set up automatic payments through our portal for convenience.</p>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600 font-bold">Q : Is there a cancellation fee? </p>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">A : There is no cancellation fee if you notify us at least 24 hours before the scheduled inspection. For late cancellations, a small fee may apply.</p>
                        </details>
                        <details className="w-full border border-yellow-700 rounded-lg">
                            <summary className="px-4 py-6  text-xl font-semibold">Customer Support and Assistance</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600 font-bold">Q :  How do I contact customer support? </p>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">A : You can reach our support team via phone, email, or live chat on our website. We are available from 9 AM to 6 PM on weekdays.</p>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600 font-bold">Q : What if I have a complaint or issue with the service? </p>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">A : We value customer feedback and take complaints seriously. Please contact our support team, and we will resolve any issues promptly.</p>
                        </details>
                        <details className="w-full border border-yellow-700 rounded-lg">
                            <summary className="px-4 py-6  text-xl font-semibold">Privacy and Compliance</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600 font-bold">Q :  How do you ensure my privacy is protected? </p>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">A : We follow strict privacy policies and use encryption to safeguard your data. Your reports and photos are only accessible to you through your secure portal.</p>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600 font-bold">Q : Do you comply with local regulations? </p>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">A : Yes, our services are compliant with all relevant local regulations and property laws to ensure seamless and lawful operations.</p>
                        </details>
                        <details className="w-full border border-yellow-700 rounded-lg">
                            <summary className="px-4 py-6  text-xl font-semibold">Miscellaneous</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600 font-bold">Q :  Can I use your service for commercial land? </p>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">A : Yes, our services are available for both residential and commercial landowners.</p>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600 font-bold">Q : Do you offer services outside the city limits? </p>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">A : Yes, we serve both urban and rural areas. However, additional travel charges may apply for remote locations.</p>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600 font-bold">Q : Do you provide seasonal inspections? </p>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">A : Yes, we recommend seasonal inspections to monitor changes during critical times, such as monsoon or winter, to prevent damage.</p>
                        </details>
                    </div>
                </div>
                <div className="p-4 my-5 ">
                    <p className='text-left'>Still Have Questions?</p>
                    <p className='text-left'>If your question isn’t listed here, please contact us directly via phone, email, or live chat. We’re happy to assist you!</p>
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
        </div>
    )
}

export default FAQ
