import { NavLink } from "react-router-dom";

export const StyledNavLink = ({ to, children }) => (
  <NavLink
    to={to}
    className="text-white bg-[var(--blue)] px-4 py-2 rounded transition-transform transform hover:scale-105"
  >
    {children}
  </NavLink>
);
