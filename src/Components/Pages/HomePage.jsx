import { Outlet, useLocation } from "react-router-dom";
import { Navbar } from "../Navbar";
import { Logo } from "../Logo";
import { SortingField } from "../SortingField";
import bgHome from "../../assets/bg-home.jpg";

export const HomePage = () => {
  const location = useLocation();
  console.log(location);

  const watchSortingField = (path) => {
    if (
      path === "/characters" ||
      path === "/locations" ||
      path === "/episodes"
    ) {
      return true;
    } else {
      return false;
    }
  };
  return (
    <div
      className="w-1200 mx-auto min-h-screen bg-cover bg-center"
      style={
        location.pathname === "/"
          ? { backgroundImage: `url(${bgHome})` }
          : {
              background:
                "linear-gradient(270deg, rgb(20, 20, 22) 14%, rgb(54, 66, 130) 100%)",
            }
      }
    >
      <header className="bg-blue-950 flex justify-between items-center px-4">
        <Logo /> <Navbar />
        {watchSortingField(location.pathname) && <SortingField />}
      </header>
      {location.pathname === "/" && (
        <h1 className="text-8xl font-bold text-white text-center mt-40">
          Welcome
        </h1>
      )}
      <Outlet />
    </div>
  );
};
