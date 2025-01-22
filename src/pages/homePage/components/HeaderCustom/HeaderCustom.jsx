import { Layout, Button } from "antd";
import { Logo } from "../../../../components";
import { UserOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../../context/Auth/AuthProvader";
import { SortingField, Navbar } from "./components";

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
    <Header className="headerClass">
      <Logo />
      <Navbar />
      {watchSortingField(path) && <SortingField />}
      <Button
        type="primary"
        onClick={auth.user ? handleSignout : handleSignin}
        size={window.innerWidth < 768 ? "small" : "large"}
        style={{ backgroundColor: "rgb(66 63 235)" }}
        icon={<UserOutlined />}
      >
        {" "}
        {auth.user ? "logout" : "login"}
      </Button>
    </Header>
  );
};
