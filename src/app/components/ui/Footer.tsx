import React from "react";
import Link from "next/link";
// import {
//   FaFacebookF,
//   FaLinkedinIn,
//   FaTwitter,
//   FaInstagram
// } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="relative bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Orange Section with Custom Curve */}
          <div className="lg:col-span-4 relative">
            <div className="relative h-full">
              {/* Custom curved orange background */}
              <div
                className="absolute inset-0 bg-orange-500 overflow-hidden"
                style={{
                  clipPath:
                    "polygon(0 0, 85% 0, 100% 15%, 100% 85%, 70% 100%, 0 100%)",
                }}
              >
                {/* Decorative background elements */}
                <div className="absolute top-4 right-8 w-16 h-16 opacity-20">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <circle cx="30" cy="30" r="3" fill="white" />
                    <circle cx="50" cy="20" r="2" fill="white" />
                    <circle cx="70" cy="40" r="4" fill="white" />
                    <circle cx="80" cy="60" r="2" fill="white" />
                    <circle cx="40" cy="70" r="3" fill="white" />
                  </svg>
                </div>
                <div className="absolute bottom-8 right-4 w-24 h-24 opacity-10">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <polygon points="20,80 50,20 80,80" fill="white" />
                    <polygon points="30,75 50,45 70,75" fill="white" />
                  </svg>
                </div>
              </div>

              {/* Content inside orange section */}
              <div className="relative z-10 p-8 h-full text-white">
                {/* Logo and Company Name */}
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mr-3">
                    <svg
                      viewBox="0 0 24 24"
                      className="w-8 h-8 text-orange-500"
                    >
                      <polygon
                        points="12,2 22,8.5 22,15.5 12,22 2,15.5 2,8.5"
                        fill="currentColor"
                      />
                      <polygon
                        points="12,6 18,9.5 18,14.5 12,18 6,14.5 6,9.5"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold">GrowX</h2>
                </div>

                {/* Description */}
                <p className="text-sm leading-relaxed mb-8">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat quis anim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>

                {/* Social Icons */}
                {/* <div className="flex space-x-4">
                <Link href="#" className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all">
                  <FaFacebookF className="w-4 h-4" />
                </Link>
                <Link href="#" className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all">
                  <FaLinkedinIn className="w-4 h-4" />
                </Link>
                <Link href="#" className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all">
                  <FaTwitter className="w-4 h-4" />
                </Link>
                <Link href="#" className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all">
                  <FaInstagram className="w-4 h-4" />
                </Link>
              </div> */}
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Our Company */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Our Company</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/news"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    News
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Services</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/market-research"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Market Research
                  </Link>
                </li>
                <li>
                  <Link
                    href="/market-analysis"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Market Analysis
                  </Link>
                </li>
                <li>
                  <Link
                    href="/seo-consultancy"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    SEO Consultancy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/page-ranking"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Page Ranking
                  </Link>
                </li>
                <li>
                  <Link
                    href="/smm"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    SMM
                  </Link>
                </li>
              </ul>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Features</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/brand-strategy"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Brand Strategy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/audience-analytics"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Audience Analytics
                  </Link>
                </li>
                <li>
                  <Link
                    href="/copywriting"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Copywriting
                  </Link>
                </li>
                <li>
                  <Link
                    href="/team-training"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Team Training
                  </Link>
                </li>
                <li>
                  <Link
                    href="/email-marketing"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Email Marketing
                  </Link>
                </li>
              </ul>
            </div>

            {/* Subscribe */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Subscribe</h3>
              <div className="space-y-4">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 transition-colors"
                />
                <button className="w-full bg-black text-white py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors font-medium">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-6 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>© 2024 GrowX. All rights reserved.</p>
            <div className="flex space-x-6 mt-2 md:mt-0">
              <Link
                href="/privacy"
                className="hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="hover:text-white transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
