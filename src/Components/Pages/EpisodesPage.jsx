import EpisodeRowCard from "../EpisodeRowCard";
import { CommonPage } from "../Common/CommonPage";
import RMImage from "../../assets/rick-and-morty.png";
import { LocationsAndEpisodesPageLayout } from "../Common/LocationsAndEpisodesPageLayout";

const EpisodesPage = () => {
  return (
    <LocationsAndEpisodesPageLayout imgSrc={RMImage}>
      <CommonPage CardComponent={EpisodeRowCard} />
    </LocationsAndEpisodesPageLayout>
  );
};

export default EpisodesPage;
