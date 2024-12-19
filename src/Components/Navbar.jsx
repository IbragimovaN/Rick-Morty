import { Link, useLocation, useNavigate } from "react-router-dom";
import { internalPaths } from "../internalPath";
import { Menu, theme } from "antd";
import { useEffect, useState } from "react";

const items = [
  {
    label: "characters",
    key: "characters",
  },
  {
    label: "locations",
    key: "locations",
  },
  {
    label: "episodes",
    key: "episodes",
  },
];

export const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedKeys, setSelectedKeys] = useState([]);
  const handleClick = (key) => {
    setSelectedKeys(key.selectedKeys);
    navigate(key.key);
  };

  useEffect(() => {
    if (location.pathname === "/") {
      setSelectedKeys(false);
    }
  }, [location]);

  return (
    <Menu
      theme="dark"
      mode="horizontal"
      items={items}
      style={{ flex: 1, minWidth: 0 }}
      onSelect={handleClick}
      selectedKeys={selectedKeys}
    />
  );
};
