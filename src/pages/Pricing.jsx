import plusImg from "../assets/images/pricing/plus.png";
import minusImg from "../assets/images/pricing/minus.png";

const Pricing = () => {
  const plans = [
    {
      title: "Consultation",
      price: "Free",
      description: [
        "Your digital marketing efforts,",
        "instead of handling in-house.",
      ],
      features: ["Brand Design", "Market Analysis", "Production"],
      highlights: [true, false, false],
      featured: false,
    },
    {
      title: "Design",
      price: "$1500",
      description: [
        "Provide your business with a variety,",
        " of digital solutions to promote.",
      ],
      features: ["Brand Design", "Market Analysis", "Production"],
      highlights: [true, true, false],
      featured: true,
    },
    {
      title: "Design + Code",
      price: "$2900",
      description: [
        "Help you hit your marketing goals and",
        " grow your business.",
      ],
      features: ["Brand Design", "Market Analysis", "Production"],
      highlights: [true, true, true],
      featured: false,
    },
  ];

  return (
    <section className="bg-[#FDF0E9] py-16 px-4 sm:px-8 md:px-24 overflow-x-hidden">
      <div className="text-left mb-12 sm:mb-16">
        <p className="text-[#F38264] tracking-widest text-sm font-medium uppercase">
          Pricing
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#2A0E03] mt-3 leading-tight">
          Check Our <br /> Pricing Plans
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3  items-stretch">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`relative flex flex-col justify-between rounded-xl border p-6 sm:p-8 transition-all duration-300 min-h-[480px] ${
              plan.featured
                ? "bg-white shadow-xl md:scale-105 md:z-10 scale-100 z-0 border-[#F38264]   "
                : "bg-[#FDF0E9] border-[#F3D1BF]"
            }`}
          >
            {plan.featured && (
              <div className="absolute top-5 left-6 bg-[#EF6D58] text-white text-xs sm:text-base tracking-wider font-semibold px-5 py-1.5 rounded-full shadow">
                Popular
              </div>
            )}

            <div className="mt-8">
              <h3 className="text-[#F38264] text-xs sm:text-sm font-semibold uppercase tracking-wider mb-4">
                {plan.title}
              </h3>
              <p className="text-3xl sm:text-4xl font-bold text-[#2A0E03] mb-5">
                {plan.price}
              </p>
              <div className="text-[#391400A3] tracking-wide text-sm sm:text-base mb-8 leading-relaxed">
                {Array.isArray(plan.description)
                  ? plan.description.map((line, i) => <p key={i}>{line}</p>)
                  : plan.description}
              </div>

              <ul className="space-y-5">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div
                      className={`w-5 h-5 flex items-center justify-center rounded-full ${
                        plan.highlights[i]
                          ? "bg-[#F38264]"
                          : "border border-gray-300 bg-white"
                      }`}
                    >
                      {plan.highlights[i] ? (
                        <img src={plusImg} alt="Included" />
                      ) : (
                        <img src={minusImg} alt="Not included" />
                      )}
                    </div>
                    <span
                      className={`text-xs sm:text-sm ${
                        plan.highlights[i]
                          ? "text-[#2A0E03] font-medium"
                          : "text-gray-400"
                      }`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              className={`mt-8 w-40 sm:w-40 text-center py-3 rounded-md font-bold text-sm sm:text-base transition-all ${
                plan.featured
                  ? "bg-[#EF6D58] text-white hover:bg-[#e36c50]"
                  : "bg-white text-[#2A0E03] border border-[#2A0E03] hover:bg-[#F3D1BF]"
              } self-start`}
            >
              Contact Us
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
