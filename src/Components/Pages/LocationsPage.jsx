import LocationRowCard from "../LocationRowCard";
import danceImg from "../../assets/dance.png";
import { LocationsAndEpisodesPageLayout } from "../Common/LocationsAndEpisodesPageLayout";
import { CommonPage } from "../Common/CommonPage";

const LocationsPage = () => {
  return (
    <LocationsAndEpisodesPageLayout imgSrc={danceImg}>
      <CommonPage CardComponent={LocationRowCard} />
    </LocationsAndEpisodesPageLayout>
  );
};
export default LocationsPage;
