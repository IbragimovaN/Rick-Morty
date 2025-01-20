import { useParams } from "react-router-dom";
import { useFetchArray } from "../../hooks/useFetchArray";
import { useEffect, useState } from "react";
import { findElem } from "../../utils/findElem";
import { PagesLayout } from "./PagesLayout";

export const EpisodePage = () => {
  const [currentItem, setCurrentItem] = useState(null);
  const { arr, isLoading, error } = useFetchArray("episode");
  const params = useParams();

  useEffect(() => {
    if (arr.length > 0) {
      setCurrentItem(findElem(arr, params.id));
    }
  }, [arr, params.id]);

  return (
    <PagesLayout isLoading={isLoading} error={error}>
      {currentItem && (
        <div className="p-4 bg-blue-100 rounded-lg shadow-lg">
          <div className="text-lg font-bold text-gray-800">
            <div>Created: {currentItem.created}</div>
            <div>Name: {currentItem.name}</div>
            <div>Air date: {currentItem.air_date}</div>
            <div>Episode: {currentItem.episode}</div>
          </div>
        </div>
      )}
    </PagesLayout>
  );
};
