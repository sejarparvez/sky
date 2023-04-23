import ServicesCardList from "./ServicesCardList";

function Services() {
  return (
    <div
      className="my-20 flex flex-col items-center justify-center gap-10 md:mt-4 md:mb-40 md:gap-20"
      id="service"
    >
      <div className=" mx-4 text-5xl font-bold italic">
        This Is What We Do For Our Beloved Customers
      </div>
      <ServicesCardList />
    </div>
  );
}

export default Services;
