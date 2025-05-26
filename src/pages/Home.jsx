import About from "./About";
import Banner from "./Banner";
import Contact from "./Contact";
import Faq from "./Faq";
import Portfolio from "./Portfolio";
import Pricing from "./Pricing";

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
