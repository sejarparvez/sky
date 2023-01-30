import React from "react";
import { Link } from "react-scroll";
import Animation from "./Animation";

function HeroLeft() {
  return (
    <div className="flex-1 py-8 md:py-16 md:px-10">
      {/* Company Name */}
      <Animation />
      {/* Hero Text */}
      <div className="flex flex-col gap-8 md:gap-10">
        <div className="flex justify-center font-bold">
          <div className="flex [&>*]:text-5xl [&>*]:leading-[1.5]">
            <span>
              Takes Your
              <span className=" !text-6xl text-pink"> Interior </span>
              <span>To The Next Level</span>
            </span>
          </div>
        </div>
        <div>
          <p>
            At "Sky Architecture & Interior" , we desing unique, stylish
            intoriors to reflect your personal taste. Contact us for a
            consultation to transform your house into a dream home. At "Sky
            Architecture & Interior" , we desing unique, stylish intoriors to
          </p>
        </div>
        <div>
          <Link spy={true} to="contact" smooth={true}>
            <div className=" flex items-center justify-center">
              <button className="btn">Lets Talk</button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeroLeft;
