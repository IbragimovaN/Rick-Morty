import { NavLink } from "react-router-dom";
import { internalPaths } from "../internalPath";

export const Navbar = () => {
  return (
    <>
      <nav>
        <ul className="flex space-x-6">
          <NavLink
            to={internalPaths.characters}
            className="text-white bg-[rgb(80,169,197)] px-4 py-2 rounded transition-transform transform hover:scale-105"
          >
            Персонажи
          </NavLink>
          <NavLink
            to={internalPaths.locations}
            className="text-white bg-[rgb(80,169,197)] px-4 py-2 rounded transition-transform transform hover:scale-105"
          >
            Локации
          </NavLink>
          <NavLink
            to={internalPaths.episodes}
            className="text-white bg-[rgb(80,169,197)] px-4 py-2 rounded transition-transform transform hover:scale-105"
          >
            Эпизоды
          </NavLink>
        </ul>
      </nav>
    </>
  );
};
