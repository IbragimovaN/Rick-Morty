import { useFetchArray } from "../../hooks/useFetchArray";
import { useCallback, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { LoadingSpinner } from "../loadingSpinner/LoadingSpinner";
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
<<<<<<< HEAD:src/components/commonPage/CommonPage.jsx
  const { Search } = Input;
=======
  console.log(arr);

  const handleChangeInput = (e) => {
    setQuery(e.target.value);
    setPageNumber(1);
  };
>>>>>>> 0cd6c2a (feat: часть функционала переделана a.d):src/Components/Common/CommonPage.jsx

  const lastNodeRef = useCallback(
    (node) => {
      if (isLoading) return;
      if (observer.current) {
        observer.current.disconnect();
      }
      observer.current = new IntersectionObserver(
        (elem, ff) => {
          if (elem[0].isIntersecting && hasMore) {
            if (arr.length >= 20) {
              setPageNumber((prev) => prev + 1);
            }
          }
        },
        {
          threshold: 0.5,
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
