import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav
      className={`flex justify-center text-sm bg-transparent md:w-fit text-white flex-row gap-10 font-medium items-center`}
    >
      <NavLink to="/">Home</NavLink>
      <NavLink to="/discover">Discover</NavLink>
      <NavLink to="/aboutUs">About Us</NavLink>
      <div className="flex flex-row gap-3">
        <NavLink
          to="/signUp"
          className="w-[90px] text-center py-2 border border-white rounded hover:opacity-80"
        >
          Sign Up
        </NavLink>
        <NavLink
          to="/logIn"
          className="w-[90px] text-center py-2 bg-primary text-white border border-primary rounded hover:opacity-80"
        >
          Log In
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
