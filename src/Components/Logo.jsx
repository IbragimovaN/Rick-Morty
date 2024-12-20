import { Link } from "react-router-dom";
import { internalPaths } from "../internalPath";
import logoImage from "../assets/rick-1.png";
import { Image } from "antd";

export const Logo = () => {
  return (
    <Link to={internalPaths.home}>
      <Image
        src={logoImage}
        preview={false}
        style={{
          maxWidth: "350px",
          width: "100%",
          height: "auto",
          display: window.innerWidth < 768 ? "none" : "block",
        }}
      />
    </Link>
  );
};
