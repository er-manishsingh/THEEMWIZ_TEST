import React from "react";
import BitImg1 from "../../assets/images/portfolio/Bitmap1.png";
import BitImg2 from "../../assets/images/portfolio/Bitmap2.png";
import BitImg3 from "../../assets/images/portfolio/Bitmap3.png";
import BitImg4 from "../../assets/images/portfolio/Bitmap4.png";
import iconImg from "../../assets/images/portfolio/icon.png";
import blockImg from "../../assets/images/portfolio/blocks.png";
import girlsImg from "../../assets/images/portfolio/girlsimg.png";

import CardSlide from "./CircularDemo";

import { useState } from "react";

const Portfolio = () => {
  return (
    <section className="bg-[#28293E]">
      <div className="max-w-screen-2xl w-full mx-auto">
        <Works />
        <Grid />
        <Promocard />
        <Team />
      </div>
    </section>
  );
};

export default Portfolio;

const Works = () => {
  return (
    <div
      className="px-6  text-center mx-auto"
      style={{ paddingTop: "4rem", paddingBottom: "1.5rem" }}
    >
      {/* Section Title */}
      <p className="text-sm sm:text-base tracking-widest text-[#EF6D58] uppercase mb-3">
        Portfolio
      </p>

      <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-10">
        Latest Work
      </h2>

      {/* Filters */}
      <div className="hidden sm:flex flex-wrap justify-center gap-4 sm:gap-14 text-base text-gray-400 mb-6 ">
        <button className="hover:text-white transition">
          Show All <sup className="text-sm">14</sup>
        </button>
        <button className="hover:text-white transition">
          Design <sup className="text-sm">6</sup>
        </button>
        <button className="hover:text-white transition">
          Branding <sup className="text-sm">4</sup>
        </button>
        <button className="hover:text-white transition">
          Illustration <sup className="text-sm">3</sup>
        </button>
        <button className="hover:text-white transition">
          Motion <sup className="text-sm">1</sup>
        </button>
      </div>

      {/* Dropdown (Visible only on mobile) */}
      <div className="sm:hidden mb-2">
        <select className="w-full px-4 py-2 text-sm text-gray-700 rounded-md border">
          <option value="all">Show All</option>
          <option value="design">Design</option>
          <option value="branding">Branding</option>
          <option value="illustration">Illustration</option>
          <option value="motion">Motion</option>
        </select>
      </div>
    </div>
  );
};

const Card = ({ src, tag, title }) => (
  <div className="relative rounded-lg overflow-hidden shadow-md h-64 sm:h-72 md:h-[400px]">
    <img src={src} alt={title} className="w-full h-full object-cover" />
    <span className="absolute bottom-14 left-4 bg-white text-gray-800 text-xs font-semibold px-3 py-1 rounded-full">
      {tag}
    </span>
    <h3 className="absolute bottom-4 left-4 text-white text-xl font-bold drop-shadow-md">
      {title}
    </h3>
  </div>
);

const Grid = () => {
  const [showMore, setShowMore] = useState(false);

  const handleToggle = () => {
    // Only toggle on mobile
    if (window.innerWidth < 640) {
      setShowMore((prev) => !prev);
    }
  };

  return (
    <div className="px-6 py-10">
      <div className="flex flex-wrap -mx-3">
        {/* Card 1 */}
        <div className="w-full sm:w-[42%] px-3 mb-6">
          <Card src={BitImg1} tag="Design" title="SOFA" />
        </div>

        {/* Card 2 */}
        <div className="w-full sm:w-[58%] px-3 mb-6">
          <Card src={BitImg2} tag="Branding" title="KeyBoard" />
        </div>

        {/* Card 3 */}
        <div className="w-full sm:w-[58%] px-3 mb-6">
          <Card src={BitImg3} tag="Illustration" title="Work Media" />
        </div>

        {/* Card 4 */}
        <div
          className={`w-full sm:w-[42%] px-3 mb-6 ${
            showMore ? "block" : "hidden sm:block"
          }`}
        >
          <Card src={BitImg4} tag="Motion" title="DDDone" />
        </div>
      </div>

      {/* Button always visible, but only toggles on mobile */}
      <div className="mt-10 flex justify-center">
        <button
          onClick={handleToggle}
          className="border border-white text-white px-6 py-2 text-sm font-semibold hover:bg-white hover:text-[#1e1f3b] transition rounded-lg"
        >
          {showMore && window.innerWidth < 640 ? "SHOW LESS" : "EXPLORE MORE"}
        </button>
      </div>
    </div>
  );
};

const Promocard = () => {
  return (
    <div className="px-6 py-6">
      <div className="bg-[#FDF0E9] rounded-lg   flex flex-col md:flex-row gap-2 md:gap-8 w-auto relative ">
        {/* Left Content */}
        <div className="flex-1 flex flex-col  p-6  md:p-12 w-auto items-start text-left relative">
          {/* Icon */}
          <img
            src={iconImg}
            alt="Promo Icon"
            className="w-24 h-24 md:w-32 md:h-32 -mt-16 md:-mt-28"
          />

          {/* Subtitle */}
          <p className="text-sm text-[#EF6D58] tracking-widest uppercase mt-4 md:mt-0">
            Get Started
          </p>

          {/* Title */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#391400] mt-4">
            We Help Companies Move Faster
          </h2>

          {/* Button */}
          <button className="bg-[#FF6F61] text-white px-6 py-2 mt-6 font-semibold rounded hover:opacity-90 transition">
            CONTACT US
          </button>
        </div>

        {/* Middle Image */}
        <div className=" md:flex-1 md:flex items-center  justify-center  relative">
          <img
            src={blockImg}
            alt="Promo Graphic"
            className="  w-full  object-cover mx-auto sm:w-full h-full md:object-contain"
          />
        </div>

        {/* Right Side Image */}
        <div className="md:flex-1 flex    md:mt-[-4rem]   h-[20rem] md:h-[25rem] justify-center items-end ">
          <img
            src={girlsImg}
            alt="Woman"
            className=" w-[60%] md:w-[65%]  h-full    pb-0 "
          />
        </div>
      </div>
    </div>
  );
};

const Team = () => {
  return (
    <>
      <div className="px-6 py-12">
        <div>
          <h3 className="text-[#EF6D58] uppercase tracking-widest text-lg md:text-xl font-semibold">
            Our Team
          </h3>
          <h1 className="text-4xl md:text-6xl  text-white font-extrabold mt-4">
            Team of Designers <br /> and Developers
          </h1>
        </div>
      </div>
      <CardSlide />
    </>
  );
};
