import socialIcons from "../assets/images/footer/social.png";

const Footer = () => {
  return (
    <footer className="bg-[#FDF0E9] px-6 sm:px-12 md:px-24 py-16">
      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-14">
        {/* Agency Branding */}
        <div className="flex justify-center md:justify-start">
          <h3 className="text-3xl font-extrabold text-[#391400]">Agency</h3>
        </div>

        {/* Menu Links */}
        <div className="text-center md:text-left">
          <h4 className="text-[#EF6D58] uppercase text-lg font-semibold tracking-wider mb-8">
            Menu
          </h4>
          <ul className="space-y-2 text-[#391400] font-medium text-base">
            <li className="cursor-pointer hover:text-[#EF6D58]">About</li>
            <li className="cursor-pointer hover:text-[#EF6D58]">Services</li>
            <li className="cursor-pointer hover:text-[#EF6D58]">Blog</li>
            <li className="cursor-pointer hover:text-[#EF6D58]">Contact</li>
          </ul>
        </div>

        {/* Service Links */}
        <div className="text-center md:text-left">
          <h4 className="text-[#EF6D58] uppercase text-lg font-semibold tracking-wider mb-8">
            Service
          </h4>
          <ul className="space-y-2 text-[#391400] font-medium text-base">
            <li className="cursor-pointer hover:text-[#EF6D58]">Design</li>
            <li className="cursor-pointer hover:text-[#EF6D58]">Development</li>
            <li className="cursor-pointer hover:text-[#EF6D58]">Marketing</li>
            <li className="cursor-pointer hover:text-[#EF6D58]">See More</li>
          </ul>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center md:justify-end items-center">
          <img
            src={socialIcons}
            alt="Social Media Icons"
            className="w-32 sm:w-36 h-auto"
          />
        </div>
      </div>

      {/* Divider */}
      <hr className="border-t border-[#F3D1BF] mb-6" />

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between items-center text-[#391400A3] text-sm gap-3">
        <p className="text-center md:text-left">
          Copyright © 2022 Laaqiq. All Rights Reserved.
        </p>
        <div className="flex gap-6">
          <span className="text-[#391400] cursor-pointer hover:text-[#EF6D58]">
            Terms of Use
          </span>
          <span className="text-[#391400] cursor-pointer hover:text-[#EF6D58]">
            Privacy Policy
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
