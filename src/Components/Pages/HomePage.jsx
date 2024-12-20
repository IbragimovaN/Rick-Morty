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
        {location.pathname === "/" && <h1 className="title-home">Welcome</h1>}
        <ErrorBoundary>
          <Outlet />
        </ErrorBoundary>
      </Content>
    </Layout>
  );
};
export default HomePage;
