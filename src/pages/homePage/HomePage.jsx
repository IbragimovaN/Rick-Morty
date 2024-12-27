import { Layout } from "antd";
import { HeaderCustom } from "./components";
import { Outlet, useLocation } from "react-router-dom";
import ErrorBoundary from "../../components/errorBoundary/errorBoundary";
import bgHome from "../../assets/bg-home.jpg";
import Title from "antd/es/typography/Title";

const { Content } = Layout;

const HomePage = () => {
  const location = useLocation();
  return (
    <Layout
      className="layout"
      style={
        location.pathname === "/"
          ? {
              backgroundImage: `url(${bgHome})`,
              backgroundSize: "cover",
              backgroundPosition: "center bottom",
            }
          : {
              background:
                "linear-gradient(270deg, rgb(20, 20, 22) 14%, rgb(54, 66, 130) 100%)",
            }
      }
    >
      <HeaderCustom path={location.pathname} />
      <Content className="content">
        {" "}
        {location.pathname === "/" && (
          <Title style={{ textAlign: "center", color: "#fff", marginTop: 100 }}>
            Welcome
          </Title>
        )}
        <ErrorBoundary>
          <Outlet />
        </ErrorBoundary>
      </Content>
    </Layout>
  );
};
export default HomePage;
