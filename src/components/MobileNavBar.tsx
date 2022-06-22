import { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoMdClose, IoMdMenu } from "react-icons/io";

const MobileNavBar = () => {
  const [showNavBar, setShowNavBar] = useState(false);

  return (
    <>
      <button
        className="fixed right-7 top-7 rounded z-20 float-right bg-secondary p-2"
        onClick={() => setShowNavBar(!showNavBar)}
      >
        {showNavBar ? <IoMdClose size={25} /> : <IoMdMenu size={25} />}
      </button>
      {showNavBar && (
        <nav className="flex flex-col w-[300px] bg-secondary h-full fixed z-10 top-0 right-0 text-sm drop-shadow-lg">
          <div className="flex flex-1 justify-center flex-col text-center gap-7">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/discover">Discover</NavLink>
            <NavLink to="/aboutUs">About Us</NavLink>
          </div>

          <div className="flex flex-col gap-3 p-5">
            <NavLink
              to="/signUp"
              className="w-full text-center py-2 border border-white rounded hover:opacity-80"
            >
              Sign Up
            </NavLink>
            <NavLink
              to="/logIn"
              className="w-full text-center py-2 bg-primary text-white border border-primary rounded hover:opacity-80"
            >
              Log In
            </NavLink>
          </div>
        </nav>
      )}
    </>
  );
};

export default MobileNavBar;
