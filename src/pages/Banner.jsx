// import starImg from "../assets/images/Star.png";
// import profileimg from "../assets/images/boyProfile.png";
// import picImg from "../assets/images/pic.png";

// const Banner = () => {
//   return (
//     <section className="bg-[#28293E] text-white py-16 w-full font-primary">
//       <div className="container  mx-auto px-6 flex flex-col md:flex-row justify-between ">
//         {/* Left Side - Text */}
//         <div className="flex flex-col w-full h-full">
//           <p className="text-orange-500 font-semibold tracking-widest mb-2">
//             MODERN STUDIO
//           </p>
//           <h1 className="text-[72px] leading-[80px]  mb-6 font-bold">
//             We’re He
//             <span
//               className="inline-block text-white px-4 py-2 leading-none"
//               style={{
//                 backgroundImage: `url(${starImg})`,
//                 backgroundRepeat: "no-repeat",
//                 backgroundSize: "cover",
//                 backgroundPosition: "center",
//               }}
//             >
//               lp
//             </span>
//             <br />
//             To Build Your
//             <br />
//             Dream Project
//           </h1>

//           <p className="text-gray-400 text-lg mb-6">
//             Agency provides a full service range including technical
//             <br />
//             skills, design, business understanding.
//           </p>
//           <div className="flex gap-4">
//             <button className="bg-[#EF6D58] hover:bg-orange-600 text-white px-6 py-3 font-semibold rounded">
//               HOW WE WORK
//             </button>
//             <button className="text-white px-6 py-3 font-semibold hover:underline">
//               Contact Us
//             </button>
//           </div>
//           <div className="flex items-center gap-4 mt-20">
//             {/* Profile Image */}
//             <img
//               src={profileimg}
//               alt="Profile"
//               className="w-16 h-16 rounded-full object-cover bg-[#B550F6]"
//             />

//             {/* Text Section */}
//             <div>
//               <p className="text-gray-400 text-sm">
//                 "Put themselves in the merchant's shoes"
//               </p>
//               <p className="text-white font-bold text-sm">Meta Inc.</p>
//             </div>
//           </div>
//         </div>

//         {/* Right Side - Graphic */}
//         <div className="w-full md:w-1/2 flex items-center justify-center">
//           <img
//             src={picImg}
//             alt="Graphic"
//             className="w-full h-auto object-contain max-w-[500px]"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Banner;

import starImg from "../assets/images/Star.png";
import profileimg from "../assets/images/boyProfile.png";
import picImg from "../assets/images/pic.png";

const Banner = () => {
  return (
    <section className="bg-[#28293E] text-white py-16 w-full font-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        {/* Left Side - Text */}
        <div className="flex flex-col w-full md:w-1/2">
          <p className="text-orange-500 font-semibold tracking-widest mb-2 text-base sm:text-base">
            MODERN STUDIO
          </p>

          <h1 className="text-6xl sm:text-5xl md:text-6xl lg:text-[72px] leading-tight md:leading-[80px] mb-6 font-bold">
            We’re He
            <span
              className="inline-block text-white px-2 py-1 sm:bg-no-repeat sm:bg-center sm:bg-contain"
              style={{
                backgroundImage:
                  window.innerWidth >= 640 ? `url(${starImg})` : "none",
              }}
            >
              lp
            </span>
            <br />
            To Build
            <br className="block sm:hidden" />
            Your Dream
            <br className="block sm:hidden" />
            Project
          </h1>

          <p className="text-gray-400 text-base sm:text-lg mb-6">
            Agency provides a full service range including technical
            <br className="hidden sm:block" />
            skills, design, business understanding.
          </p>

          <div className="flex flex-row sm:flex-row gap-4">
            <button className="bg-[#EF6D58] hover:bg-orange-600 text-white px-6 py-3 font-semibold rounded">
              HOW WE WORK
            </button>
            <button className="text-white px-6 py-3 font-semibold hover:underline">
              Contact Us
            </button>
          </div>

          <div className="flex items-center gap-4 mt-10 sm:mt-20">
            <img
              src={profileimg}
              alt="Profile"
              className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover bg-[#B550F6]"
            />
            <div>
              <p className="text-gray-400 text-sm sm:text-base">
                "Put themselves in the merchant's shoes"
              </p>
              <p className="text-white font-bold text-sm sm:text-base">
                Meta Inc.
              </p>
            </div>
          </div>
        </div>

        {/* Right Side - Graphic */}
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <img
            src={picImg}
            alt="Graphic"
            className="w-full sm:w-4/5 md:w-full max-w-[500px] h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
