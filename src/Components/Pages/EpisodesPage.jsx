import { useEffect } from "react";
import { EpisodeRowCard } from "../EpisodeRowCard";
import { useFetchArray } from "../../hooks/useFetchArray";
import { PagesLayout } from "./PagesLayout";
import { useSearchParams } from "react-router-dom";
import RMImage from "../../assets/rick-and-morty.png";

export const EpisodesPage = () => {
  const { arr, isLoading, error } = useFetchArray("episode");

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (!searchParams.get("sortByCreate")) {
      setSearchParams({ sortByCreate: "createdASC" });
    }
    return searchParams.delete("sortByCreate");
  }, [searchParams, setSearchParams]);

  return (
    <PagesLayout isLoading={isLoading} error={error}>
      <div>
        {" "}
        <div className="flex-col w-[500px]">
          {arr.map((item) => (
            <EpisodeRowCard key={item.id} episodeObg={item} />
          ))}
        </div>
        <div className="fixed right-[300px] top-1/2 transform -translate-y-1/2">
          {" "}
          <img src={RMImage} className="w-[350px] h-auto"></img>
        </div>
      </div>
    </PagesLayout>
  );
};
