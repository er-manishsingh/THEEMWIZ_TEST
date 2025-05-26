import { useState } from "react";
import upImg from "../assets/images/faq/up.png";

const faqData = [
  {
    question: "A digital agency is a business",
    answer:
      "Digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you hit your marketing goals and grow your business.",
  },
  {
    question: "Hire to outsource your digital",
    answer:
      "Hiring a digital agency gives you access to a team of professionals with expertise in different marketing channels.",
  },
  {
    question: "Marketing efforts",
    answer:
      "These agencies create, manage, and optimize marketing strategies to reach your audience effectively.",
  },
  {
    question: "Can provide your business",
    answer:
      "They offer services like SEO, content marketing, social media, branding, and more to help your business grow.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0); // First item expanded by default

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#FDF0E9] px-6 md:px-24 py-20 grid md:grid-cols-2 gap-10">
      {/* Left side: Heading */}
      <div>
        <p className="text-[#EF6D58] tracking-widest text-lg font-medium uppercase mb-2">
          FAQ
        </p>
        <h2 className="text-3xl md:text-5xl font-extrabold text-[#2A0E03] mb-4">
          Frequently Asked <br /> Questions
        </h2>
        <p className="text-[#391400A3] text-base mb-6 tracking-wider text-">
          A digital agency is a business you hire to outsource your <br />{" "}
          digital marketing efforts, instead of handling in-house.
        </p>
        <a href="#" className="text-[#391400] font-semibold">
          Contact Us
        </a>
      </div>

      {/* Right side: Accordion */}
      <div className="bg-white rounded-lg border border-[#F3D1BF]  overflow-hidden shadow-sm">
        {faqData.map((item, index) => (
          <div
            key={index}
            className={`border-b border-[#F3D1BF] ${
              openIndex === index ? "bg-white" : "bg-[#FDF0E9]"
            } transition-all`}
          >
            <button
              onClick={() => toggleIndex(index)}
              className="flex justify-between items-center w-full px-8  py-8 text-xl font-extrabold text-[#391400] text-left"
            >
              <span>{item.question}</span>
              <img
                src={upImg}
                alt="Toggle"
                className={`w-6 h-6 transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>

            {openIndex === index && (
              <div className="px-6 pb-6 text-[#391400A3] text-base tracking-wider leading-normal">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
