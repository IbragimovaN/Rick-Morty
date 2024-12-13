import LocationRowCard from "../LocationRowCard";
import { CommonPage } from "../Common/CommonPage";
import danceImg from "../../assets/dance.png";

const LocationsPage = () => {
  return (
    <div className="flex">
      {" "}
      <CommonPage
        CardComponent={LocationRowCard}
        classFieldListMap="flex-col"
      />
      <div className="fixed right-[300px] top-1/2 transform -translate-y-1/2">
        {" "}
        <img src={danceImg} className="w-[350px] h-auto"></img>
      </div>
    </div>
  );
};
export default LocationsPage;
