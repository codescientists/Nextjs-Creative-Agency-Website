import React from "react";
import { FaDollarSign, FaMouse, FaReact } from "react-icons/fa";
import { GoGraph } from "react-icons/go";

const HomeSlider = () => {
  return (
    <div className="px-6 py-10 bg-gray-900">
      <div className="container md:w-4/5">
        <h1 className="text-6xl md:text-8xl font-bold uppercase bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 py-6 lg:w-1/2">
          A Digital Agency.
        </h1>
        <div className="flex flex-row justify-between flex-wrap my-4 text-white">
          <div className="container w-80 m-2">
            <div className="text-6xl text-pink-500">
              <GoGraph />
            </div>
            <h4 className="text-2xl my-4">Business Strategy</h4>
            <p className="text-xl text-gray-700">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered.
            </p>
          </div>
          <div className="container w-80 m-2">
            <div className="text-6xl text-pink-500">
              <FaReact />
            </div>
            <h4 className="text-2xl my-4">Web Development</h4>
            <p className="text-xl text-gray-700">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered.
            </p>
          </div>
          <div className="container w-80 m-2">
            <div className="text-6xl text-pink-500">
              <FaMouse />
            </div>
            <h4 className="text-2xl my-4">Marketing</h4>
            <p className="text-xl text-gray-700">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSlider;
