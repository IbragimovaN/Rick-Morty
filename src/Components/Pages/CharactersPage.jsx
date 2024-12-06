import { CharsterCard } from "../CharsterCard";
import { useFetchArray } from "../../hooks/useFetchArray";
import { PagesLayout } from "./PagesLayout";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

export const CharactersPage = () => {
  const { arr, isLoading, error } = useFetchArray("characters");

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (!searchParams.get("sortByCreate")) {
      setSearchParams({ sortByCreate: "createdDESC" });
    }
    return searchParams.delete("sortByCreate");
  }, [searchParams, setSearchParams]);

  return (
    <PagesLayout isLoading={isLoading} error={error}>
      <div className="grid gap-4 grid-cols-3 grid-rows-3">
        {arr.map((item) => (
          <CharsterCard key={item.id} character={item} />
        ))}
      </div>
    </PagesLayout>
  );
};
