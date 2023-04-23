import React from "react";
import { Link } from "react-scroll";
import Button from "../Common/Button";

function Cta() {
  return (
    <div className="mx-4 mt-32 flex flex-col rounded-2xl bg-black px-4 py-10 text-white md:flex-row md:gap-60 md:rounded-full md:px-32">
      <div className=" flex flex-col gap-6">
        <span className=" text-4xl font-bold italic md:text-5xl">
          So What Are You Waiting For
        </span>
        <span className="text-4xl">Let's Get Started</span>
      </div>
      <div className=" mt-10 flex items-center justify-center md:mt-0 md:justify-end">
        <Link spy={true} to="contact" smooth={true}>
          <Button Name="START NOW!" />
        </Link>
      </div>
    </div>
  );
}

export default Cta;
