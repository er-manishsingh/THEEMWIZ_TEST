import digitalImg from "../../assets/images/about/digitalside.png";
import vortexImg from "../../assets/images/about/vortex.png";
import travelImg from "../../assets/images/about/travel.png";
import fuzionImg from "../../assets/images/about/fuzion.png";
import mediaImg from "../../assets/images/about/media.png";
import picImg from "../../assets/images/about/pic.png";
import videoImg from "../../assets/images/about/videoimg.png";
import playImg from "../../assets/images/about/videoplay.png";
import timeImg from "../../assets/images/about/videotime.png";

const About = () => {
  return (
    <section className="bg-[#FDF0E9]">
      <div className="max-w-screen-2xl w-full mx-auto">
        {/* Top Partner Logos */}
        <PartnerLogos />
        <AboutContent />
        <Stats />
        <Services />
        <Videos />
      </div>
    </section>
  );
};

export default About;

const PartnerLogos = () => {
  return (
    <div className="py-8">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 sm:-mx-10 items-center justify-items-center mx-auto mb-8">
        <img
          src={digitalImg}
          alt="Digitalside"
          className="h-10 sm:h-10 md:h-12 object-contain max-w-[120px] "
        />
        <img
          src={vortexImg}
          alt="Vortex"
          className="h-8 sm:h-10 md:h-12 object-contain max-w-[120px]"
        />
        <img
          src={travelImg}
          alt="Travel Explorer"
          className="h-10 sm:h-10 md:h-12 object-contain max-w-[120px]"
        />
        <img
          src={fuzionImg}
          alt="FUZION"
          className="h-7 sm:h-10 md:h-12 object-contain max-w-[120px]"
        />
        <img
          src={mediaImg}
          alt="MediaFury"
          className="h-8 sm:h-10 md:h-12 col-span-2  md:col-start-5 object-contain max-w-[120px]"
        />
      </div>

      {/* Bottom line */}
      <hr className="border-t border-[#F3D1BF] w-[85%] sm:w-[95%] mx-auto " />
    </div>
  );
};

const AboutContent = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-20 px-6 sm:px-8 lg:px-8 py-12">
      {/* Left Side Image */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <img
          src={picImg}
          alt="Combined Visual"
          className="w-full lg:max-w-full object-contain"
        />
      </div>

      {/* Right Side Content */}
      <div className="w-full lg:w-1/2 space-y-6 sm:space-y-10 text-left">
        <p className="text-sm sm:text-xl text-[#EF6D58] tracking-widest  uppercase font-medium">
          About
        </p>
        <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-[#391400] leading-tight">
          An Experience Design Agency
        </h2>
        <p className="text-[#391400] text-lg sm:text-3xl font-medium">
          Provides a full service range.
        </p>
        <p className="text-[#391400A3] text-lg sm:text-2xl leading-relaxed">
          Ability to put themselves in the merchant’s shoes. It is meant to
          partner for the long run, and work as an extension of the merchant’s
          team.
        </p>
        <button className="bg-white text-[#1e1e1e] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition shadow-lg">
          ABOUT US
        </button>
      </div>
    </div>
  );
};

const Stats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 mt-8 px-6 sm:px-8 lg:px-8 border rounded-lg overflow-hidden">
      {/* Stat 1 */}
      <div className="border border-[#F3D1BF] p-6 text-left">
        <h3 className="text-3xl text-[#391400] font-black">42%</h3>
        <p className="text-base text-[#391400] mt-4 tracking-widest">
          Years of experience
        </p>
      </div>

      {/* Stat 2 */}
      <div className="border border-[#F3D1BF] p-6 text-left">
        <h3 className="text-3xl text-[#391400] font-extrabold">73+</h3>
        <p className="text-base text-[#391400] mt-4 tracking-widest">
          Agency members
        </p>
      </div>

      {/* Stat 3 */}
      <div className="border border-[#F3D1BF] p-6 text-left">
        <h3 className="text-3xl text-[#391400] font-extrabold">5,000</h3>
        <p className="text-base text-[#391400] mt-4 tracking-widest">
          Projects complete
        </p>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <div className="py-12 sm:py-16 md:py-20 px-6 sm:px-6 lg:px-8">
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start ">
        {/* Left Side */}
        <div className="space-y-6 text-left mx-auto md:mx-0">
          <p className="text-sm text-[#EF6D58] tracking-widest uppercase font-medium">
            How we work
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#391400]  sm:leading-tight">
            Making Your Projects Look Awesome
          </h2>
          <p className="text-[#391400A3] text-lg sm:text-xl leading-relaxed mx-auto">
            Technical skills, design, business understanding, ability to put
            themselves in the merchant's shoes.
          </p>
          <p className="text-base font-semibold text-[#391400] cursor-pointer hover:text-[#EF6D58] transition-colors ">
            Read More
          </p>
        </div>

        {/* Right Side - Steps */}
        <div className="space-y-8 mx-auto sm:space-y-8 mt-12">
          <div className="flex items-start gap-6 sm:gap-10">
            <span className="text-5xl sm:text-6xl font-black text-[#391400]  flex justify-center">
              1
            </span>
            <p className="text-[#391400] text-xl sm:text-2xl font-extrabold sm:mt-4">
              Full service range including
            </p>
          </div>
          <div className="flex items-start gap-6 sm:gap-10">
            <span className="text-5xl sm:text-6xl font-black text-[#391400] flex justify-center">
              2
            </span>
            <p className="text-[#391400] text-xl sm:text-2xl font-extrabold sm:mt-4">
              Technical skills, design, business
            </p>
          </div>
          <div className="flex items-start gap-6 sm:gap-10">
            <span className="text-5xl sm:text-6xl font-black text-[#391400] flex justify-center">
              3
            </span>
            <p className="text-[#391400] text-xl sm:text-2xl font-extrabold sm:mt-4">
              Themselves in the merchant's
            </p>
          </div>
        </div>
      </div>

      {/* Separator Line */}
      <hr className="h-0.5 bg-[#F3D1BF] mt-14" />
    </div>
  );
};

const Videos = () => {
  return (
    <div className="px-6 sm:px-6 lg:px-8" style={{ paddingTop: '1.5rem', paddingBottom: '5.5rem' }}>
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20  mx-auto">
        {/* Video Thumbnail */}
        <div className="relative w-full lg:w-1/2 rounded-lg overflow-hidden">
          <img
            src={videoImg}
            alt="Video Thumbnail"
            className="w-full h-auto object-cover rounded-lg"
          />

          {/* Play Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <img
              src={playImg}
              alt="Play Button"
              className="w-16 sm:w-20 hover:scale-105 transition-transform duration-200"
            />
          </div>

          {/* Video Duration Label */}
          <div className="absolute bottom-3 left-3">
            <img src={timeImg} alt="Video Duration" className="w-auto h-6" />
          </div>
        </div>

        {/* Video Text Content */}
        <div className="w-full lg:w-1/2 text-left space-y-8 ">
          <p className="text-base  text-[#EF6D58] uppercase tracking-widest font-medium">
            Video Reel
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#391400] leading-snug">
            Unlock The Greatest Value Possible
          </h2>
          <p className="text-[#391400A3] text-base sm:text-lg leading-relaxed">
            Design, business understanding, and the ability to put themselves in
            the merchant’s shoes meant to partner.
          </p>
        </div>
      </div>
    </div>
  );
};
