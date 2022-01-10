import Link from "next/link";
import React from "react";
import { FaPython, FaReact } from "react-icons/fa";
import { GoGraph } from "react-icons/go";
import { ImAndroid } from "react-icons/im";

const Services = () => {
  return (
    <div className="bg-gray-900 text-white py-20">
      <div className="container flex flex-wrap w-4/5">
        <div className="container lg:w-2/5">
          <h1 className="text-6xl font-bold">Services</h1>
          <p className="text-lg text-gray-600 my-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            esse eveniet deleniti reprehenderit perspiciatis. Iure laudantium
            ratione quia, eum necessitatibus eveniet iusto. Nemo quod alias
            culpa enim aperiam hic corporis.
          </p>
          <p className="text-white w-fit relative before:content-[''] before:absolute before:left-0 before:bottom-0 before:bg-pink-500 before:h-1 before:w-1/2 hover:before:w-full before:duration-500 ">
            <Link href="/" passHref>
              Request Custom Service
            </Link>
          </p>
        </div>
        <div className="container flex flex-wrap lg:w-3/5">
          <div className="card w-80 px-6 py-8 rounded-xl hover:-translate-y-3 hover:bg-gradient-to-r from-pink-500 to-violet-500 duration-300 cursor-pointer">
            <div className="text-5xl">
              <GoGraph />
            </div>
            <div className="text-3xl my-4">Bussiness Strategy</div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
              esse eveniet deleniti reprehenderit perspiciatis. Iure laudantium
              ratione quia,
            </p>
          </div>
          <div className="card w-80 px-6 py-8 rounded-xl hover:-translate-y-3 hover:bg-gradient-to-r from-pink-500 to-violet-500 duration-300 cursor-pointer">
            <div className="text-5xl">
              <ImAndroid />
            </div>
            <div className="text-3xl my-4">App Development</div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
              esse eveniet deleniti reprehenderit perspiciatis. Iure laudantium
              ratione quia,
            </p>
          </div>
          <div className="card w-80 px-6 py-8 rounded-xl hover:-translate-y-3 hover:bg-gradient-to-r from-pink-500 to-violet-500 duration-300 cursor-pointer">
            <div className="text-5xl">
              <FaReact />
            </div>
            <div className="text-3xl my-4">Web Development</div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
              esse eveniet deleniti reprehenderit perspiciatis. Iure laudantium
              ratione quia,
            </p>
          </div>
          <div className="card w-80 px-6 py-8 rounded-xl hover:-translate-y-3 hover:bg-gradient-to-r from-pink-500 to-violet-500 duration-300 cursor-pointer">
            <div className="text-5xl">
              <FaPython />
            </div>
            <div className="text-3xl my-4">Software Development</div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
              esse eveniet deleniti reprehenderit perspiciatis. Iure laudantium
              ratione quia,
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
