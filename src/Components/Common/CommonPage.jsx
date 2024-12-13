import { useFetchArray } from "../../hooks/useFetchArray";
import { useCallback, useEffect, useRef, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { Input } from "./Input";
import { LoadingSpinner } from "./LoadingSpinner";

export const CommonPage = ({ CardComponent, classFieldListMap }) => {
  const [query, setQuery] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const { arr, isLoading, error, hasMore } = useFetchArray(
    location.pathname.slice(1, -1),
    query,
    pageNumber
  );

  useEffect(() => {
    console.log("isLoading", isLoading);
    console.log("hasMore", hasMore);
  }, [isLoading, hasMore]);

  const observer = useRef();

  const handleChangeInput = (e) => {
    setQuery(e.target.value);
    setPageNumber(1);
  };

  const lastNodeRef = useCallback(
    (node) => {
      if (isLoading) return;
      if (observer.current) {
        observer.current.disconnect();
      }
      observer.current = new IntersectionObserver((elem) => {
        if (elem[0].isIntersecting && hasMore) {
          setPageNumber((prev) => prev + 1);
        }
      });
      if (node) {
        observer.current.observe(node);
      }
    },
    [isLoading, hasMore]
  );

  return (
    <div className="flex flex-col items-center justify-center mt-4">
      <Input type="text" width="300px" onChange={handleChangeInput} />
      <div className={classFieldListMap}>
        {arr.map((item, index) => {
          if (arr.length === index + 1) {
            return <CardComponent key={item.id} ref={lastNodeRef} {...item} />;
          } else {
            return <CardComponent key={item.id} {...item} />;
          }
        })}
      </div>
      {isLoading && <LoadingSpinner />}
      {error && <div className="text-white text-center">{error}</div>}
    </div>
  );
};
