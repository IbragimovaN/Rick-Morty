import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvader";
// import { Button } from "./Common";
import { Button } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Logo } from "./Logo";
import { Navbar } from "./Navbar";
import { SortingField } from "./SortingField";

export const Header = ({ path }) => {
  const auth = useAuth();
  const navigate = useNavigate();

  const handleSignout = () => {
    auth.signout();
  };

  const handleSignin = () => {
    navigate("/login");
  };

  const watchSortingField = (path) => {
    if (
      path === "/characters" ||
      path === "/locations" ||
      path === "/episodes"
    ) {
      return true;
    } else {
      return false;
    }
  };
  return (
    <header className="bg-blue-950 flex justify-between items-center px-4">
      <Logo /> <Navbar />
      {watchSortingField(path) && <SortingField />}
      <Button
        type="primary"
        onClick={auth.user ? handleSignout : handleSignin}
        size="large"
        style={{ backgroundColor: "rgb(66 63 235)" }}
      >
        {" "}
        {auth.user ? "logout" : "login"}
        <UserOutlined />
      </Button>
    </header>
  );
};
