import HeroLeft from "./HeroLeft";
import HeroRight from "./HeroRight";

function Hero() {
  return (
    <div className="mb-24 flex flex-col gap-10 px-4 md:-mt-6 md:flex-row md:gap-0 md:px-0">
      {/* left side */}
      <HeroLeft />
      {/* right side */}
      <HeroRight />
    </div>
  );
}

export default Hero;
