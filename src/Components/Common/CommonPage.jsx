import { useFetchArray } from "../../hooks/useFetchArray";
import { useCallback, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { LoadingSpinner } from "./LoadingSpinner";
import { Flex, Input } from "antd";

export const CommonPage = ({ CardComponent }) => {
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

  const lastNodeRef = useCallback(
    (node) => {
      if (isLoading) return;
      if (observer.current) {
        observer.current.disconnect();
      }
      observer.current = new IntersectionObserver(
        (elem) => {
          if (elem[0].isIntersecting && hasMore) {
            console.log(elem[0].isIntersecting);
            if (arr.length >= 20) {
              console.log("if (arr.length >= 20)");
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
    <Flex
      vertical
      justify="center"
      align="center"
      style={{ paddingTop: 10 }}
      gap="middle"
    >
      <Search
        placeholder="search"
        onSearch={onSearch}
        style={{ width: 300 }}
        size="large"
        allowClear
        id="search"
      />
      <Flex wrap justify="space-between" gap="middle">
        {arr.map((item, index) => {
          if (arr.length === index + 1) {
            return <CardComponent key={item.id} ref={lastNodeRef} {...item} />;
          } else {
            return <CardComponent key={item.id} {...item} />;
          }
        })}
      </Flex>
      {isLoading && <LoadingSpinner />}
      {error && <div>{error}</div>}
    </Flex>
  );
};
