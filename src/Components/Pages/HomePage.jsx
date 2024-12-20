import { Layout } from "antd";
import bgHome from "../../assets/bg-home.jpg";
import { HeaderCustom } from "../Header";
import { Outlet, useLocation } from "react-router-dom";
import ErrorBoundary from "../../errorBoundary";

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
              backgroundPosition: "center",
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
          <h1 className="text-8xl font-bold text-white text-center mt-40">
            Welcome
          </h1>
        )}
        <ErrorBoundary>
          <Outlet />
        </ErrorBoundary>
      </Content>
    </Layout>
  );
};
export default HomePage;
