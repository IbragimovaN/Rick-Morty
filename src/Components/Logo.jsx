import { Link } from "react-router-dom";
import { internalPaths } from "../internalPath";
import logoImage from "../assets/rick-1.png";
export const Logo = () => {
  return (
    <Link to={internalPaths.home}>
      <img src={logoImage} className="w-[350px] h-auto"></img>
    </Link>
  );
};
