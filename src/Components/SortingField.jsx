import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

export const SortingField = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  // useEffect(() => {
  //   if (!searchParams.get("sortByCreate")) {
  //     setSearchParams({ sortByCreate: "createdDESC" });
  //   }
  // }, [searchParams, setSearchParams]);

  const handleSortChange = (event) => {
    setSearchParams({ sortByCreate: event.target.value });
  };

  return (
    <label>
      Sort by creation date
      <select onChange={(e) => handleSortChange(e)}>
        <option value="createdDESC">Newest to Oldest</option>
        <option value="createdASC">Oldest to Newest</option>
      </select>
    </label>
  );
};
