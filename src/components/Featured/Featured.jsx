import React from "react";
import img2 from "../../img/img2.jpeg";
import img3 from "../../img/img3.jpeg";
import img4 from "../../img/img4.jpeg";
import img5 from "../../img/img5.jpeg";
import img6 from "../../img/img6.jpeg";
import FeturedCard from "./FeturedCard";

function Featured() {
  return (
    <div className="mx-4 flex items-center justify-center md:m-8" id="featured">
      <div class="grid grid-cols-1 items-center justify-center gap-12 text-4xl md:grid-cols-2 lg:grid-cols-3">
        <div class="flex h-60 items-center border shadow-2xl">
          <div class="flex h-40 w-52 flex-col items-end justify-center bg-black pr-2 font-bold text-white">
            <span className=" pr-[5.5rem]">Our</span>
            <span>Featured</span>
          </div>
          <span className=" pt-10 pl-1 font-bold">Work</span>
        </div>

        <div class="col-span-1 shadow-xl duration-1000 ease-in md:hover:scale-110">
          <FeturedCard img={img2} />
        </div>
        <div class="col-span-1 shadow-xl duration-1000 ease-in md:hover:scale-110">
          <FeturedCard img={img3} />
        </div>
        <div class="col-span-1 shadow-xl duration-1000 ease-in md:hover:scale-110">
          <FeturedCard img={img4} />
        </div>
        <div class="col-span-1 shadow-xl duration-1000 ease-in md:hover:scale-110">
          <FeturedCard img={img5} />
        </div>
        <div class="col-span-1 shadow-xl duration-1000 ease-in md:hover:scale-110">
          <FeturedCard img={img6} />
        </div>
      </div>
    </div>
  );
}

export default Featured;
