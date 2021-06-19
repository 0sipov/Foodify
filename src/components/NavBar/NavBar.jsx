import React from "react";
import { NavLink } from "react-router-dom";
import { RANDOM_DISH_PAGE, FAVOURITES_PAGE } from "../../Navigation/routesVars";
import { navBar, navLink } from "./NavBar.module.css";

const NavBar = () => {
  return (
    <nav className={navBar}>
      <NavLink to={RANDOM_DISH_PAGE} className={navLink}>
        Random dish
      </NavLink>
      <NavLink to={FAVOURITES_PAGE} className={navLink}>
        Favourites
      </NavLink>
    </nav>
  );
};

export default NavBar;
