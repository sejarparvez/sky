import PriceCard from "./PriceCard";
import PriceCardAdvance from "./PriceCardAdvance";

function Pricing() {
  return (
    <div className="mt-32 mb-20 flex flex-col gap-16 md:mb-40" id="pricing">
      {/* Heading */}
      <div className=" flex justify-center ">
        <div className="text-5xl font-bold italic">Pricing</div>
      </div>
      {/* Card */}
      <div className="mx-auto flex flex-col justify-center gap-12 md:flex-row">
        <div>
          <PriceCard
            title="Basic"
            price="$60"
            text1="this is text1"
            text2="this is text2"
            text3="this is text3"
            text4="this is text4"
          />
        </div>
        <div className=" md:scale-110">
          <PriceCardAdvance
            title="Advance"
            price="$100"
            text1="this is text1"
            text2="this is text2"
            text3="this is text3"
            text4="this is text4"
          />
        </div>
        <div>
          <PriceCard
            title="Modern"
            price="$80"
            text1="this is text1"
            text2="this is text2"
            text3="this is text3"
            text4="this is text4"
          />
        </div>
      </div>
    </div>
  );
}

export default Pricing;
