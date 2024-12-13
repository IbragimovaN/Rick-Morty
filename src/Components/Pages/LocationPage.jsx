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
            <div>Id: {elem.id}</div>
            <div>Created: {elem.created}</div>
            <div>Name: {elem.name}</div>
            <div>Dimension: {elem.dimension}</div>
            <div>Type: {elem.type}</div>
          </div>
        </div>
      )}
    </div>
  );
};
