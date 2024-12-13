import { useParams } from "react-router-dom";
import { useFetchOneElem } from "../../hooks/useFetchOneElem";

const CharacterPage = () => {
  const params = useParams();
  const { elem, error, isLoading } = useFetchOneElem("character", params.id);

  return (
    <div>
      {isLoading ? (
        <div>loading...</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <div className="p-4 flex justify-between items-center w-[700px] m-auto my-[100px]">
          <img
            className="w-30 h-30 object-cover rounded-lg mb-4"
            src={elem.image}
            alt={elem.name}
          />

          <div className="text-lg font-bold text-[rgb(80,169,197)] ">
            <div>Created: {elem.created}</div>
            <div>Name: {elem.name}</div>
            <div>Status: {elem.status}</div>
            <div>Type: {elem.type}</div>
            <div>Gender: {elem.gender}</div>
            <div>Species: {elem.species}</div>
          </div>
        </div>
      )}
    </div>
  );
};
export default CharacterPage;
