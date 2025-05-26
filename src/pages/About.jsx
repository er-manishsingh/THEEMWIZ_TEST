// import React from "react";
// import digitalImg from "../assets/images/about/digitalside.png";
// import vortexImg from "../assets/images/about/vortex.png";
// import travelImg from "../assets/images/about/travel.png";
// import fuzionImg from "../assets/images/about/fuzion.png";
// import mediaImg from "../assets/images/about/media.png";
// import picImg from "../assets/images/about/pic.png";
// import videoThumbnailImg from "../assets/images/about/Bitmapbg.png";

// const About = () => {
//   return (
//     <section className="bg-[#FDF0E9] py-12 px-4 sm:px-6 md:px-12 lg:px-20">
//       {/* Top Partner Logos */}
//       <div className="py-8">
//         <div className="flex flex-wrap justify-between items-center gap-6 mb-10">
//           {[
//             { src: `${digitalImg}`, alt: "Digitalside" },
//             { src: `${vortexImg}`, alt: "Vortex" },
//             {
//               src: `${travelImg}`,
//               alt: "Travel Explorer",
//             },
//             { src: `${fuzionImg}`, alt: "FUZION" },
//             { src: `${mediaImg}`, alt: "MediaFury" },
//           ].map((logo, idx) => (
//             <img
//               key={idx}
//               src={logo.src}
//               alt={logo.alt}
//               className="h-8 md:h-10 object-contain"
//             />
//           ))}
//         </div>

//         {/* Horizontal line inside the main div */}
//         <div className="w-full mb-8">
//           <hr className="h-0.5 bg-[#F3D1BF] " />
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="flex flex-col lg:flex-row  py-10  gap-12">
//         {/* Left Side */}
//         <div className="relative w-full max-w-md h-[400px]">
//           <img
//             src={picImg}
//             alt="Combined Visual"
//             className="w-full h-full object-contain"
//           />
//         </div>

//         {/* --------------------------------------------------------------------------------- */}

//         {/* Right Side */}
//         <div className=" text-left items-start justify-between mx-auto  space-y-10">
//           <p className="text-xs text-[#ef6e58] tracking-widest uppercase">
//             About
//           </p>

//           <h2 className="text-4xl font-extrabold text-[#391400] leading-snug">
//             An Experience <br /> Design Agency
//           </h2>

//           <p className="text-[#391400] text-lg font-medium">
//             Provides a full service range.
//           </p>

//           <p className="text-[#391400A3] text-sm leading-relaxed">
//             Ability to put themselves in the merchant’s shoes. It is <br />{" "}
//             meant to partner for the long run, and work as an extension <br />{" "}
//             of the merchant’s team.
//           </p>

//           <button className="bg-white text-[#1e1e1e]  px-6 py-2 rounded-lg font-semibold">
//             ABOUT US
//           </button>
//         </div>
//       </div>

//       {/* Stats */}
//       <div className="grid grid-cols-1 md:grid-cols-3 mt-36 ">
//         <div className="border border-[#F3D1BF] p-6 text-left">
//           <h3 className="text-3xl text-[#391400] font-extrabold">42%</h3>
//           <p className="text-sm text-[#391400] mt-1 tracking-widest">
//             Years of experience
//           </p>
//         </div>
//         <div className="border border-[#F3D1BF] p-6 text-left">
//           <h3 className="text-3xl text-[#391400] font-extrabold">73+</h3>
//           <p className="text-sm text-[#391400] mt-1 tracking-widest">
//             Agency members
//           </p>
//         </div>
//         <div className="border border-[#F3D1BF] p-6 text-left">
//           <h3 className="text-3xl text-[#391400] font-extrabold">5.000</h3>
//           <p className="text-sm text-[#391400] mt-1 tracking-widest">
//             Projects complete
//           </p>
//         </div>
//       </div>

//       {/* services */}

//       <div className="py-24">
//         <div className="  grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
//           {/* Left Side */}
//           <div className="space-y-8">
//             <p className="text-xs text-[#EF6D58] tracking-widest uppercase font-medium">
//               How we work
//             </p>

//             <h2 className="text-4xl font-extrabold text-[#391400] leading-snug">
//               Making Your Projects <br /> Look Awesome
//             </h2>

//             <p className="text-[#391400A3] text-sm leading-relaxed max-w-md">
//               Technical skills, design, business understanding, ability to put
//               themselves in the merchant's shoes.
//             </p>

//             <p className="text-sm font-semibold text-[#391400]  cursor-pointer">
//               Read More
//             </p>
//           </div>

//           {/* Right Side - List */}
//           <div className="space-y-10">
//             <div className="flex items-center gap-10">
//               <span className="text-4xl font-extrabold text-[#391400]">1</span>
//               <p className="text-[#391400] text-base font-semibold tracking-wider leading-relaxed">
//                 Full service range including
//               </p>
//             </div>

//             <div className="flex items-center gap-10">
//               <span className="text-4xl font-extrabold text-[#391400]">2</span>
//               <p className="text-[#391400] text-base font-semibold tracking-wider leading-relaxed">
//                 Technical skills, design, business
//               </p>
//             </div>

//             <div className="flex items-center gap-10">
//               <span className="text-4xl font-extrabold text-[#391400]">3</span>
//               <p className="text-[#391400] text-base font-semibold tracking-wider leading-relaxed">
//                 Themselves in the merchant's
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* horizontal line */}
//       <div className="w-full mb-8">
//         <hr className="h-0.5 bg-[#F3D1BF] " />
//       </div>

//       {/* video */}

//       <div className="flex flex-col lg:flex-row items-center justify-between gap-12 my-20 ">
//         {/* Video Thumbnail */}
//         <div className="relative w-full max-w-lg rounded-lg overflow-hidden">
//           <img
//             src={videoThumbnailImg}
//             alt="Video Thumbnail"
//             className="w-full h-auto object-cover rounded-lg"
//           />
//           {/* Play Button Overlay */}
//           <div className="absolute inset-0 flex items-center justify-center">
//             <div className="w-20 h-20 border-2 border-white rounded-full flex items-center justify-center">
//               <div className="w-0 h-0 border-l-[12px] border-l-white border-y-[8px] border-y-transparent" />
//             </div>
//           </div>
//           {/* Video Duration */}
//           <div className="absolute bottom-2 left-2 bg-black bg-opacity-20 text-white text-xs px-2 py-1 rounded">
//             1:45
//           </div>
//         </div>

//         {/* Text Content */}
//         <div className="text-left mx-auto  space-y-8">
//           <p className="text-xs text-[#EF6D58] uppercase tracking-widest ">
//             Video Reel
//           </p>
//           <h2 className="text-3xl font-black text-[#391400] leading-snug ">
//             Unlock The Greatest <br /> Value Possible
//           </h2>
//           <p className="text-[#391400A3] text-sm leading-relaxed">
//             Design, business understanding, ability to put themselves <br />
//             in the merchant’s shoes meant to partner.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;

import React from "react";
import digitalImg from "../assets/images/about/digitalside.png";
import vortexImg from "../assets/images/about/vortex.png";
import travelImg from "../assets/images/about/travel.png";
import fuzionImg from "../assets/images/about/fuzion.png";
import mediaImg from "../assets/images/about/media.png";
import picImg from "../assets/images/about/pic.png";
import videoThumbnailImg from "../assets/images/about/Bitmapbg.png";

const About = () => {
  return (
    <section className="bg-[#FDF0E9] py-12 px-4 sm:px-6 md:px-12 lg:px-20">
      {/* Top Partner Logos */}
      <div className="py-8 px-8 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-6 sm:gap-8 mb-10">
          {[
            { src: digitalImg, alt: "Digitalside" },
            { src: vortexImg, alt: "Vortex" },
            { src: travelImg, alt: "Travel Explorer" },
            { src: fuzionImg, alt: "FUZION" },
            { src: mediaImg, alt: "MediaFury" },
          ].map((logo, idx) => (
            <img
              key={idx}
              src={logo.src}
              alt={logo.alt}
              className="h-6 sm:h-8 md:h-10 max-w-[120px] object-contain"
            />
          ))}
        </div>
        <hr className="h-0.5 bg-[#F3D1BF] mb-8" />
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 py-2">
        {/* Left Side Image */}
        <div className=" relative w-full lg:w-1/2 max-w-md lg:max-w-none h-80 sm:h-96 mx-auto">
          <img
            src={picImg}
            alt="Combined Visual"
            className="w-full h-full object-contain "
          />
        </div>

        {/* Right Side Content */}
        <div className="text-left w-full lg:w-1/2 max-w-2xl mx-auto px-4 sm:px-6 lg:px-0 space-y-6 sm:space-y-8">
          <p className="text-xs text-[#EF6D58] tracking-widest uppercase font-medium">
            About
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#391400] leading-snug sm:leading-tight">
            An Experience Design Agency
          </h2>

          <p className="text-[#391400] text-base sm:text-lg font-medium">
            Provides a full service range.
          </p>
          <p className="text-[#391400A3] text-sm sm:text-base leading-relaxed">
            Ability to put themselves in the merchant’s shoes. It is meant to
            partner for the long run, and work as an extension of the merchant’s
            team.
          </p>
          <button className="bg-white text-[#1e1e1e] px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition">
            ABOUT US
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3  mt-20">
        {[
          { stat: "42%", label: "Years of experience" },
          { stat: "73+", label: "Agency members" },
          { stat: "5.000", label: "Projects complete" },
        ].map((item, idx) => (
          <div key={idx} className="border border-[#F3D1BF] p-6 text-left">
            <h3 className="text-3xl text-[#391400] font-extrabold">
              {item.stat}
            </h3>
            <p className="text-sm text-[#391400] mt-1 tracking-widest">
              {item.label}
            </p>
          </div>
        ))}
      </div>

      {/* Services Section */}
      <div className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
          {/* Left Side */}
          <div className="space-y-6 text-left max-w-xl mx-auto md:mx-0">
            <p className="text-xs text-[#EF6D58] tracking-widest uppercase font-medium">
              How we work
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#391400] leading-snug sm:leading-tight">
              Making Your Projects <br className="hidden md:block" /> Look
              Awesome
            </h2>
            <p className="text-[#391400A3] text-sm sm:text-base leading-relaxed max-w-md mx-auto md:mx-0">
              Technical skills, design, business understanding, ability to put
              themselves in the merchant's shoes.
            </p>
            <p className="text-sm font-semibold text-[#391400] cursor-pointer hover:text-[#EF6D58] transition-colors max-w-max  md:mx-0">
              Read More
            </p>
          </div>

          {/* Right Side - Steps */}
          <div className="space-y-8 max-w-md mx-auto md:mx-0">
            {[
              "Full service range including",
              "Technical skills, design, business",
              "Themselves in the merchant's",
            ].map((text, idx) => (
              <div key={idx} className="flex items-start gap-4 sm:gap-6">
                <span className="text-3xl sm:text-4xl font-extrabold text-[#391400] min-w-[32px] flex justify-center">
                  {idx + 1}
                </span>
                <p className="text-[#391400] text-base font-semibold tracking-wider leading-relaxed">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <hr className="h-0.5 bg-[#F3D1BF] mb-12" />

      {/* Video Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Video Thumbnail */}
        <div className="relative w-full max-w-md sm:max-w-lg mx-auto rounded-lg overflow-hidden">
          <img
            src={videoThumbnailImg}
            alt="Video Thumbnail"
            className="w-full h-auto object-cover rounded-lg"
          />
          {/* Play Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 border-2 border-white rounded-full flex items-center justify-center">
              <div className="w-0 h-0 border-l-[12px] border-l-white border-y-[8px] border-y-transparent" />
            </div>
          </div>
          <div className="absolute bottom-2 left-2 bg-black bg-opacity-20 text-white text-xs px-2 py-1 rounded">
            1:45
          </div>
        </div>

        {/* Video Text */}
        <div className="text-left lg:text-left w-full max-w-xl mx-auto space-y-6">
          <p className="text-xs text-[#EF6D58] uppercase tracking-widest">
            Video Reel
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-[#391400] leading-snug">
            Unlock The Greatest <br className="hidden lg:block" /> Value
            Possible
          </h2>
          <p className="text-[#391400A3] text-sm leading-relaxed">
            Design, business understanding, ability to put themselves in the
            merchant’s shoes meant to partner.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
