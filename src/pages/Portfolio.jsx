import React from "react";
import bitmap1 from "../assets/images/portfolio/Bitmap1.png";
import bitmap2 from "../assets/images/portfolio/Bitmap2.png";
import bitmap3 from "../assets/images/portfolio/Bitmap3.png";
import bitmap4 from "../assets/images/portfolio/Bitmap4.png";
import iconImg from "../assets/images/portfolio/icon.png";
import blockImg from "../assets/images/portfolio/blocks.png";
import girlsImg from "../assets/images/portfolio/girlsimg.png";
import pathsImg from "../assets/images/portfolio/Pathimg.png";
import designerImg from "../assets/images/portfolio/designer.png";
import developerImg from "../assets/images/portfolio/developer.png";
import illustratorImg from "../assets/images/portfolio/illustrator.png";
import prdctdesignerImg from "../assets/images/portfolio/prdctdesigner.png";

const portfolioItems = [
  {
    title: "SOFA",
    category: "Design",
    image: bitmap1, // ✅ Corrected
  },
  {
    title: "KeyBoard",
    category: "Branding",
    image: bitmap2,
  },
  {
    title: "Work Media",
    category: "Illustration",
    image: bitmap3,
  },
  {
    title: "DDDone",
    category: "Motion",
    image: bitmap4,
  },
];

const filters = [
  { label: "Show All", count: 14 },
  { label: "Design", count: 6 },
  { label: "Branding", count: 4 },
  { label: "Illustration", count: 3 },
  { label: "Motion", count: 1 },
];

const Portfolio = () => {
  return (
    <section className="bg-[#28293E] text-white py-16 px-6 md:px-20">
      <div className="space-y-16">
        {/* portfolio */}
        <div className=" text-center">
          {/* Title */}
          <p className="text-sm tracking-widest text-[#ff6f61] uppercase mb-2">
            Portfolio
          </p>
          <h2 className="text-4xl font-bold mb-10">Latest Work</h2>

          {/* Filters */}
          <div className="flex justify-center gap-6 text-sm text-gray-300 mb-12 flex-wrap">
            {filters.map((filter, index) => (
              <button key={index} className="hover:text-white transition">
                {filter.label} <sup className="text-xs">{filter.count}</sup>
              </button>
            ))}
          </div>

          {/* Work Grid */}
          <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-12 gap-6 md:gap-8">
            {portfolioItems.map((item, index) => {
              let colSpanMobile = "col-span-1";
              let colSpanSM = "sm:col-span-1";
              let colSpanMD = "md:col-span-6";
              if (index === 0 || index === 3) colSpanMD = "md:col-span-5";
              if (index === 1 || index === 2) colSpanMD = "md:col-span-7";

              return (
                <div
                  key={index}
                  className={`relative  rounded-lg overflow-hidden ${colSpanMobile} ${colSpanSM} ${colSpanMD} h-64 sm:h-72 md:h-[400px]`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute bottom-24 left-4 md:top-70 md:left-6 bg-white text-black text-xs font-semibold px-4 py-2  rounded-full">
                    {item.category}
                  </span>
                  <h3 className="absolute bottom-8 left-4 md:left-6 text-white text-xl sm:text-2xl font-bold">
                    {item.title}
                  </h3>
                </div>
              );
            })}
          </div>

          {/* Explore More */}
          <div className="mt-12">
            <button className="border border-white px-6 py-2 text-sm font-semibold hover:bg-white hover:text-[#1e1f3b] transition rounded">
              EXPLORE MORE
            </button>
          </div>
        </div>

        {/* Promo Card */}
        <div className="bg-[#FDF0E9] rounded-lg p-6 md:p-12 flex flex-col md:flex-row gap-8 relative overflow-visible">
          {/* Left Content */}
          <div className="flex-1 flex flex-col items-start text-left relative">
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
              We Help Companies
              <br className="hidden sm:block" />
              Move Faster
            </h2>

            {/* Button */}
            <button className="bg-[#FF6F61] text-white px-6 py-2 mt-6 font-semibold rounded hover:opacity-90 transition">
              CONTACT US
            </button>
          </div>

          {/* Middle Image */}
          <div className="flex-1 flex justify-center items-center">
            <img
              src={blockImg}
              alt="Promo Graphic"
              className="w-fill sm:w-56 md:w-full max-w-xs md:max-w-full object-contain"
            />
          </div>

          {/* Right Side Image */}
          <div className="flex-1 relative min-h-[280px] sm:min-h-[320px] md:min-h-[360px] lg:min-h-[400px] flex justify-center items-end">
            {/* Background image */}
            <img
              src={pathsImg}
              alt="Decorative Path"
              className="absolute top-0 left-1/2 -translate-x-1/2 w-[75%] max-w-[380px] z-0"
            />

            {/* Foreground Woman Image */}
            <img
              src={girlsImg}
              alt="Woman"
              className="w-30 sm:w-32 md:w-44 lg:w-60 relative"
            />
          </div>
        </div>

        {/* Our Team Section */}
        {/* Our Team Section */}
        <div className="text-white">
          {/* Header */}
          <div className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-lg text-[#FF5A5F] tracking-widest font-semibold uppercase mb-2">
                Our Team
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
                Team of Designers
                <br />
                and Developers
              </h2>
            </div>

            {/* Arrows - hidden on mobile */}
            <div className="hidden md:flex space-x-4 mt-6 md:mt-0">
              <button className="w-10 h-10 border border-[#FFFFFF4B] rounded-full flex items-center justify-center">
                <span className="text-white text-lg">←</span>
              </button>

              <button className="w-10 h-10 border border-[#FFFFFF4B] rounded-full flex items-center justify-center">
                <span className="text-white text-lg">→</span>
              </button>
            </div>
          </div>

          {/* Team Members - horizontal snap scroll on mobile, grid on md+ */}
          <div className="md:grid md:grid-cols-4 md:gap-6 overflow-x-auto snap-x snap-mandatory flex space-x-4 md:space-x-0 md:overflow-visible">
            {/* Team Member 1 */}
            <div className="snap-center flex-shrink-0 w-full md:w-auto text-left space-y-9">
              <div className="border rounded-lg border-[#3A3C56]">
                <img
                  className="w-26 mx-auto pt-14"
                  src={designerImg}
                  alt="Azah Anyeni"
                />
              </div>
              <div>
                <h3 className="text-3xl font-bold">Azah Anyeni</h3>
                <p className="text-lg text-gray-400">Designer</p>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="snap-center flex-shrink-0 w-full md:w-auto text-left space-y-9">
              <div className="border rounded-lg border-[#3A3C56]">
                <img
                  className="w-30 mx-auto pt-14"
                  src={developerImg}
                  alt="Roelof Bekkenenks"
                />
              </div>
              <div>
                <h3 className="text-3xl font-bold">Roelof Bekkenenks</h3>
                <p className="text-lg text-gray-400">React Developer</p>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="snap-center flex-shrink-0 w-full md:w-auto text-left space-y-9">
              <div className="border rounded-lg border-[#3A3C56]">
                <img
                  className="w-30 mx-auto pt-14"
                  src={illustratorImg}
                  alt="Leonardo Oliveira"
                />
              </div>
              <div>
                <h3 className="text-3xl font-bold">Leonardo Oliveira</h3>
                <p className="text-lg text-gray-400">Illustrator</p>
              </div>
            </div>

            {/* Team Member 4 */}
            <div className="snap-center flex-shrink-0 w-full md:w-auto text-left space-y-9">
              <div className="border rounded-lg border-[#3A3C56]">
                <img
                  className="w-30 mx-auto pt-14"
                  src={prdctdesignerImg}
                  alt="Izabella Tabakova"
                />
              </div>
              <div>
                <h3 className="text-3xl font-bold">Izabella Tabakova</h3>
                <p className="text-lg text-gray-400">Product Designer</p>
              </div>
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center space-x-2 mt-8">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF5A5F]"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-gray-500"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-gray-500"></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
