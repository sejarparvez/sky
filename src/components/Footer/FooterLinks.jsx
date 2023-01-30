import React from 'react'
import { Link } from "react-scroll";

function FooterLinks() {
  return (
    <div className="grid grid-cols-2 gap-x-16 gap-y-3 text-xl font-medium md:grid-cols-6 md:gap-16 [&>*]:cursor-pointer">
    <Link spy={true} to="Home" smooth="true">
      <span>
        <li className="hover:text-pink">Home</li>
      </span>
    </Link>
    <Link spy={true} to="service" smooth="true">
      <span>
        <li className="hover:text-pink">Service</li>
      </span>
    </Link>
    <Link spy={true} to="featured" smooth="true">
      <span>
        <li className="hover:text-pink">Our Work</li>
      </span>
    </Link>
    <Link spy={true} to="pricing" smooth="true">
      <span>
        <li className="hover:text-pink">Pricing</li>
      </span>
    </Link>
    <Link spy={true} to="about" smooth="true">
      <span>
        <li className="hover:text-pink">About Us</li>
      </span>
    </Link>
    <Link spy={true} to="contact" smooth="true">
      <span>
        <li className="hover:text-pink">Contact Us</li>
      </span>
    </Link>
  </div>
  )
}

export default FooterLinks