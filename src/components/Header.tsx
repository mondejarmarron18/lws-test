import NavBar from "./NavBar";
import Panel from "./Panel";
import MobileNavBar from "./MobileNavBar";
import { useLayoutEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [showNavBar, setShowNavBar] = useState(true);

  useLayoutEffect(() => {
    window.addEventListener("resize", () => {
      setShowNavBar(window.innerWidth > 768);
    });
  }, []);

  return (
    <Panel className="relative text-white flex justify-between items-center bg-gradient-to-b from-black to-transparent">
      <Link to="/" className="font-extrabold">
        AnimeBinge
      </Link>
      {showNavBar ? <NavBar /> : <MobileNavBar />}
    </Panel>
  );
};

export default Header;
