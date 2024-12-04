import { Outlet } from "react-router-dom";
import { Navbar } from "../Navbar";
import { FilterPanel } from "../FilterPanel";

export const HomePage = () => {
  return (
    <div>
      <Navbar />
      <FilterPanel />
      <Outlet />
    </div>
  );
};
