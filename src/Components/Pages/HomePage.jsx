import { Outlet } from "react-router-dom";
import { Navbar } from "../Navbar";

export const HomePage = () => {
  return (
    <div className="w-1200 mx-auto">
      <Navbar />
      <Outlet />
    </div>
  );
};
