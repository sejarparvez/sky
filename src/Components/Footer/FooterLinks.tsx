import { Link } from "react-scroll";

function FooterLinks() {
  return (
    <div className="grid grid-cols-2 gap-x-16 gap-y-3 text-xl font-medium md:grid-cols-6 md:gap-16 [&>*]:cursor-pointer">
      <Link spy={true} to="Home" smooth="true">
        <span className="hover:text-pink">Home</span>
      </Link>
      <Link spy={true} to="service" smooth="true">
        <span className="hover:text-pink">Service</span>
      </Link>
      <Link spy={true} to="featured" smooth="true">
        <span className="hover:text-pink">Our Work</span>
      </Link>
      <Link spy={true} to="pricing" smooth="true">
        <span className="hover:text-pink">Pricing</span>
      </Link>
      <Link spy={true} to="about" smooth="true">
        <span className="hover:text-pink">About Us</span>
      </Link>
      <Link spy={true} to="contact" smooth="true">
        <span className="hover:text-pink">Contact Us</span>
      </Link>
    </div>
  );
}

export default FooterLinks;
