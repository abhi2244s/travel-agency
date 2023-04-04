import React from "react";
import blue from "../images/blue.png";
import black from "../images/black.png";

const Footer1 = () => {
  return (
    <div>
      <div className="container mx-auto w-5/6 bg-[#CDEAE1] rounded-lg flex md:flex-row flex-col justify-between items-center h-[280px] my-8  h-auto p-5">
        <div>
          <h1 className="text-[44px] leading-[54px] font-bold">
            Subscribe Newsletter
          </h1>
          <h1 className="text-[20px] leading-[25px] font-bold mt-6">
            The Travel
          </h1>
          <p className="text-[16px] leading-[20px] font-medium mt-2">
            Get inspired! Receive travel discounts, tips and behind the scenes
            stories.
          </p>
          <div className="mt-5 flex md:flex-row flex-col">
            <input
              type="text"
              placeholder="Your email address"
              className="rounded p-3 md:w-[470px] rounded "
            />
            <button className="rounded p-3 px-4 md:mx-4 text-white text-[14px] leading-[19px] md:mt-0 mt-3 bg-[black]">
              Subscribe
            </button>
          </div>
        </div>
        <div className="xl:flex p-5 hidden">
          <div className="md:relative ">
            <img src={blue} alt="design" />
          </div>
          <div className="md:absolute md:right-[180px]">
            <img
              src={black}
              className="md:w-[290px] md:h-[190px] w-auto h-auto"
              alt="design"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer1;
