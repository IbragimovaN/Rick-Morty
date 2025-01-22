import { useSearchParams } from "react-router-dom";
import { Select } from "antd";

export const SortingField = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleChange = (e) => {
    setSearchParams({ sortByCreate: e });
  };

  return (
    <Select
      defaultValue={window.innerWidth < 768 ? "" : "Oldest to Newest"}
      size={window.innerWidth < 768 ? "small" : "large"}
      style={window.innerWidth < 768 ? { width: 40 } : { width: 150 }}
      onChange={handleChange}
      options={[
        { value: "createdASC", label: "Oldest to Newest" },
        { value: "createdDESC", label: "Newest to Oldest" },
      ]}
    />
  );
};
