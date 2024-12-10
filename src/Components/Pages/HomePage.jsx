import { Outlet, useLocation } from "react-router-dom";
import { Header } from "../Header";
import bgHome from "../../assets/bg-home.jpg";

export const HomePage = () => {
  const location = useLocation();
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
      <Header path={location.pathname} />
      {location.pathname === "/" && (
        <h1 className="text-8xl font-bold text-white text-center mt-40">
          Welcome
        </h1>
      )}
      <Outlet />
    </div>
  );
};
