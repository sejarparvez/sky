import emailjs from "@emailjs/browser";

import React, { useRef, useState } from "react";

function ContactRight() {
  const form = useRef();

  const [error, setError] = useState({
    userName: "",
    userEmail: "",
    massage: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.current.checkValidity() === false) {
      setError({
        userName: form.current.user_name.value === "" ? "Name is required" : "",
        userEmail:
          form.current.user_email.value === "" ? "Email is required" : "",
        massage: form.current.massage.value === "" ? "Message is required" : "",
      });
    } else {
      emailjs
        .sendForm(
          "service_4ht1iup",
          "template_xaj423d",
          form.current,
          "Ze-dexfZq0VovnJB-"
        )
        .then(
          (result) => {
            alert("Your message has been successfully delivered");
          },
          (error) => {
            alert("Message sending failed, check your internet connection");
          }
        );
    }
  };

  return (
    <div className="mt-14 flex flex-1 items-center justify-center md:mt-0">
      <form
        className="flex flex-col items-center gap-8 md:gap-12"
        ref={form}
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="user_name"
          required
          className="text-md h-12 w-[18rem] rounded-md border-[2px] border-solid border-black p-2 outline-none md:h-14 md:w-[25rem]"
          placeholder="Name"
        />
        {error.userName !== "" && (
          <p className="text-red-500">{error.userName}</p>
        )}
        <input
          type="email"
          name="user_email"
          required
          className="text-md h-12 w-[18rem] rounded-md border-[2px] border-solid border-black p-2 outline-none md:h-14 md:w-[25rem]"
          placeholder="Email"
        />
        {error.userEmail !== "" && (
          <p className="text-red-500">{error.userEmail}</p>
        )}
        <textarea
          name="massage"
          required
          className="text-md h-28 w-[18rem] rounded-md border-[2px] border-solid border-black p-2 text-black outline-none md:h-28 md:w-[25rem]"
          placeholder="Message"
        />
        {error.massage !== "" && (
          <p className="text-red-500">{error.massage}</p>
        )}
        <input type="submit" value="Send Message" className="btn" />
      </form>
    </div>
  );
}

export default ContactRight;
