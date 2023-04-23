import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Instagram from "@iconscout/react-unicons/icons/uil-instagram";
import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin";
import Twitter from "@iconscout/react-unicons/icons/uil-twitter";

function FooterSocial() {
  return (
    <div className="flex gap-8 md:gap-20">
      <span>
        <a href="#a">
          <Facebook size="52" color="white" />
        </a>
      </span>
      <span>
        <a href="#a">
          <Twitter size="52" color="white" />
        </a>
      </span>
      <span>
        <a href="#a">
          <Instagram size="52" color="white" />
        </a>
      </span>
      <span>
        <a href="#a">
          <Linkedin size="52" color="white" />
        </a>
      </span>
    </div>
  );
}

export default FooterSocial;
