import { Link } from "react-router-dom";
import MobileNav from "./MobileNav";
import MainNav from "./MainNav";

const Header = () => {
  return (
    <div className=" absolute z-30 w-full py-6">
      <div className="container flex justify-end gap-12 items-center">
        <div className="hidden md:block">

        <Link
          to={"/"}
          className="text-3xl  text-white tracking-tight items-center"
        >
          Add resturant
        </Link>
        </div>
        <div className="md:hidden">
          <MobileNav />
        </div>
        <div className="hidden md:block">
          <MainNav />
        </div>
      </div>
    </div>
  );
};

export default Header;
