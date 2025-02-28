import EpisodeRowCard from "../EpisodeRowCard";
import { CommonPage } from "../Common/CommonPage";
import RMImage from "../../assets/rick-and-morty.png";

const EpisodesPage = () => {
  return (
    <div className="flex">
      <CommonPage
        CardComponent={EpisodeRowCard}
        classFieldListMap="flex-col w-[500px]"
      />
      <div className="fixed right-[300px] top-1/2 transform -translate-y-1/2">
        {" "}
        <img src={RMImage} className="w-[350px] h-auto"></img>
      </div>
    </div>
  );
};

export default EpisodesPage;
