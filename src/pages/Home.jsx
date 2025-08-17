import About from "../components/About/About";
import Banner from "../components/banner/Banner";
import Portfolio from "../components/portfolio/Portfolio";
import Pricing from "../components/pricing/Pricing";
import Faq from "../components/faq/Faq";
import Contact from "../components/contact/Contact";

function Home() {
  return (
    <>
      <Banner />
      <About />
      <Portfolio />
      <Pricing />
      <Faq />
      <Contact />
    </>
  );
}

export default Home;
