import { useParams } from "react-router-dom";
import { useFetchArray } from "../../hooks/useFetchArray";
import { findElem } from "../../utils/findElem";
import { PagesLayout } from "./PagesLayout";
import { useEffect, useState } from "react";

export const CharacterPage = () => {
  const [currentItem, setCurrentItem] = useState(null);
  const { arr, isLoading, error } = useFetchArray("characters");
  const params = useParams();

  useEffect(() => {
    if (arr.length > 0) {
      setCurrentItem(findElem(arr, params.id));
    }
  }, [arr, params.id]);

  return (
    <PagesLayout isLoading={isLoading} error={error}>
      {currentItem && (
        <div className="p-4 flex justify-between items-center w-[700px] m-auto my-[100px]">
          <img
            className="w-30 h-30 object-cover rounded-lg mb-4"
            src={currentItem.image}
            alt={currentItem.name}
          />

          <div className="text-lg font-bold text-[var(--blue)] ">
            <div>Created: {currentItem.created}</div>
            <div>Name: {currentItem.name}</div>
            <div>Status: {currentItem.status}</div>
            <div>Type: {currentItem.type}</div>
            <div>Gender: {currentItem.gender}</div>
            <div>Species: {currentItem.species}</div>
          </div>
        </div>
      )}
    </PagesLayout>
  );
};
