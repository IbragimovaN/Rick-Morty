import { ConfigProvider } from "antd";
import { LoadingSpinner } from "./LoadingSpinner";

export const OneElemPageLayout = ({ isLoading, error, children }) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          fontSize: 20,
          padding: 16,
        },
        components: {
          Card: {
            colorBgContainer: "#effc5b",
            colorText: "#000",
          },
        },
      }}
    >
      {isLoading ? <LoadingSpinner /> : error ? <div>{error}</div> : children}
    </ConfigProvider>
  );
};
