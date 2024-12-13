import { useParams } from "react-router-dom";
import { useFetchOneElem } from "../../hooks/useFetchOneElem";

export const EpisodePage = () => {
  const params = useParams();
  const { elem, error, isLoading } = useFetchOneElem("episode", params.id);

  return (
    <div>
      {isLoading ? (
        <div>loading...</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <div className="p-4 bg-blue-100 rounded-lg shadow-lg">
          <div className="text-lg font-bold text-gray-800">
            <div>Id: {elem.id}</div>
            <div>Created: {elem.created}</div>
            <div>Name: {elem.name}</div>
            <div>Air date: {elem.air_date}</div>
            <div>Episode: {elem.episode}</div>
          </div>
        </div>
      )}
    </div>
  );
};
