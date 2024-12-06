import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

export const useFetchArray = (fileName) => {
  const [arr, setArr] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const location = useLocation();
  console.log(location.search);

  const fetchFunc = async () => {
    await fetch(`../../data/${fileName}.json`)
      .then((data) => data.json())
      .then((data) => {
        const dd = data.map((item) => ({
          ...item,
          created: item.created.substring(0, 16).replace("T", " "),
        }));

        if (location.search === "?sortByCreate=createdDESC") {
          dd.sort((a, b) => new Date(b.created) - new Date(a.created));
        } else if (location.search === "?sortByCreate=createdASC") {
          dd.sort((a, b) => new Date(a.created) - new Date(b.created));
        }

        setArr(dd);
      })
      .catch((e) => setError(e))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    fetchFunc(fileName);
  }, [fileName, location]);

  return { arr, isLoading, error };
};
