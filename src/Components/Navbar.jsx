import { NavLink } from "react-router-dom";
import { internalPaths } from "../internalPath";
import { SortingField } from "./SortingField";
import { useState } from "react";

export const Navbar = () => {
  return (
    <>
      <nav className="bg-gray-800 p-4">
        <ul className="flex space-x-4">
          <NavLink
            to={internalPaths.characters}
            className="text-white hover:underline"
          >
            Персонажи
          </NavLink>
          <NavLink
            to={internalPaths.locations}
            className="text-white hover:underline"
          >
            Локации
          </NavLink>
          <NavLink
            to={internalPaths.episodes}
            className="text-white hover:underline"
          >
            Эпизоды
          </NavLink>
        </ul>
      </nav>
      {<SortingField />}
    </>
  );
};
