import { ReactNode } from "react";

function ServiceCard({
  icon,
  title1,
  title2,
}: {
  icon: ReactNode;
  title1: string;
  title2: string;
}) {
  return (
    <div className="flex h-48  w-40 flex-col items-center justify-center rounded-2xl bg-black p-6 text-2xl font-bold text-white shadow-2xl duration-1000 ease-in-out hover:scale-110 hover:ring-4 hover:ring-lime md:h-52 md:w-44">
      <div className=" flex flex-col items-center gap-2">
        <span className="mb-6">{icon}</span>
        <span>{title1}</span>
        <span>{title2}</span>
      </div>
    </div>
  );
}

export default ServiceCard;
