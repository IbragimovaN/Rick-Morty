import { useSearchParams } from "react-router-dom";

export const SortingField = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSortChange = (event) => {
    setSearchParams({ sortByCreate: event.target.value });
  };

  return (
    <label className="text-white bg-[rgb(80,169,197)] px-4 py-2 rounded transition-transform transform hover:scale-105">
      Sort by creation date
      <select onChange={(e) => handleSortChange(e)} className="ml-2 text-black">
        <option value="createdASC">Oldest to Newest</option>
        <option value="createdDESC">Newest to Oldest</option>
      </select>
    </label>
  );
};
