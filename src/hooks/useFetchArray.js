import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { SortingByCreated } from "../utils/sortingByCreated";
import { formatDate } from "../utils/formatDate";
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
    let cancel;
    axios({
      method: "GET",
      url: `https://rickandmortyapi.com/api/${fileName}`,
      params: { name: query, page: pageNumber },
      cancelToken: new axios.CancelToken((c) => (cancel = c)),
    })
      .then((res) => {
        setArr((prev) => {
          const uniqueResults = [...prev, ...res.data.results].filter(
            (value, index, self) =>
              index === self.findIndex((t) => t.id === value.id)
          );
          const formatedDate = uniqueResults.map((item) => ({
            ...item,
            created: formatDate(item.created),
          }));
          return SortingByCreated(formatedDate, location.search);
        });
        console.log("ЕЩЕ ЕСТЬ", res.data.results.length > 6);
        console.log(res.data.results);
        setHasMore(res.data.results.length > 6);
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
        if (axios.isCancel(e)) {
          return;
        }
        console.log(e);
        setError(e.status === 404 ? "not found" : e.message);
      });

    return () => cancel();
  }, [query, pageNumber, fileName, location]);

  return { arr, isLoading, error, hasMore };
};
