import React from "react";
import { Link } from "react-scroll";

function NavLinks() {
  return (
    <div className="hidden items-center gap-12 lg:flex [&>*]:cursor-pointer">
      <Link spy={true} to="service" smooth={true}>
        <li className=" hover:text-pink">Service</li>
      </Link>
      <Link spy={true} to="featured" smooth={true}>
        <li className=" hover:text-pink">Featured Work</li>
      </Link>
      <Link spy={true} to="pricing" smooth={true}>
        <li className=" hover:text-pink">Pricing</li>
      </Link>
      <Link spy={true} to="about" smooth={true}>
        <li className=" hover:text-pink">About Us</li>
      </Link>

      <Link spy={true} to="contact" smooth={true}>
        <li className=" hover:text-pink">Contact Us</li>
      </Link>

      <span className="text-pink">||</span>
      <div className="text-green">
        <a href="tel:+8801886191086">01886-191086</a>
      </div>
    </div>
  );
}

export default NavLinks;
