import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Cta from "./components/CTA/Cta";
import Fetured from "./components/Featured/Featured";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Pricing from "./components/Pricing/Pricing";
import Services from "./components/Services/Services";
import Testimonial from "./components/Testimonial/Testimonial";

export default function App() {
  return (
    <div className=" overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services />
      <Fetured />
      <Pricing />
      <About />
      <Contact />
      <Testimonial />
      <Cta />
      <Footer />
    </div>
  );
}
