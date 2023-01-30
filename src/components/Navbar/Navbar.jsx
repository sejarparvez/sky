import React from "react";
import { Link } from "react-scroll";
import Logo from "../../img/logo.png";

import Menu from "./Menu";
import NavLinks from "./NavLinks";

export default function Navbar() {
  return (
    <div
      className=" z-50 w-screen items-center justify-center border-b-2 border-green bg-black px-8 py-4 font-bold text-white md:px-16"
      id="Home"
    >
      <div className="flex  justify-between">
        <Link spy={true} to="Home" smooth={true}>
          <div className="flex cursor-pointer items-center gap-4">
            <img
              src={Logo}
              className=" m-1 h-12 w-12 rounded-full border-2 border-pink"
              alt=""
            />
            <span className="font-serif text-3xl"> S𝒦𝒴</span>
          </div>
        </Link>
        <NavLinks />
        <div className="mt-5 items-center md:hidden">
          <Menu />
        </div>
      </div>
    </div>
  );
}
