import React from 'react'
import Link from "next/link";
import Image from 'next/image';

const Contact = () => {
    return (
        <div>
            <section className="relative text-center text-yellow-700 my-5 px-5 pb-2">
                <h1 className="text-4xl font-bold pb-5">Contact Us</h1>
                <div className="flex flex-wrap justify-around">
                    <address className="pb-5 text-left text-gray-600 not-italic">
                        <p className="font-bold pb-2">Terraa Force</p>
                        <p>1234 West Street,</p>
                        <p>Chennai 600028,</p>
                        <p>Tamil Nadu</p>
                        <p>India</p>
                        <div className="flex flex-row justify-start items-start gap-x-2">
                            <p className="font-bold">Phone: </p>
                            <div className="text-right">
                                <p>+91 81480 10201</p>
                                <p>+91 81223 31551</p>
                            </div>
                        </div>
                        <p className="font-bold">
                            Email:{" "}
                            <Link href="mailto:johndoe@example.com" className="font-light">
                                hr@terraaforce.com
                            </Link>
                        </p>
                    </address>
                    <div>
                        <p className="pb-5 font-bold">Social Media</p>
                        <ul className="grid grid-cols-3 gap-4 md:grid-cols-3 md:gap-6">
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
                            <li>
                                <Link
                                    href="/"
                                >
                                    <Image
                                        src="/images/snapchat.png"
                                        width={50}
                                        height={50}
                                        alt="Snapchat"
                                        className="w-12 h-12 bg-center bg-cover rounded-full"
                                    /></Link>
                            </li>
                            <li>
                                <Link
                                    href="/"
                                >
                                    <Image
                                        src="/images/sharechat.png"
                                        width={50}
                                        height={50}
                                        alt="ShareChat"
                                        className="w-12 h-12 bg-center bg-cover rounded-full"
                                    /></Link>
                            </li>
                            <li>
                                <Link
                                    href="/"
                                >
                                    <Image
                                        src="/images/pinterest.png"
                                        width={50}
                                        height={50}
                                        alt="Pinterest"
                                        className="w-12 h-12 bg-center bg-cover rounded-full"
                                    /></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Contact