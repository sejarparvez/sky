import Logo from "../../img/logo.png";
import FooterLinks from "./FooterLinks";
import FooterSocial from "./FooterSocial";

function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className="mt-20 flex flex-col items-center justify-center gap-12 bg-black p-12 text-white">
      {/* social */}
      <FooterSocial />
      {/* links */}
      <FooterLinks />
      {/* logo */}
      <div className="flex flex-col items-center  gap-10 md:flex-row md:gap-4">
        <img src={Logo} alt="" className="w-16 rounded-full ring-2 ring-pink" />
        <span className="text-3xl font-bold italic">
          sky Architecture & Interior
        </span>
      </div>
      {/* copyright */}
      <div> copyright @{year}</div>
    </div>
  );
}

export default Footer;
