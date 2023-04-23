import TestimonialCardList from "./TestimonialCardList";

function Testimonial() {
  return (
    <div>
      {/* Header */}
      <div className=" my-12 flex justify-center gap-3 text-[2.7rem] font-bold italic md:gap-6 md:text-6xl">
        <span>Our</span>
        <span className="text-pink">Happy</span>
        <span>Clint's</span>
      </div>
      <div className=" mx-auto flex items-center justify-center">
        <TestimonialCardList />
      </div>
    </div>
  );
}

export default Testimonial;
