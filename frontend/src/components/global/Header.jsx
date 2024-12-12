import { Link } from "react-router-dom";
import Nav from "./Nav";
import Toolbar from "./Toolbar";

function Header() {
  return (
    <header className=" max-w-[1440px] mx-auto my-0 z-50 padding-x md:py-6 py-3  border-b-secondary border-b flex justify-between items-center">
      <Link to="/">
        <img
          className="max-md:h-4 object-cover"
          src={
            document.documentElement.classList.contains("dark")
              ? "/logo-white.png"
              : "/logo.png"
          }
          alt="Home"
        />
      </Link>
      <Nav />
      <Toolbar />
    </header>
  );
}

export default Header;
