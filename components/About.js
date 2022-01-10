import React from "react";

const About = () => {
  return (
    <div className="bg-slate-900 text-white">
      <div className="container flex flex-wrap items-center w-4/5">
        <div
          className="w-full lg:w-2/6 bg-cover bg-[url('../imgs/about.jpg')]"
          style={{ height: "35rem" }}
        ></div>
        <div className="container lg:w-1/2">
          <h1 className="text-5xl font-bold">About</h1>
          <p className="text-lg text-gray-600 my-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            esse eveniet deleniti reprehenderit perspiciatis. Iure laudantium
            ratione quia, eum necessitatibus eveniet iusto. Nemo quod alias
            culpa enim aperiam hic corporis.
          </p>
          <button className="border border-white h-10 w-28 flex items-center justify-center rounded-full hover:bg-white hover:text-pink-500 duration-300">
            About us
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
