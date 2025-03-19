import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/Auth/AuthProvader";
import { Button, ConfigProvider, Form, Input, message } from "antd";

const LoginPage = () => {
  const auth = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();
  const from = location.state?.from || "/";

  const handleSubmit = (e) => {
    auth.signin(e.user, () => {
      messageApi.open({
        type: "success",
        content: `Hello, ${e.user}`,
      });
      const timer = setTimeout(() => {
        navigate(from, {
          replace: true,
        });
      }, 2000);
      return () => clearTimeout(timer);
    });
  };

  return (
    <ConfigProvider
      theme={{
        components: {
          Form: {
            labelColor: "#fff",
          },
        },
      }}
    >
      {contextHolder}
      <Form
        onFinish={handleSubmit}
        size="large"
        layout="vertical"
        wrapperCol={{ span: 24 }}
        style={{ width: "300px", margin: " 200px auto" }}
      >
        <Form.Item
          label="Username"
          style={{ color: "#fff" }}
          name="user"
          id="login"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item label={null}>
          <Button
            htmlType="submit"
            type="primary"
            style={{ backgroundColor: "rgb(66 63 235)", width: "100%" }}
          >
            login
          </Button>
        </Form.Item>
      </Form>
    </ConfigProvider>
  );
};

export default LoginPage;
