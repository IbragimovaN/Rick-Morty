import { NavLink } from "react-router-dom";
import { internalPaths } from "../internalPath";

export const Navbar = () => {
  return (
    <nav>
      <ul>
        <NavLink to={internalPaths.characters}>Персонажи</NavLink>
        <NavLink to={internalPaths.locations}>Локации</NavLink>
        <NavLink to={internalPaths.episodes}>Эпизоды</NavLink>
      </ul>
    </nav>
  );
};
