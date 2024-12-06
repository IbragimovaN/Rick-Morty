import { CharsterCard } from "../CharsterCard";
import { useFetchArray } from "../../hooks/useFetchArray";
import { PagesLayout } from "./PagesLayout";

export const CharactersPage = () => {
  const { arr, isLoading, error } = useFetchArray("characters");

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
