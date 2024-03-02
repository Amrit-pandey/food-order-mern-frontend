import { useAuth0 } from "@auth0/auth0-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { CircleUserRound } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

const UserMenu = () => {
  const { user, logout } = useAuth0();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-4 text-3xl px-3 text-white ">
        <CircleUserRound className="text-white text-3xl"/>
        {user?.name}
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-1/2">
        <DropdownMenuItem className="flex flex-col gap-3 items-center">
        <Link to="/resturant">My Resturant</Link>
        <Link to="/profile">Profile</Link>
        </DropdownMenuItem>
        <Separator />
        <DropdownMenuItem>
            <Button onClick={() => logout()} className="bg-orange-500 font-bold flex flex-1">Log out</Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserMenu;
