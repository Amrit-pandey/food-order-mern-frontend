import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "./ui/button";
import UserMenu from "./UserMenu";

const MainNav = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  return (
    <span>
      {isAuthenticated ? (
        <UserMenu />
      ) : (
        <Button
          variant="link"
          className="text-2xl text-white "
          onClick={async () => await loginWithRedirect()}
        >
          Log In
        </Button>
      )}
    </span>
  );
};

export default MainNav;
