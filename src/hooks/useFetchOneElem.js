import { useEffect, useState } from "react";
import axios from "axios";

export const useFetchOneElem = (fileName, id) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [elem, setElem] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    setError(false);

    axios({
      method: "GET",
      url: `https://rickandmortyapi.com/api/${fileName}/${id}`,
    })
      .then((res) => {
        setElem(res.data);
      })

      .catch((e) => {
        setError(e);
      })
      .finally(() => setIsLoading(false));
  }, [fileName, id]);

  return { elem, error, isLoading };
};
