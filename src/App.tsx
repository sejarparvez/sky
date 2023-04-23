import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Cta from "./Components/CTA/Cta";
import Featured from "./Components/Featured/Featured";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Pricing from "./Components/Pricing/Pricing";
import Services from "./Components/Services/Services";
import Testimonial from "./Components/Testimonial/Testimonial";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <Featured />
      <Pricing />
      <About />
      <Contact />
      <Testimonial />
      <Cta />
      <Footer />
    </div>
  );
}

export default App;
