import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { SortingByCreated } from "../utils/sortingByCreated";
import { formatDate } from "../utils/formatDate";

export const useFetchArray = (fileName) => {
  const [arr, setArr] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const location = useLocation();

  const fetchFunc = async () => {
    await fetch(`../../data/${fileName}.json`)
      .then((data) => data.json())
      .then((data) => {
        setArr(SortingByCreated(data, location.search));
        setArr((prev) => {
          return prev.map((item) => {
            return {
              ...item,
              created: formatDate(item.created),
            };
          });
        });
      })
      .catch((e) => setError(e))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    fetchFunc(fileName);
  }, [fileName, location]);

  return { arr, isLoading, error };
};
