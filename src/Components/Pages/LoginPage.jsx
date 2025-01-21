import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthProvader";
import { Button, Input } from "../Common";

export const LoginPage = () => {
  const auth = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from || "/";

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userName = formData.get("user");

    auth.signin(userName, () => {
      navigate(from, {
        replace: true,
      });
    });
  };

  return (
    <div className="flex flex-col items-center my-40">
      <form className="w-full max-w-sm" onSubmit={handleSubmit}>
        <Input name="user" />
        <Button text="login" type="submit" />
      </form>
    </div>
  );
};
