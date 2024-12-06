import { useEffect } from "react";
import { useFetchArray } from "../../hooks/useFetchArray";
import { LocationRowCard } from "../LocationRowCard";
import { PagesLayout } from "./PagesLayout";
import { useSearchParams } from "react-router-dom";

export const LocationsPage = () => {
  const { arr, isLoading, error } = useFetchArray("location");

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (!searchParams.get("sortByCreate")) {
      setSearchParams({ sortByCreate: "createdDESC" });
    }
    return searchParams.delete("sortByCreate");
  }, [searchParams, setSearchParams]);

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
