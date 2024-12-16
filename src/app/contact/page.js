"use client";
import React, { useState } from 'react';
import Contact from '../homecontact/homecontact'
import Image from 'next/image';
import Link from "next/link";

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        organization: '',
        source: '',
        message: '',
    });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Sending...');

        try {
            const response = await fetch('api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (result.success) {
                setStatus('Email sent successfully!');
            } else {
                setStatus('Failed to send email.');
            }
        } catch (error) {
            console.error('Error:', error);
            setStatus('Failed to send email.');
        }
    };
    return (
        <div>
            <section className="absolute top-1/2 md:top-1/4 left-8 transform -translate-y-1/2 md:-translate-y-0  text-white px-4 md:px-8">
                <div className='invisible lg:visible'>
                    <p className=" text-text-sm md:text-xl font-medium tracking-wide">Contact Us</p>
                    <h1 className="text-1xl  md:text-5xl font-light mt-2 md:leading-14" >
                        Get in Touch with NILAM: <br /> We're Here to Help!
                    </h1>
                </div>
            </section>
            <section className="relative text-center text-gray-700 my-5 px-10 pb-2 " >
                <div className="container mx-auto px-4 py-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-left">
                        {/* Contact Information Section */}
                        <div>
                            <h2 className="text-2xl font-bold mb-4 text-center">Contact Information</h2>
                            <p className="text-gray-600 mb-6">
                                We’re here to answer your questions and assist you with comprehensive Terra Force.<br /> Connect with us today!
                            </p>
                            <div className="mb-6">
                                <h3 className="font-semibold">INDIA, Chennai</h3>
                                <p className="text-gray-700 font-semibold">NILAM</p>
                                <div className="flex items-start mt-4">
                                    <span className="mr-4 text-xl">
                                        <Image
                                            src="/images/location.png"
                                            width={50}
                                            height={50}
                                            alt="YouTube"
                                            className="w-7 h-7 bg-center bg-cover rounded-full"
                                        /></span>
                                    <p>1234 West Street, <br /> Chennai 600028, Tamil Nadu</p>
                                </div>
                            </div>
                            <div className="mb-6">
                                <div className="flex items-center mt-4">
                                    <span className="mr-4 text-xl">
                                        <Image
                                            src="/images/telephone.png"
                                            width={50}
                                            height={50}
                                            alt="Contact"
                                            className="w-7 h-7 bg-center bg-cover rounded-full"
                                        /></span>
                                    <div>
                                        <p>+91 81480 10201</p>
                                        <p>+91 81223 31551</p>
                                    </div>
                                </div>
                                <div className="flex items-center mt-4">
                                    <span className="mr-4 text-xl">
                                        <Image
                                            src="/images/email.png"
                                            width={50}
                                            height={50}
                                            alt="Email"
                                            className="w-7 h-7 bg-center bg-cover rounded-full"
                                        /></span>
                                    <p>hr@nilam.com</p>
                                </div>
                            </div>
                            <div className="mb-6">
                                <h3 className="font-semibold">Office Hours:</h3>
                                <div className="flex items-center mt-2">
                                    <span className="mr-4 text-xl">
                                        <Image
                                            src="/images/clock.png"
                                            width={50}
                                            height={50}
                                            alt="Office Time"
                                            className="w-7 h-7 bg-center bg-cover rounded-full"
                                        /></span>
                                    <p>
                                        Monday to Friday: 10:00 AM - 7:00 PM <br />
                                        Saturday - Sunday: <span className="font-semibold">Closed</span>
                                    </p>
                                </div>
                            </div>
                            <div>
                                <h3 className="font-semibold">Reach Out Online</h3>
                                <div className="flex items-center space-x-4 mt-2">
                                    <ul className="grid grid-cols-3 gap-4 md:grid-rows-1 md:gap-6">
                                        <li>
                                            <Link
                                                href="/"
                                            >
                                                <Image
                                                    src="/images/youtube.png"
                                                    width={50}
                                                    height={50}
                                                    alt="YouTube"
                                                    className="w-12 h-12 bg-center bg-cover rounded-full"
                                                />
                                            </Link>

                                        </li>
                                        <li>
                                            <Link
                                                href="/"
                                            >
                                                <Image
                                                    src="/images/facebook.png"
                                                    width={50}
                                                    height={50}
                                                    alt="Facebook"
                                                    className="w-12 h-12 bg-center bg-cover rounded-full"
                                                />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="/"
                                            >
                                                <Image
                                                    src="/images/whatsapp.png"
                                                    width={50}
                                                    height={50}
                                                    alt="WhatsApp"
                                                    className="w-12 h-12 bg-center bg-cover rounded-full"
                                                /></Link>
                                        </li>
                                        <li>
                                            <Image
                                                src="/images/instagram.png"
                                                width={50}
                                                height={50}
                                                alt="Instagram"
                                                className="w-12 h-12 bg-center bg-cover rounded-full"
                                            />
                                        </li>
                                        <li>
                                            <Link
                                                href="/"
                                            >
                                                <Image
                                                    src="/images/linkedin.png"
                                                    width={50}
                                                    height={50}
                                                    alt="LinkedIn"
                                                    className="w-12 h-12 bg-center bg-cover rounded-full"
                                                /></Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="/"
                                            >
                                                <Image
                                                    src="/images/twitter.png"
                                                    width={50}
                                                    height={50}
                                                    alt="Twitter"
                                                    className="w-12 h-12 bg-center bg-cover rounded-full"
                                                /></Link>
                                        </li>


                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Enquiry Form Section */}
                        <div>
                            <h2 className="text-2xl font-bold mb-4">Enquiry Form</h2>
                            <p className="text-gray-600 mb-6">
                                Got a question or a special request? Simply fill out the form below, and <br /> our team will respond promptly.
                            </p>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label className="block text-gray-600 font-medium mb-2">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-yellow-500"
                                        placeholder="Your Name"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-600 font-medium mb-2">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-yellow-500"
                                        placeholder="Your Email"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-600 font-medium mb-2">Phone</label>
                                    <input
                                        type="text"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-yellow-500"
                                        placeholder="+91"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-600 font-medium mb-2">Organization</label>
                                    <input
                                        type="text"
                                        name="organization"
                                        value={formData.organization}
                                        onChange={handleChange}
                                        className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-yellow-500"
                                        placeholder="Your Organization"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-600 font-medium mb-2">
                                        How did you hear about us?
                                    </label>
                                    <input
                                        type="text"
                                        name="source"
                                        value={formData.source}
                                        onChange={handleChange}
                                        className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-yellow-500"
                                        placeholder="Source"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-600 font-medium mb-2">Message</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-yellow-500"
                                        rows="4"
                                        placeholder="Write your message here..."
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="bg-yellow-700 text-white rounded-md px-6 py-2 font-medium hover:bg-yellow-600 focus:ring-1 focus:ring-yellow-500"
                                >
                                    Send Message
                                </button>
                                {status && <p className="text-gray-600 mt-4">{status}</p>}
                            </form>
                        </div>
                    </div>
                </div>
                <div className="w-[100%] border-b-2 border-yellow-700 mx-auto  pb-2 "></div>
            </section >
            {/* Contact us*/}
            <section className="relative   text-center text-yellow-700 my-5 px-10 pb-2">
                <Contact />
            </section>
            {/* ---------------Contact  end--------------- */}
        </div>


    )
}

export default ContactUs