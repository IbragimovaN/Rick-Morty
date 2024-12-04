import { Link } from "react-router-dom";
import { internalPaths } from "../internalPath";

export const CharsterCard = ({ character = {} }) => {
  return (
    <div>
      <Link to={internalPaths.character(character.id)}>{character.name}</Link>
    </div>
  );
};
