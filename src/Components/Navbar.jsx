import { internalPaths } from "../internalPath";
import { StyledNavLink } from "./StyledNavlink";

export const Navbar = () => {
  return (
    <>
      <nav>
        <ul className="flex space-x-6">
          <StyledNavLink to={internalPaths.characters}>Персонажи</StyledNavLink>
          <StyledNavLink to={internalPaths.locations}>Локации</StyledNavLink>
          <StyledNavLink to={internalPaths.episodes}>Эпизоды</StyledNavLink>
        </ul>
      </nav>
    </>
  );
};
