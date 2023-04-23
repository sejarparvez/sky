import Arrow from "@iconscout/react-unicons/icons/uil-angle-double-right";

type UserProps = {
  title: string;
  price: string;
  text1: string;
  text2: string;
  text3: string;
  text4: string;
};

function PriceCardAdvance({
  title,
  price,
  text1,
  text2,
  text3,
  text4,
}: UserProps) {
  return (
    <div className="relative overflow-hidden rounded-2xl ring-2 ring-lime">
      <div className="absolute top-8 -left-9 h-7 w-40 -rotate-45 bg-lime"></div>

      <div>
        <div className="flex h-96 w-60 flex-col justify-center gap-10 bg-black ">
          <div className="flex justify-center">
            <span className=" text-2xl font-bold text-white">{title}</span>
          </div>
          <div className="flex justify-center">
            <span className="text-4xl font-bold text-lime">{price}</span>
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
    </div>
  );
}

export default PriceCardAdvance;
