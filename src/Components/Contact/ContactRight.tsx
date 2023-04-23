import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { toast } from "react-hot-toast";

interface ErrorState {
  userName: string;
  userEmail: string;
  message: string;
}

function ContactRight() {
  const form = useRef<HTMLFormElement>(null);

  const [error, setError] = useState<ErrorState>({
    userName: "",
    userEmail: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (form.current?.checkValidity() === false) {
      setError({
        userName: form.current.user_name.value === "" ? "Name is required" : "",
        userEmail:
          form.current.user_email.value === "" ? "Email is required" : "",
        message: form.current.massage.value === "" ? "Message is required" : "",
      });
    } else {
      toast.loading("Sending Message...");
      emailjs
        .sendForm(
          "service_4ht1iup",
          "template_xaj423d",
          form.current,
          "Ze-dexfZq0VovnJB-"
        )
        .then(
          (result: string) => {
            toast.dismiss();
            toast.success("Your message has been delivered successfully");
          },
          (error: string) => {
            toast.dismiss();
            toast.error(
              "Message sending failed, check your internet connection"
            );
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
        {error.message !== "" && (
          <p className="text-red-500">{error.message}</p>
        )}
        <input
          type="submit"
          value="Send Message"
          className="bg-black text-white h-10 w-32 rounded-lg ring-2 ring-lime font-bold focus:ring-4"
        />
      </form>
    </div>
  );
}

export default ContactRight;
