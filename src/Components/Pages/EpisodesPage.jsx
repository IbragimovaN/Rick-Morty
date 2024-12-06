import { useEffect } from "react";
import { EpisodeRowCard } from "../EpisodeRowCard";
import { useFetchArray } from "../../hooks/useFetchArray";
import { PagesLayout } from "./PagesLayout";

export const EpisodesPage = () => {
  const { arr, isLoading, error } = useFetchArray("episode");

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
