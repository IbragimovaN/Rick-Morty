import { useEffect } from "react";
import { useFetchArray } from "../../hooks/useFetchArray";
import { LocationRowCard } from "../LocationRowCard";
import { PagesLayout } from "./PagesLayout";
import { useSearchParams } from "react-router-dom";
import danceImg from "../../assets/dance.png";

export const LocationsPage = () => {
  const { arr, isLoading, error } = useFetchArray("location");

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (!searchParams.get("sortByCreate")) {
      setSearchParams({ sortByCreate: "createdASC" });
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
      <div className="fixed right-[300px] top-1/2 transform -translate-y-1/2">
        {" "}
        <img src={danceImg} className="w-[350px] h-auto"></img>
      </div>
    </PagesLayout>
  );
};
