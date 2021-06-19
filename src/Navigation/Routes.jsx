import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import RandomDishPage from "../pages/RandomDishPage/RandomDishPage";
import FavouritesPage from "../pages/FavouritesPage/FavouritesPage";
import NoMatch from "../pages/NoMatch";
import { RANDOM_DISH_PAGE, FAVOURITES_PAGE } from "./routesVars";

const Navigation = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={RANDOM_DISH_PAGE} component={RandomDishPage} exact></Route>
        <Route path={FAVOURITES_PAGE} component={FavouritesPage} exact></Route>
        <Route component={NoMatch} exact></Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Navigation;
