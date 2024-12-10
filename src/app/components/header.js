"use client";
import React, { useState } from "react";
import Link from "next/link";

const Header = ({ backgroundImage }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="text-white  bg-gradient-overlay  relative w-full h-[250px] bg-cover bg-center bg-no-repeat mb-8 md:h-[650px] "
      style={{ backgroundImage: `linear-gradient(67.5deg, rgba(0, 0, 0, 0.7) 40%, rgba(0, 0, 0, 0.4) 60%, rgba(0, 0, 0, 0.01) 80%), url(${backgroundImage})`, }}
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000"
    >
      <div className="container flex items-center justify-around inset-0 bg-yellow-600 bg-opacity-50">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold">
          TERRAA Force
        </Link>

        {/* Desktop Menu (Visible on larger screens) */}
        <nav className="hidden lg:flex gap-1 list-none p-3 m-3">
          <li>
            <Link
              href="/"
              className="hover:border-2 p-4 rounded-md hover:border-yellow-400 transition duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="hover:border-2 p-4 rounded-md hover:border-yellow-400 transition duration-300"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              href="/services"
              className="hover:border-2 p-4 rounded-md hover:border-yellow-400 transition duration-300"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              href="/features"
              className="hover:border-2 p-4 rounded-md hover:border-yellow-400 transition duration-300"
            >
              Features
            </Link>
          </li>
          <li>
            <Link
              href="/pricing"
              className="hover:border-2 p-4 rounded-md hover:border-yellow-400 transition duration-300"
            >
              Pricing
            </Link>
          </li>
          <li>
            <Link
              href="/testimonials"
              className="hover:border-2 p-4 rounded-md hover:border-yellow-400 transition duration-300"
            >
              Testimonials
            </Link>
          </li>
          <li>
            <Link
              href="/faq"
              className="hover:border-2 p-4 rounded-md hover:border-yellow-400 transition duration-300"
            >
              FAQ
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="hover:border-2 p-4 rounded-md hover:border-yellow-400 transition duration-300"
            >
              Contact Us
            </Link>
          </li>
        </nav>

        {/* Hamburger Menu Button (Visible on smaller screens) */}
        <button
          className="lg:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu (Visible when toggled) */}
      {menuOpen && (
        <nav className="lg:hidden bg-yellow-700 text-white ">
          <ul className="space-y-4 p-4">
            <li>
              <Link href="/" className="hover:text-amber-800">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-amber-800">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-amber-800">
                Services
              </Link>
            </li>
            <li>
              <Link href="/features" className="hover:text-amber-800">
                Features
              </Link>
            </li>
            <li>
              <Link href="/pricing" className="hover:text-amber-800">
                Pricing
              </Link>
            </li>
            <li>
              <Link href="/testimonials" className="hover:text-amber-800">
                Testimonials
              </Link>
            </li>
            <li>
              <Link href="/faq" className="hover:text-amber-800">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-amber-800">
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
