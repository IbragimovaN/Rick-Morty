import { useSearchParams } from "react-router-dom";

import { Select } from "antd";

export const SortingField = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleChange = (e) => {
    setSearchParams({ sortByCreate: e });
  };

  return (
    <Select
      defaultValue="Oldest to Newest"
      size="large"
      style={{ width: 150 }}
      onChange={handleChange}
      options={[
        { value: "createdASC", label: "Oldest to Newest" },
        { value: "createdDESC", label: "Newest to Oldest" },
      ]}
    />
  );
};
