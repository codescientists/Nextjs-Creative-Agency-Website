import Link from "next/link";
import React from "react";
import {
  FaAndroid,
  FaApple,
  FaFacebookF,
  FaGoogle,
  FaInstagram,
  FaLinkedin,
  FaMicrosoft,
  FaReact,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="bg-slate-900 py-28">
        <div className="container flex flex-wrap justify-center text-gray-600 md:w-4/5">
          <div className="flex items-center justify-center text-6xl w-48 m-4 cursor-pointer hover:text-white hover:scale-125 duration-300 ">
            <Link href="/" passHref>
              <FaMicrosoft />
            </Link>
          </div>
          <div className="flex items-center justify-center text-6xl w-48 m-4 cursor-pointer hover:text-white hover:scale-125 duration-300 ">
            <Link href="/" passHref>
              <FaFacebookF />
            </Link>
          </div>
          <div className="flex items-center justify-center text-6xl w-48 m-4 cursor-pointer hover:text-white hover:scale-125 duration-300 ">
            <Link href="/" passHref>
              <FaGoogle />
            </Link>
          </div>
          <div className="flex items-center justify-center text-6xl w-48 m-4 cursor-pointer hover:text-white hover:scale-125 duration-300 ">
            <Link href="/" passHref>
              <FaAndroid />
            </Link>
          </div>
          <div className="flex items-center justify-center text-6xl w-48 m-4 cursor-pointer hover:text-white hover:scale-125 duration-300 ">
            <Link href="/" passHref>
              <FaTwitter />
            </Link>
          </div>
          <div className="flex items-center justify-center text-6xl w-48 m-4 cursor-pointer hover:text-white hover:scale-125 duration-300 ">
            <Link href="/" passHref>
              <FaApple />
            </Link>
          </div>
          <div className="flex items-center justify-center text-6xl w-48 m-4 cursor-pointer hover:text-white hover:scale-125 duration-300 ">
            <Link href="/" passHref>
              <FaLinkedin />
            </Link>
          </div>
        </div>
      </div>
      <div className="relative flex flex-wrap bg-gray-900 text-white md:py-20">
        <div className="px-10 md:pl-20 md:absolute bottom-0 h-96 flex flex-col justify-center items-start lg:w-1/2 rounded-lg bg-gradient-to-r from-pink-500 to-violet-500">
          <h5 className="uppercase text-lg text-left w-4/5">
            Ready to do bussiness
          </h5>
          <h1 className="text-5xl font-bold w-4/5">
            Get a website for online presence
          </h1>
          <button className="my-7 text-left border-2 border-white rounded px-5 py-2 hover:bg-white hover:text-pink-500 duration-300">
            Contact us
          </button>
        </div>
        <div className="container  md:w-1/2 mr-0 flex justify-center flex-col md:px-20 text-gray-400">
          <div className="container">
            <h6 className="text-xl font-bold">Quick Links</h6>
            <ul>
              <li className="my-2 hover:text-pink-500 duration-300">
                <Link href="/" passHref>
                  Work
                </Link>
              </li>
              <li className="my-2 hover:text-pink-500 duration-300">
                <Link href="/about" passHref>
                  About
                </Link>
              </li>
              <li className="my-2 hover:text-pink-500 duration-300">
                <Link href="/contact" passHref>
                  Contact us
                </Link>
              </li>
            </ul>
          </div>
          <div className="container">
            <h6 className="text-xl font-bold">Say Hello</h6>
            <ul>
              <li className="my-2 hover:text-pink-500 duration-300">
                <Link href="/" passHref>
                  admin@example.com
                </Link>
              </li>
              <li className="my-2 hover:text-pink-500 duration-300">
                <Link href="/about" passHref>
                  hr@example.com
                </Link>
              </li>
            </ul>
            <ul className="flex">
              <li className="mr-4 cursor-pointer hover:text-pink-500 duration-300">
                <Link href="/" passHref>
                  <FaFacebookF />
                </Link>
              </li>
              <li className="mr-4 cursor-pointer hover:text-pink-500 duration-300">
                <Link href="/" passHref>
                  <FaLinkedin />
                </Link>
              </li>
              <li className="mr-4 cursor-pointer hover:text-pink-500 duration-300">
                <Link href="/" passHref>
                  <FaInstagram />
                </Link>
              </li>
              <li className="mr-4 cursor-pointer hover:text-pink-500 duration-300">
                <Link href="/" passHref>
                  <FaTwitter />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
