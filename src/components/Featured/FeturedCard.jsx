import React from "react";

function FeturedCard({ img }) {
  return (
    <div className="h-60 w-80 object-cover shadow-2xl md:h-60 md:w-96">
      <img src={img} alt="" className=" h-full w-full object-cover" />
    </div>
  );
}

export default FeturedCard;
