import { useParams } from "react-router-dom";
import { useFetchOneElem } from "../../hooks/useFetchOneElem";

export const LocationPage = () => {
  const params = useParams();
  const { elem, error, isLoading } = useFetchOneElem("character", params.id);

  return (
    <div>
      {isLoading ? (
        <div>loading...</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <div className="p-4 bg-yellow-100 rounded-lg shadow-lg">
          <div className="text-lg font-bold text-gray-800">
            <div>Created: {currentItem.created}</div>
            <div>Name: {currentItem.name}</div>
            <div>Dimension: {currentItem.dimension}</div>
            <div>Type: {currentItem.type}</div>
          </div>
        </div>
      )}
    </div>
  );
};
