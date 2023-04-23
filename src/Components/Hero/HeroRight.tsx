import NumberCounter from "number-counter";
import React from "react";
import Img1 from "../../img/img1.jpeg";

function HeroRight() {
  return (
    <div className="flex flex-1 flex-col">
      {/* Number Counter */}
      <div className="mb-20 flex justify-center gap-8 md:m-10">
        <div className="flex flex-col items-center gap-5">
          <span className=" text-[1.5rem]  font-bold text-pink md:text-[2rem]">
            <NumberCounter end={4} start={0} delay={4} />
          </span>
          <span className=" font-bold uppercase">Running Projects</span>
        </div>
        <div className="flex flex-col gap-5">
          <span className=" flex justify-center text-[1.5rem] font-bold text-pink md:text-[2rem]">
            <NumberCounter end={50} start={10} delay={4} postFix="+" />
          </span>
          <span className=" font-bold uppercase">Total Projects </span>
        </div>
      </div>
      <img src={Img1} alt="" className=" w-[40rem]" />
    </div>
  );
}

export default HeroRight;