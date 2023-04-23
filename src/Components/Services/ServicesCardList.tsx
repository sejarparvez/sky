import Icon6 from "@iconscout/react-unicons/icons/uil-analytics";
import Icon2 from "@iconscout/react-unicons/icons/uil-building";
import Icon3 from "@iconscout/react-unicons/icons/uil-cube";
import Icon1 from "@iconscout/react-unicons/icons/uil-home";
import Icon4 from "@iconscout/react-unicons/icons/uil-paint-tool";
import Icon5 from "@iconscout/react-unicons/icons/uil-palette";
import ServiceCard from "./ServiceCard";

function ServicesCardList() {
  return (
    <div className=" grid grid-cols-2 items-center justify-center gap-3 md:grid-cols-3 lg:grid-cols-6 lg:gap-6">
      <div>
        <ServiceCard
          icon={<Icon4 color="lime" size="40" />}
          title1="Interior"
          title2="Design"
        />
      </div>
      <div>
        <ServiceCard
          icon={<Icon1 color="lime" size="40" />}
          title1="Exterior"
          title2="Design"
        />
      </div>
      <div>
        <ServiceCard
          icon={<Icon2 color="lime" size="40" />}
          title1="Architectural"
          title2="Design"
        />
      </div>
      <div>
        <ServiceCard
          icon={<Icon6 color="lime" size="40" />}
          title1="Structure"
          title2="Design"
        />
      </div>
      <div>
        <ServiceCard
          icon={<Icon5 color="lime" size="40" />}
          title1="Illustration"
          title2="Rendering"
        />
      </div>
      <div>
        <ServiceCard
          icon={<Icon3 color="lime" size="40" />}
          title1="3D-Design"
          title2="Modeling"
        />
      </div>
    </div>
  );
}

export default ServicesCardList;
