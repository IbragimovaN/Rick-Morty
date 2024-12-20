import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { SortingByCreated } from "../utils/sortingByCreated";
import axios from "axios";

export const useFetchArray = (fileName, query, pageNumber) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [arr, setArr] = useState([]);
  const [hasMore, setHasMore] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setArr([]);
  }, [query]);

  useEffect(() => {
    setIsLoading(true);
    setError(false);

    axios({
      method: "GET",
      url: `https://rickandmortyapi.com/api/${fileName}`,
      params: { name: query, page: pageNumber },
    })
      .then((res) => {
        setArr((prev) => {
          console.log(res.data.results);
          const uniqueResults = [...prev, ...res.data.results].filter(
            (value, index, self) =>
              index === self.findIndex((t) => t.id === value.id)
          );

          return SortingByCreated(uniqueResults, location.search);
        });

        setHasMore(res.data.results.length > 6);

        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
        if (axios.isCancel(e)) {
          return;
        }

        setError(e.status === 404 ? "not found" : e.message);
      });
  }, [query, pageNumber, fileName, location]);

  return { arr, isLoading, error, hasMore };
};
