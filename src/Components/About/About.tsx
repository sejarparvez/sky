import { Link } from "react-scroll";
import img6 from "../../img/img8.jpeg";

function About() {
  return (
    <div
      className="mx-4 mb-10 flex flex-col md:my-20 md:mx-28 md:flex-row"
      id="about"
    >
      {/* left side */}
      <div className="flex flex-col justify-center gap-8 bg-black p-8 md:flex-1">
        <span className=" text-3xl font-bold text-white">About Us</span>
        <span className="text-gray-200">
          "Welcome to our world of interior design, where we bring your personal
          style to life. With years of experience and a keen eye for detail, our
          team of experts is dedicated to creating spaces that are not only
          beautiful, but functional and reflective of your unique personality.
          From modern minimalist to traditional elegance, we strive to create a
          home that is tailored to you. Let us turn your design dreams into a
          reality, contact us today to schedule a consultation."
        </span>
        <Link spy={true} to="contact" smooth={true}>
          <button className="btn !bg-white !text-black">Contact Us</button>
        </Link>
      </div>
      {/* right side */}
      <div className="md:flex-2 flex">
        <img src={img6} className="md:h-[28rem] md:w-[43rem]" alt="" />
      </div>
    </div>
  );
}

export default About;
