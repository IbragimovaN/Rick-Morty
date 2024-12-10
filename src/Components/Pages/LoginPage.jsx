import { Button, Input } from "../Common";

export const LoginPage = () => {
  return (
    <div className="flex flex-col items-center my-40">
      <form className="w-full max-w-sm">
        <Input />
        <Button text="login" />
      </form>
    </div>
  );
};
