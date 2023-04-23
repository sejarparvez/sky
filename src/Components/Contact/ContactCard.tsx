import { ReactNode } from "react";

type UserProps = { Icon: ReactNode; Title: string; Description: string };

function ContactCard({ Icon, Title, Description }: UserProps) {
  return (
    <div className="flex h-40 w-36 flex-col rounded-2xl bg-black text-white  shadow-2xl">
      <div className=" flex flex-col items-center gap-2 p-2">
        <span className="mb-4">{Icon}</span>
        <span className="font-bold">{Title}</span>
        <span className=" text-sm text-center">{Description}</span>
      </div>
    </div>
  );
}

export default ContactCard;
