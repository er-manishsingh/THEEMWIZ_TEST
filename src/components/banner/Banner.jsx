import starIcon from "../../assets/images/banner/Star-icon.png";
import profileimg from "../../assets/images/banner/profile-img.png";
import sectionImg from "../../assets/images/banner/section-img.png";

const Banner = () => {
  return (
    <section className="bg-[#28293E] text-white py-16 w-full font-primary">
      <div className="max-w-screen-2xl mx-auto px-6 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row items-center  gap-10">
        {/* Left Side - Text */}
        <div className="flex flex-col w-full md:w-1/2">
          <p className="text-[#EF6D58] font-semibold tracking-widest mb-2 text-base sm:text-base">
            MODERN STUDIO
          </p>

          <h1 className="text-5xl sm:text-5xl md:text-5xl lg:text-[75px]  leading-tight md:leading-[80px] mb-8 font-extrabold ">
            We’re{" "}
            <span className="inline-block ">
              He
              <span
                className="relative inline-block bg-contain sm:-inset-x-6 sm:bg-no-repeat  sm:px-6 sm:py-4"
                style={{
                  backgroundImage:
                    window.innerWidth >= 640 ? `url(${starIcon})` : "none",
                }}
              >
                lp
              </span>
            </span>
            <br />
            To Build Your Dream Project
          </h1>

          <p className="text-gray-400 text-lg sm:text-xl mb-8 py-2">
            Agency provides a full service range including technical skills,
            design, business understanding.
          </p>

          <div className="flex flex-row sm:flex-row gap-4">
            <button className="bg-[#EF6D58] hover:bg-orange-600 text-white px-6 py-3 font-semibold rounded-md">
              HOW WE WORK
            </button>
            <button className="text-white px-6 py-3 font-semibold hover:underline">
              Contact Us
            </button>
          </div>

          <div className="flex items-center gap-4 mt-14 sm:mt-20">
            <img
              src={profileimg}
              alt="Profile"
              className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover bg-[#B550F6]"
            />
            <div className="">
              <p className="text-gray-400 text-lg sm:text-xl">
                "Put themselves in the merchant's shoes"
              </p>
              <p className="text-white sm:font-bold text-lg sm:text-xl">
                Meta Inc.
              </p>
            </div>
          </div>
        </div>

        {/* Right Side - Graphic */}
        <div className="w-full md:w-1/2 flex  justify-between">
          <img
            src={sectionImg}
            alt="Graphic"
            className="w-full sm:w-4/5 md:w-full  h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
