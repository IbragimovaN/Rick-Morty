import { useEffect } from "react";
import { EpisodeRowCard } from "../EpisodeRowCard";
import { useFetchArray } from "../../hooks/useFetchArray";
import { PagesLayout } from "./PagesLayout";
import { useSearchParams } from "react-router-dom";

export const EpisodesPage = () => {
  const { arr, isLoading, error } = useFetchArray("episode");

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
          <EpisodeRowCard key={item.id} episodeObg={item} />
        ))}
      </div>
    </PagesLayout>
  );
};
