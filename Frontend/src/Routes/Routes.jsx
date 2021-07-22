import React from "react";
import { Switch, Route } from "react-router-dom";
import ExploreCars from "../Pages/ExploreCars/ExploreCars";
import Dashboard from "../Pages/Home/Dashboard";
import Open from "../Pages/Home/Open";

export const Router = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Dashboard />
      </Route>
      <Route exact path="/open">
        <Open />
      </Route>
      <Route exact path="/open/:city">
        Subscription
      </Route>
      <Route exact path="/explorecars">
        <ExploreCars />
      </Route>
      <Route path="/open/:city/:car/:model">product page</Route>
      <Route>Error 404! you have reach the end of the web.</Route>
    </Switch>
  );
};
