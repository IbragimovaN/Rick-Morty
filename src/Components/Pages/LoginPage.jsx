import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthProvader";

import { Button, Flex, Form, Input, Layout, Space } from "antd";
import { Content } from "antd/es/layout/layout";

//1. disabled настроить
//2. цвет лейбла

const LoginPage = () => {
  const auth = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from || "/";

  const handleSubmit = (e) => {
    auth.signin(e.user, () => {
      navigate(from, {
        replace: true,
      });
    });
  };

  return (
    <Form
      onFinish={handleSubmit}
      size="large"
      layout="vertical"
      wrapperCol={{ span: 24 }}
      style={{ width: "300px", margin: " 200px auto" }}
    >
      <Form.Item
        label="Username"
        name="user"
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
          // disabled={}
        >
          login
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginPage;
