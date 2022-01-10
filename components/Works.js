import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import Swiper core and required modules
import SwiperCore, { Pagination } from "swiper";

// install Swiper modules
SwiperCore.use([Pagination]);

const Works = () => {
  return (
    <div className="bg-gray-900 text-white py-20">
      <div className="container w-4/5">
        <h1 className="text-5xl font-bold my-4">Our Works</h1>
        <p className="text-lg text-gray-500 md:w-1/2">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration.
        </p>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          className="mySwiper my-12"
        >
          <SwiperSlide>
            <div className="card w-full h-96 bg-cover bg-[url('../imgs/about.jpg')] relative"></div>
            <div className="content absolute top-0 left-0 h-full flex flex-col items-center justify-end py-10 bg-gradient-to-b from-black to-transparent hover:from-pink-500 hover:to-black/70 duration-300">
              <p className="text-sm text-gray-500">Blockchain</p>
              <h4 className="text-3xl font-bold my-2">
                Website using React & Solidity
              </h4>
              <button className="text-sm border border-gray-500 rounded-md hover:bg-white hover:text-black py-2 px-4 duration-300">
                View More
              </button>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="card w-full h-96 bg-cover bg-[url('../imgs/about.jpg')] relative"></div>
            <div className="content absolute top-0 left-0 h-full flex flex-col items-center justify-end py-10 bg-gradient-to-b from-black to-transparent hover:from-pink-500 hover:to-black/70 duration-300">
              <p className="text-sm text-gray-500">Blockchain</p>
              <h4 className="text-3xl font-bold my-2">
                Website using React & Solidity
              </h4>
              <button className="text-sm border border-gray-500 rounded-md hover:bg-white hover:text-black py-2 px-4 duration-300">
                View More
              </button>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="card w-full h-96 bg-cover bg-[url('../imgs/about.jpg')] relative"></div>
            <div className="content absolute top-0 left-0 h-full flex flex-col items-center justify-end py-10 bg-gradient-to-b from-black to-transparent hover:from-pink-500 hover:to-black/70 duration-300">
              <p className="text-sm text-gray-500">Blockchain</p>
              <h4 className="text-3xl font-bold my-2">
                Website using React & Solidity
              </h4>
              <button className="text-sm border border-gray-500 rounded-md hover:bg-white hover:text-black py-2 px-4 duration-300">
                View More
              </button>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="card w-full h-96 bg-cover bg-[url('../imgs/about.jpg')] relative"></div>
            <div className="content absolute top-0 left-0 h-full flex flex-col items-center justify-end py-10 bg-gradient-to-b from-black to-transparent hover:from-pink-500 hover:to-black/70 duration-300">
              <p className="text-sm text-gray-500">Blockchain</p>
              <h4 className="text-3xl font-bold my-2">
                Website using React & Solidity
              </h4>
              <button className="text-sm border border-gray-500 rounded-md hover:bg-white hover:text-black py-2 px-4 duration-300">
                View More
              </button>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="card w-full h-96 bg-cover bg-[url('../imgs/about.jpg')] relative"></div>
            <div className="content absolute top-0 left-0 h-full flex flex-col items-center justify-end py-10 bg-gradient-to-b from-black to-transparent hover:from-pink-500 hover:to-black/70 duration-300">
              <p className="text-sm text-gray-500">Blockchain</p>
              <h4 className="text-3xl font-bold my-2">
                Website using React & Solidity
              </h4>
              <button className="text-sm border border-gray-500 rounded-md hover:bg-white hover:text-black py-2 px-4 duration-300">
                View More
              </button>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="card w-full h-96 bg-cover bg-[url('../imgs/about.jpg')] relative"></div>
            <div className="content absolute top-0 left-0 h-full flex flex-col items-center justify-end py-10 bg-gradient-to-b from-black to-transparent hover:from-pink-500 hover:to-black/70 duration-300">
              <p className="text-sm text-gray-500">Blockchain</p>
              <h4 className="text-3xl font-bold my-2">
                Website using React & Solidity
              </h4>
              <button className="text-sm border border-gray-500 rounded-md hover:bg-white hover:text-black py-2 px-4 duration-300">
                View More
              </button>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="card w-full h-96 bg-cover bg-[url('../imgs/about.jpg')] relative"></div>
            <div className="content absolute top-0 left-0 h-full flex flex-col items-center justify-end py-10 bg-gradient-to-b from-black to-transparent hover:from-pink-500 hover:to-black/70 duration-300">
              <p className="text-sm text-gray-500">Blockchain</p>
              <h4 className="text-3xl font-bold my-2">
                Website using React & Solidity
              </h4>
              <button className="text-sm border border-gray-500 rounded-md hover:bg-white hover:text-black py-2 px-4 duration-300">
                View More
              </button>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="card w-full h-96 bg-cover bg-[url('../imgs/about.jpg')] relative"></div>
            <div className="content absolute top-0 left-0 h-full flex flex-col items-center justify-end py-10 bg-gradient-to-b from-black to-transparent hover:from-pink-500 hover:to-black/70 duration-300">
              <p className="text-sm text-gray-500">Blockchain</p>
              <h4 className="text-3xl font-bold my-2">
                Website using React & Solidity
              </h4>
              <button className="text-sm border border-gray-500 rounded-md hover:bg-white hover:text-black py-2 px-4 duration-300">
                View More
              </button>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Works;
