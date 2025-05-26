import mapImg from "../assets/images/contact/map.png";
import pinImg from "../assets/images/contact/pin.png";

const Contact = () => {
  return (
    <section className="relative h-[90vh] w-full">
      {/* Static Map Background */}
      <div className="absolute inset-0">
        <img
          src={mapImg}
          alt="Map Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Pin Icon */}
      <div className="absolute top-1/2 right-[20%] transform -translate-y-1/2 z-10">
        <img src={pinImg} alt="Location Pin" className="w-10 h-10" />
      </div>

      {/* Contact Form (Left Centered) */}
      <div className="absolute top-1/2 left-6 md:left-20 transform -translate-y-1/2 z-20">
        <div className="bg-white rounded-lg shadow-xl p-8 w-[90%] md:w-[400px]">
          <h2 className="text-2xl font-bold text-[#2A0E03] mb-6">
            Get In Touch
          </h2>
          <form className="space-y-4">
            <input
              type="email"
              placeholder="Your email"
              className="w-full border border-[#F3D1BF] rounded-md px-4 py-2 text-sm focus:outline-none focus:border-[#EF6D58]"
            />
            <select
              className="w-full border border-[#F3D1BF] rounded-md px-4 py-2 text-sm text-[#391400A3] focus:outline-none focus:border-[#EF6D58]"
              defaultValue=""
            >
              <option value="" disabled hidden>
                Subject
              </option>
              <option value="support">Support</option>
              <option value="carrier">Carrier</option>
              <option value="general">General</option>
            </select>

            <textarea
              rows="4"
              placeholder="Message"
              className="w-full border border-[#F3D1BF] rounded-md px-4 py-2 text-sm focus:outline-none focus:border-[#EF6D58] resize-none"
            ></textarea>
            <div className="flex justify-end">
              <button
                type="submit"
                className="w-36 bg-[#EF6D58] text-white py-3 text-sm font-semibold rounded-md hover:bg-[#e85d48] transition-all"
              >
                SUBMIT NOW
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
