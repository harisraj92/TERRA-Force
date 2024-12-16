import Link from "next/link";
import Image from 'next/image';
import Contact from "./homecontact/homecontact";


export default function Home() {


  return (
    <>
      {/* Wellcome Note */}
      <div className="invisible lg:visible font-sans absolute top-1/2 md:top-1/4 left-8 transform -translate-y-1/2 md:-translate-y-0  text-white px-4 md:px-8">
        <p className="text-text-sm md:text-xl font-medium tracking-wide">NILAM</p>
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
      <section className="relative text-center text-gray-700 my-5 px-10 pb-2 " >
        <h1 className="text-4xl text-center font-bold py-5">Welcome to NILAM</h1>
        <p className="pb-5"><b><b>NILAM</b></b> is your trusted partner for remote property management, offering cutting-edge solutions to help landowners monitor and maintain their real estate properties effortlessly. Our innovative approach ensures accurate verification of land details, secure digital documentation, and regular updates through an intuitive online portal. With <b><b>NILAM</b></b>, you can manage your property from anywhere  with peace of mind.</p>

      </section>
      {/* ---------------Wellcome Note end--------------- */}
      <section className="relative  text-gray-700 my-5 px-10 pb-2">
        <div className="container mx-auto px-6 py-10 bg-gray-100 p-8 rounded-3xl">

          <div className="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2">
            <div className="lg:flex">
              <img
                className="h-56 w-full rounded-lg object-cover lg:w-64"
                src="./images/verifylandpatta.jpg"
                alt=""
              />
              <div className="flex flex-col justify-between py-6 lg:mx-6">
                <a
                  href="#"
                  className="text-xl font-semibold text-gray-800 hover:underline "
                >
                  Revolutionizing Property Management
                </a>
                <p>Our mission at NILAM is to provide landowners with a reliable, transparent, and efficient way to manage their properties remotely.</p>
                <span className="text-sm text-gray-500 dark:text-gray-300">
                  On: 20 October 2024
                </span>
              </div>
            </div>
            <div className="lg:flex">
              <img
                className="h-56 w-full rounded-lg object-cover lg:w-64"
                src="./images/RemotePropertyMonitoring.jpg"
                alt=""
              />
              <div className="flex flex-col justify-between py-6 lg:mx-6">
                <a
                  href="#"
                  className="text-xl font-semibold text-gray-800 hover:underline "
                >
                  Multimedia Updates
                </a>
                <p>Experience cutting-edge Drone Land Survey Services, offering precise and efficient land mapping for better decision-making.</p>
                <span className="text-sm text-gray-500 dark:text-gray-300">
                  On: 20 October 2024
                </span>
              </div>
            </div>
            <div className="lg:flex">
              <img
                className="h-56 w-full rounded-lg object-cover lg:w-64"
                src="./images/landtheft.png"
                alt=""
              />
              <div className="flex flex-col justify-between py-6 lg:mx-6">
                <a
                  href="#"
                  className="text-xl font-semibold text-gray-800 hover:underline "
                >
                  Physical Property Inspection
                </a>
                <p>Authorize a representative to visit the property location for assessment or inspection, ensuring a thorough evaluation</p>
                <span className="text-sm text-gray-500 dark:text-gray-300">
                  On: 25 November 2024
                </span>
              </div>
            </div>
            <div className="lg:flex">
              <img
                className="h-56 w-full rounded-lg object-cover lg:w-64"
                src="./images/Claims_Easements.jpg"
                alt=""
              />
              <div className="flex flex-col justify-between py-6 lg:mx-6">
                <a
                  href="#"
                  className="text-xl font-semibold text-gray-800 hover:underline "
                >
                  Never Lose Sight of Your Land
                </a>
                <p>Introducing the ultimate solution for remote property monitoring, ensuring your land is secure and well-managed from anywhere.</p>
                <span className="text-sm text-gray-500 dark:text-gray-300">
                  On: 30 September 2024
                </span>
              </div>
            </div>
            <div className="lg:flex">
              <img
                className="h-56 w-full rounded-lg object-cover lg:w-64"
                src="./images/landmonitor.jpg"
                alt=""
              />
              <div className="flex flex-col justify-between py-6 lg:mx-6">
                <a
                  href="#"
                  className="text-xl font-semibold text-gray-800 hover:underline "
                >
                  Secure, Verify, Update
                </a>
                <p>Safeguard your information by encrypting sensitive documents and media, guaranteeing safe and private storage.</p>
                <span className="text-sm text-gray-500 dark:text-gray-300">
                  On: 13 October 2024
                </span>
              </div>
            </div>
            <div className="lg:flex">
              <img
                className="h-56 w-full rounded-lg object-cover lg:w-64"
                src="./images/surveylanddrone.webp"
                alt=""
              />
              <div className="flex flex-col justify-between py-6 lg:mx-6">
                <a
                  href="#"
                  className="text-xl font-semibold text-gray-800 hover:underline "
                >
                  Remote Property Monitoring
                </a>
                <p>Empowering landowners to keep track of their real estate assets without physical visits.</p>
                <span className="text-sm text-gray-500 dark:text-gray-300">
                  On: 20 October 2024
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative h-[400px] md:h-[500px] flex items-center justify-center">
        {/* Parallax Background */}
        <div
          className="absolute inset-0 bg-cover bg-fixed bg-center"
          style={{
            backgroundImage: `url('./images/landservices.jpg')`,
          }}
        ></div>

        {/* Content Container */}
        <div className="relative z-10 bg-white bg-opacity-90 max-w-5xl mx-auto p-6 md:p-12 rounded-lg shadow-lg">
          <h2 className="text-center text-2xl md:text-3xl font-bold mb-4 text-yellow-700">
            Why Choose NILAM ?
          </h2>
          <ul className="space-y-4">
            <li>
              <span className="text-yellow-700 font-semibold">
                Unmatched Transparency:
              </span>{" "}
              Our services are built on trust and accountability, ensuring that
              you receive verified and detailed updates about your property.
            </li>
            <li>
              <span className="text-yellow-700 font-semibold">
                Advanced Technology:
              </span>{" "}
              With state-of-the-art digital tools, we make property management
              seamless and efficient.
            </li>
            <li>
              <span className="text-yellow-700 font-semibold">
                Customer-Centric Approach:
              </span>{" "}
              We prioritize your needs and customize our services to provide the
              best possible solutions.
            </li>
          </ul>
        </div>
      </section>


      {/* Testimonials */}
      <section className="relative   text-center text-gray-700 my-5 px-10 pb-2">
        <h1 className="text-4xl font-bold pb-5 relative left-5">Testimonials</h1>
        <div className="container flex flex-col items-center justify-center mx-auto lg:flex-row lg:flex-wrap lg:justify-evenly lg:px-10 ">
          <div className="flex flex-col max-w-sm mx-4 my-6 border-4 rounded-lg shadow-xl border-t-yellow-700">
            <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 strokeLinejoin bg-white">
              <p className="relative px-6 py-1 text-lg italic text-center strokeLinejoin text-gray-800">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-8 h-8 strokeLinejoin text-gray-700">
                  <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                  <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                </svg><b>NILAM</b> made managing my property so much easier while I was away. I trust them with all my land inspections and updates.
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute right-0 w-8 h-8 strokeLinejoin text-gray-700">
                  <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                  <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                </svg>
              </p>
            </div>
            <div className="flex flex-col items-center justify-center p-8 rounded-b-lg strokeLinejoin bg-white strokeLinejointext-gray-50">
              <Image
                src="/images/man.png" width={64} height={64} alt="" className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full strokeLinejoinbg-gray-500 strokeLinejoinbg-gray-300"
              />

              <p className="text-xl font-semibold leading-tight">Prime Land Developers</p>
              <p className="text-sm uppercase">CEO</p>
            </div>
          </div>
          <div className="flex flex-col max-w-sm mx-4 my-6 border-4 rounded-lg shadow-xl border-t-yellow-700" >
            <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 strokeLinejoin bg-white">
              <p className="relative px-6 py-1 text-lg italic text-center strokeLinejoin text-gray-800">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-8 h-8 strokeLinejoin text-gray-700">
                  <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                  <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                </svg>The <b>NILAM</b> team is always on time, highly professional, and incredibly thorough in their inspections. I couldn’t ask for better service.                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute right-0 w-8 h-8 strokeLinejoin text-gray-700">
                  <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                  <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                </svg>
              </p>
            </div>
            <div className="flex flex-col items-center justify-center p-8 rounded-b-lg strokeLinejoin bg-white strokeLinejointext-gray-50">
              <Image
                src="/images/user.png" width={64} height={64} alt="" className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full strokeLinejoinbg-gray-500 strokeLinejoinbg-gray-300"
              />

              <p className="text-xl font-semibold leading-tight">Urban Land Holdings</p>
              <p className="text-sm uppercase">CEO</p>
            </div>
          </div>
          <div className="flex flex-col max-w-sm mx-4 my-6 border-4 rounded-lg shadow-xl border-t-yellow-700">
            <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 strokeLinejoin bg-white">
              <p className="relative px-6 py-1 text-lg italic text-center strokeLinejoin text-gray-800">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-8 h-8 strokeLinejoin text-gray-700">
                  <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                  <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                </svg>The process of uploading documents and verifying them through DocuSign was quick and easy. <b>NILAM's</b> digital verification system is excellent.
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute right-0 w-8 h-8 strokeLinejoin text-gray-700">
                  <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                  <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                </svg>
              </p>
            </div>
            <div className="flex flex-col items-center justify-center p-8 rounded-b-lg strokeLinejoin bg-white strokeLinejointext-gray-50">
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
            className="float-right uppercase  after:duration-1000 ease-out after:block after:h-1 after:w-full after:origin-bottom-right after:scale-x-0 after:bg-yellow-700 after:transition-transform after:hover:origin-bottom-left after:hover:scale-x-100"
          >
            Find More ...
          </Link>
        </div>
        <div className="w-[100%] border-b-2 border-yellow-700 mx-auto  pb-2 "></div>
      </section>
      {/* ---------------Testimonials  end--------------- */}

      {/* Contact us*/}
      <section className="relative   text-center text-yellow-700 mt-5 px-10 pb-2">
        <Contact />
      </section>
      {/* ---------------Contact  end--------------- */}
    </>
  );
} 
