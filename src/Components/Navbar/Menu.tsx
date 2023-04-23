import { useState } from "react";

export default function Menu() {
  const [NavOpen, setNavOpen] = useState(false);

  const HandleClick = () => {
    setNavOpen((prev) => !prev);
  };

  return (
    <div className="lg:hidden">
      <div
        className={`z-40 flex flex-col gap-1 p-3 duration-300 ${
          NavOpen ? "rotate-[360deg]" : ""
        }`}
        onClick={HandleClick}
      >
        <span
          className={`h-0.5 w-6 bg-main-100 duration-300 bg-pink ${
            NavOpen ? " translate-y-1.5 rotate-45 " : ""
          } `}
        ></span>
        <span
          className={`h-0.5 w-6 bg-main-100 duration-300 bg-pink  ${
            NavOpen ? "hidden" : ""
          } `}
        ></span>
        <span
          className={`h-0.5 w-6 bg-main-100 duration-300 bg-pink ${
            NavOpen ? "-rotate-45 duration-300 ease-in-out" : ""
          } `}
        ></span>
      </div>
      <div
        className={`fixed top-0 right-0 -z-10 h-screen w-full transform  bg-slate-200 transition duration-300 ease-out dark:bg-black ${
          NavOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="mt-28  flex flex-col items-center gap-4 text-xl [&>*]:cursor-pointer hover:[&>*]:text-main-100">
          <span onClick={HandleClick}>Services</span>

          <span onClick={HandleClick}>About</span>

          <span onClick={HandleClick}>Portfolio</span>

          <span onClick={HandleClick}>Testimonials</span>

          <span onClick={HandleClick}>Contact</span>

          <span className="btn" onClick={HandleClick}>
            Hire Me
          </span>
        </div>
      </div>
    </div>
  );
}
