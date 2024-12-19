import { Menu, Layout, Button } from "antd";
import { Logo } from "./Logo";
import { UserOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvader";
import { SortingField } from "./SortingField";
import { Navbar } from "./Navbar";

const { Header } = Layout;

export const HeaderCustom = ({ path }) => {
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
    <Header style={{ display: "flex", alignItems: "center", height: "80px" }}>
      <Logo />
      <Navbar />
      {watchSortingField(path) && <SortingField />}
      <Button
        type="primary"
        onClick={auth.user ? handleSignout : handleSignin}
        size="large"
        style={{ backgroundColor: "rgb(66 63 235)" }}
        icon={<UserOutlined />}
      >
        {" "}
        {auth.user ? "logout" : "login"}
      </Button>
    </Header>
  );
};
