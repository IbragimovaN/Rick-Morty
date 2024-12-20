import { Link } from "react-router-dom";
import { internalPaths } from "../internalPath";
import logoImage from "../assets/rick-1.png";
export const Logo = () => {
  return (
    <Link to={internalPaths.home}>
      <img
        src={logoImage}
        style={{ width: "350px", height: "auto", marginTop: 30 }}
      ></img>
    </Link>
  );
};
