import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

export const SortingField = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSortChange = (event) => {
    setSearchParams({ sortByCreate: event.target.value });
  };

  return (
    <label>
      Sort by creation date
      <select onChange={(e) => handleSortChange(e)}>
        <option value="createdASC">Oldest to Newest</option>
        <option value="createdDESC">Newest to Oldest</option>
      </select>
    </label>
  );
};
