import ContactHeader from "./ContactHeader";
import ContactLeft from "./ContactLeft";
import ContactRight from "./ContactRight";

const Contact = () => {
  return (
    <div className="mx-4 flex flex-col py-12 md:mx-24 md:py-20" id="contact">
      {/* Header */}
      <ContactHeader />
      {/* Primary section */}
      <div className="mt-20 flex flex-col gap-10 md:flex-row ">
        {/* left section */}
        <ContactLeft />
        {/* right section */}
        <ContactRight />
      </div>
    </div>
  );
};

export default Contact;
