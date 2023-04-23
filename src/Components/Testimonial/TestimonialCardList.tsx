import Person1 from "../../img/person1.jpg";
import Person2 from "../../img/person2.jpg";
import Person3 from "../../img/person3.jpg";
import Card from "./TestimonialCard";

function TestimonialCardList() {
  return (
    <div className="grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-8 lg:grid-cols-5">
      <div className="my-8 flex items-center justify-center gap-12">
        <Card Img={Person1} Title="Arjun Biswas" Description="Bank Manager" />
      </div>
      <div className="my-8 flex items-center justify-center gap-12">
        <Card Img={Person2} Title="Mamun Babor" Description="Sub Register" />
      </div>
      <div className="my-8 flex items-center justify-center gap-12">
        <Card Img={Person3} Title="Dr. Alauddin" Description="Jr. Consultent" />
      </div>
      <div className="my-8 flex items-center justify-center gap-12">
        <Card Img={Person1} Title="Dr. Monirul" Description="Psychiatrist" />
      </div>
      <div className="my-8 flex items-center justify-center gap-12">
        <Card Img={Person3} Title="Dr. Zahid" Description="Sr. Consultent" />
      </div>
    </div>
  );
}

export default TestimonialCardList;
