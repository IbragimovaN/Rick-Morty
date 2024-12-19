import { useFetchArray } from "../../hooks/useFetchArray";
import { useCallback, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { LoadingSpinner } from "./LoadingSpinner";
import { Input, Space } from "antd";

export const CommonPage = ({ CardComponent, classFieldListMap }) => {
  const [query, setQuery] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const location = useLocation();
  const { arr, isLoading, error, hasMore } = useFetchArray(
    location.pathname.slice(1, -1),
    query,
    pageNumber
  );

  const observer = useRef();
  const { Search } = Input;
  console.log(arr);

  // const handleChangeInput = (e) => {
  //   setQuery(e.target.value);
  //   setPageNumber(1);
  // };

  const lastNodeRef = useCallback(
    (node) => {
      if (isLoading) return;
      if (observer.current) {
        observer.current.disconnect();
      }
      observer.current = new IntersectionObserver(
        (elem, ff) => {
          if (elem[0].isIntersecting && hasMore) {
            console.log(elem[0]);
            console.log(ff);
            if (arr.length >= 20) {
              setPageNumber((prev) => prev + 1);
            }
          }
        },
        {
          threshold: 1.0,
        }
      );
      if (node) {
        observer.current.observe(node);
      }
    },
    [isLoading, hasMore]
  );
  const onSearch = (value) => {
    setQuery(value);

    setPageNumber(1);
  };
  return (
    <div className="flex flex-col items-center justify-center mt-4" id="divMap">
      {/* <Input
        type="text"
        width="300px"
        placeholder="search..."
        onChange={handleChangeInput}
      /> */}
      <Search
        placeholder="search"
        onSearch={onSearch}
        style={{ width: 200 }}
        allowClear
      />
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
