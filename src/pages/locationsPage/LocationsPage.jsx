import LocationRowCard from "./components/locationCard/LocationCard";
import { LocationsAndEpisodesPageLayout } from "../../layouts";
import { CommonPage } from "../../components";
import danceImg from "../../assets/dance.png";

const LocationsPage = () => {
  return (
    <LocationsAndEpisodesPageLayout imgSrc={danceImg}>
      <CommonPage CardComponent={LocationRowCard} />
    </LocationsAndEpisodesPageLayout>
  );
};
export default LocationsPage;
