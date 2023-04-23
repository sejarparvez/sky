type userProps = { Img: string; Title: string; Description: string };

function Card({ Img, Title, Description }: userProps) {
  return (
    <div className="flex h-60 w-40 flex-col items-center justify-center gap-4 rounded-2xl bg-black p-4 font-medium shadow-2xl duration-1000 ease-in-out hover:ring-4 md:w-52 md:hover:scale-110 md:hover:ring-pink">
      <img
        src={Img}
        alt=""
        className="mb-4 h-16 w-16 rounded-full ring-2 ring-pink"
      />
      <span className="text-2xl text-white">{Title}</span>
      <span className="text-gray-300">{Description}</span>
    </div>
  );
}

export default Card;
