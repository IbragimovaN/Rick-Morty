import { useFetchArray } from "../../hooks/useFetchArray";
import { LocationRowCard } from "../LocationRowCard";
import { PagesLayout } from "./PagesLayout";

export const LocationsPage = () => {
  const { arr, isLoading, error } = useFetchArray("location");

  return (
    <PagesLayout isLoading={isLoading} error={error}>
      <div className="flex-col">
        {arr.map((item) => (
          <LocationRowCard key={item.id} location={item} />
        ))}
      </div>
    </PagesLayout>
  );
};
