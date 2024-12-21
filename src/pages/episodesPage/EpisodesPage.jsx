import EpisodeRowCard from "./components/episodeCard/EpisodeCard";
import { CommonPage } from "../../components";
import { LocationsAndEpisodesPageLayout } from "../../layouts";
import RMImage from "../../assets/rick-and-morty.png";
const EpisodesPage = () => {
  return (
    <LocationsAndEpisodesPageLayout imgSrc={RMImage}>
      <CommonPage CardComponent={EpisodeRowCard} />
    </LocationsAndEpisodesPageLayout>
  );
};

export default EpisodesPage;
