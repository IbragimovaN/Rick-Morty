import { Link } from "react-router-dom";
import { internalPaths } from "../../constants/internalPath";
import logoImage from "../../assets/rick-1.png";
import { Image } from "antd";

export const Logo = () => {
  return (
    <Link to={internalPaths.home}>
      {window.innerWidth < 768 ? (
        <h2>home</h2>
      ) : (
        <Image
          src={logoImage}
          preview={false}
          style={{
            maxWidth: "350px",
            width: "100%",
            height: "auto",
          }}
        />
      )}
    </Link>
  );
};
