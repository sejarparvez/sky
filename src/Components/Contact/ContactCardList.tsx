import Email from "@iconscout/react-unicons/icons/uil-location-arrow";
import Location from "@iconscout/react-unicons/icons/uil-location-point";
import Call from "@iconscout/react-unicons/icons/uil-phone";
import WhatsApp from "@iconscout/react-unicons/icons/uil-whatsapp";
import Card from "./ContactCard";

function ContactCardList() {
  return (
    <div className="mx-auto grid grid-cols-2 gap-4">
      <div className="flex items-center justify-center">
        <Card
          Icon={<Location color="lime" size="32" />}
          Title="Office"
          Description="Sher-e Bangla Road Jhenaidah"
        />
      </div>

      <div className="flex items-center justify-center">
        <Card
          Icon={<Email color="lime" size="32" />}
          Title="Email"
          Description="skyarchitecture
                interior@gmail.com"
        />
      </div>
      <div className="flex items-center justify-center">
        <Card
          Icon={<Call color="lime" size="32" />}
          Title="Phone"
          Description="01886-191086"
        />
      </div>
      <div className="flex items-center justify-center">
        <Card
          Icon={<WhatsApp color="lime" size="32" />}
          Title="WhatsApp"
          Description="01886-191086"
        />
      </div>
    </div>
  );
}

export default ContactCardList;
