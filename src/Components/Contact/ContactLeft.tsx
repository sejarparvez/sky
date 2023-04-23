import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Instagram from "@iconscout/react-unicons/icons/uil-instagram";
import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin";
import Twitter from "@iconscout/react-unicons/icons/uil-twitter";
import ContactCardList from "./ContactCardList";

function ContactLeft() {
  return (
    <div className="flex flex-1 flex-col gap-8 ">
      <div className="flex flex-col">
        <ContactCardList />

        <div className="mx-auto mt-16 flex gap-8">
          <span>
            <a href="#a">
              <Facebook size="52" color="black" />
            </a>
          </span>
          <span>
            <a href="#a">
              <Twitter size="52" color="black" />
            </a>
          </span>
          <span>
            <a href="#a">
              <Instagram size="52" color="black" />
            </a>
          </span>
          <span>
            <a href="#a">
              <Linkedin size="52" color="black" />
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default ContactLeft;
