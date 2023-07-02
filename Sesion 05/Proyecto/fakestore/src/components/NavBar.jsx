import { Link } from "react-router-dom";
import CountCart from "../pages/CountCart";

const NavBar = () => {
  return (
    <nav className="h-20 w-full bg-black p-4 flex justify-between text-white items-center">
      <Link to="/">
        <span>FakeStore</span>
      </Link>
      <Link to="/carrito">
       
        <span>{<CountCart />}</span>

      </Link>
    </nav>
  );
};

export default NavBar;