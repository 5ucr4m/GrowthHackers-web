import React from "react";
import { Switch } from "react-router-dom";
import Route from "../shared/Route";

import Home from "./Home";
import Favorite from "./Favorite";

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/favoritos" component={Favorite} isPrivate />
    </Switch>
  );
};

export default Routes;
