import { useEffect, useState } from "react";

export const useFetchArray = (fileName) => {
  const [arr, setArr] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchFunc = async () => {
    await fetch(`../../data/${fileName}.json`)
      .then((data) => data.json())
      .then((data) => {
        const dd = data.map((item) => ({
          ...item,
          created: item.created.substring(0, 16).replace("T", " "),
        }));

        setArr(dd);
      })
      .catch((e) => setError(e))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    fetchFunc(fileName);
  }, [fileName]);
  console.log(arr, isLoading, error);
  return { arr, isLoading, error, fetchFunc };
};
