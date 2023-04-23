function ContactHeader() {
  return (
    <div className="flex justify-center font-bold">
      <div className="flex [&>*]:text-5xl [&>*]:leading-[1.5]">
        <span>
          Get In Touch,
          <span className=" !text-6xl text-pink"> Contact </span>
          <span>Us</span>
        </span>
      </div>
    </div>
  );
}

export default ContactHeader;
