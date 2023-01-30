import Arrow from "@iconscout/react-unicons/icons/uil-angle-double-right";
import React from "react";

function PriceCard({ title, price, text1, text2, text3, text4 }) {
  return (
    <div>
      <div className="flex h-96 w-60 flex-col justify-center gap-10 rounded-2xl bg-black ring-2 ring-green">
        <div className="flex justify-center">
          <span className=" text-2xl font-bold text-white">{title}</span>
        </div>
        <div className="flex justify-center">
          <span className="text-4xl font-bold text-green">{price}</span>
        </div>
        <div className="flex flex-col gap-3 p-3">
          <span className="flex">
            <span>
              <Arrow color="lime" />
            </span>
            <span className=" text-gray-300">{text1}</span>
          </span>
          <span className="flex ">
            <span>
              <Arrow color="lime" />
            </span>
            <span className=" text-gray-300">{text2}</span>
          </span>
          <span className="flex ">
            <span>
              <Arrow color="lime" />
            </span>
            <span className=" text-gray-300">{text3}</span>
          </span>
          <span className="flex ">
            <span>
              <Arrow color="lime" />
            </span>
            <span className=" text-gray-300">{text4}</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default PriceCard;
