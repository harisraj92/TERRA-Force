import Link from "next/link";
import Image from 'next/image';
import Contact from "./homecontact/homecontact";


export default function Home() {
  return (
    <>
      {/* Wellcome Note */}
      <div className="invisible lg:visible font-sans absolute top-1/2 md:top-1/4 left-8 transform -translate-y-1/2 md:-translate-y-0  text-white px-4 md:px-8">
        <p className="text-text-sm md:text-xl font-medium tracking-wide">Terraa Force</p>
        <h1 className="text-1xl md:text-5xl font-light leading-tight mt-2">
          Digital Hub for Land Information
        </h1>
        <div className="flex justify-normal items-center flex-wrap gap-5 text-balance my-11">
          <Link
            href="/"
            className="p-4 rounded-full transition duration-300 bg-yellow-700 text-white hover:text-yellow-700 hover:border-2 hover:border-yellow-400 hover:bg-white"
          >
            Request For Demo
          </Link>

        </div>
      </div>
      <section className="relative text-center text-yellow-700 my-5 px-10 pb-2 " >
        <h1 className="text-4xl font-bold pb-5" data-aos="fade-down">Wellcome to TERRAA  Force</h1>
        <p className="pb-5" data-aos="fade-down">We provide reliable land property monitoring services for landowners who are unable to visit or oversee their properties personally. Our team ensures detailed inspections, secure document verification, and regular updates through high-quality media and reports. With TerraForce, your land is always in safe hands!</p>
        <div className="w-[100%] border-b-2 border-yellow-700 mx-auto  pb-2 " data-aos="fade-down"></div>
      </section>
      {/* ---------------Wellcome Note end--------------- */}

      {/* Services and Features */}
      <section className="relative   text-center text-yellow-700 my-5 px-10 pb-2 animate-fadeUp delay-100"
        data-aos="fade-down">
        <h1 className="text-4xl font-bold pb-5 relative left-5">Services</h1>
        <div className="flex justify-evenly items-center flex-wrap gap-5 text-balance">
          <Link
            href="/"
            className="p-4 rounded-md transition duration-300 bg-yellow-700 text-white hover:text-yellow-700 hover:border-2 hover:border-yellow-400 hover:bg-white"
          >
            Land patta
          </Link>
          <Link
            href="/"
            className="p-4 rounded-md transition duration-300 bg-yellow-700 text-white hover:text-yellow-700 hover:border-2 hover:border-yellow-400 hover:bg-white"
          >
            Land fencing and Compound wall
          </Link>
          <Link
            href="/"
            className="p-4 rounded-md transition duration-300 bg-yellow-700 text-white hover:text-yellow-700 hover:border-2 hover:border-yellow-400 hover:bg-white"
          >
            Trespassers occupancy
          </Link>
          <Link
            href="/"
            className="p-4 rounded-md transition duration-300 bg-yellow-700 text-white hover:text-yellow-700 hover:border-2 hover:border-yellow-400 hover:bg-white"
          >
            Land Measurement
          </Link>
          <Link
            href="/"
            className="p-4 rounded-md transition duration-300 bg-yellow-700 text-white hover:text-yellow-700 hover:border-2 hover:border-yellow-400 hover:bg-white"
          >
            Vacant land tax
          </Link>
        </div>
        <div className="p-4 my-5 ">
          <Link
            href="/services"
            className="float-right hover:uppercase hover:underline hover:italic"
          >
            Find More ...
          </Link>
        </div>
        <div className="w-[100%] border-b-2 border-yellow-700 mx-auto  pb-5 "></div>
        <section className="relative text-center text-yellow-600  pb-2 md:my-5 md:px-10 my-0 px-0 animate-fadeUp delay-100" data-aos="zoom-in-right">
          <h1 className="text-4xl font-bold pb-5 relative left-5">Features</h1>

          <div className="flex ">
            <div className="border-2 border-yellow-700 rounded-full w-96 h-96 shadow-md" >
              <h1 className="relative top-40 text-4xl">TERRAA Force</h1>

            </div>
            <ul className="text-justify flex flex-col gap-5 relative left-10 text-xs md:text-base">
              <div className="hidden  md:block absolute right-56 top-4 w-32 border-t-2 border-yellow-700"></div><li>Secure Document Verification</li>
              <div className="hidden md:block absolute right-56 top-14 w-20 border-t-2 border-yellow-700"></div><li>On-Site Land Inspections</li>
              <div className="hidden md:block absolute right-56 top-24 w-12 border-t-2 border-yellow-700"></div><li>Flexible Monitoring Plans</li>
              <div className="hidden md:block absolute right-56 top-36 w-8 border-t-2 border-yellow-700"></div><li>Comprehensive Reporting</li>
              <div className="hidden md:block absolute right-56 top-48 w-7 border-t-2 border-yellow-700"></div><li>High-Quality Media Uploads</li>
              <div className="hidden md:block absolute right-56 top-57 w-7 border-t-2 border-yellow-700"></div><li>User-Friendly Portal</li>
              <div className="hidden md:block absolute right-56 top-69 w-10 border-t-2 border-yellow-700"></div><li>Data Security</li>
              <div className="hidden md:block absolute right-56 top-88 w-16 border-t-2 border-yellow-700"></div><li>Customer Support</li>
            </ul>
          </div>
          <div className="p-4 my-5 ">
            <Link
              href="/features"
              className="float-right hover:uppercase hover:underline hover:italic"
            >
              Find More ...
            </Link>
          </div>
          <div className="w-[100%] border-b-2 border-yellow-700 mx-auto  pb-2 "></div>
        </section>

      </section>

      {/* ---------------Services and Features  end--------------- */}

      {/* Frequently Asked Questions */}
      <section className="relative   text-center text-yellow-700 my-5 px-10 pb-2 animate-fadeUp delay-100"
        data-aos="fade-down">
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


      {/* Testimonials */}
      <section className="relative   text-center text-yellow-700 my-5 px-10 pb-2">
        <h1 className="text-4xl font-bold pb-5 relative left-5">Testimonials</h1>
        <div className="container flex flex-col items-center justify-center mx-auto lg:flex-row lg:flex-wrap lg:justify-evenly lg:px-10 ">
          <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg" data-aos="fade-right"
            data-aos-offset="100"
            data-aos-easing="ease-in-sine">
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
          <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg" data-aos="zoom-out-down">
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
          <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg" data-aos="fade-left"
            data-aos-offset="100"
            data-aos-easing="ease-in-sine">
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
      </section>
      {/* ---------------Testimonials  end--------------- */}

      {/* Contact us*/}
      <section className="relative   text-center text-yellow-700 my-5 px-10 pb-2" data-aos="fade-down">
        <Contact />
      </section>
      {/* ---------------Contact  end--------------- */}
    </>
  );
} 
