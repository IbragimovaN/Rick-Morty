import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvader";
import { Button } from "./Common";
import { Logo } from "./Logo";
import { Navbar } from "./Navbar";
import { SortingField } from "./SortingField";
import { internalPaths } from "../internalPath";

export const Header = ({ path }) => {
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
      path === internalPaths.characters ||
      path === internalPaths.locations ||
      path === internalPaths.episodes
    ) {
      return true;
    } else {
      return false;
    }
  };
  return (
    <header className="bg-blue-950 flex justify-between items-center px-4">
      <Logo /> <Navbar />
      {watchSortingField(path) && <SortingField />}
      <Button
        text={auth.user ? "logout" : "login"}
        width="100px"
        onClick={auth.user ? handleSignout : handleSignin}
      />
    </header>
  );
};
