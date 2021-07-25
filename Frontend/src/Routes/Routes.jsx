import React from "react";
import { Switch, Route } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";
import ExploreCars from "../Pages/ExploreCars/ExploreCars";
import Dashboard from "../Pages/Home/Dashboard";
import Open from "../Pages/Home/Open";
import Profile from "../Pages/Profile/Profile";
import { SingleProduct } from "../Pages/SingleProduct";

export const Router = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Dashboard />
      </Route>
      <Route exact path="/open">
        <Open />
      </Route>
      <PrivateRoute exact path="/open/:city">
        Subscription
      </PrivateRoute>
      {/* <PrivateRoute path="/login">
        <Login />
      </PrivateRoute> */}
{/* 
      <PrivateRoute exact path="/open/:city/stock/car_pricing">
        shubham filter page
      </PrivateRoute> */}
      <PrivateRoute exact path="/explorecars">
        <ExploreCars />
      </PrivateRoute>
      <Route path="/open/:city/:car/:model/:carId">
          <SingleProduct/>
      </Route>
      <PrivateRoute exact path="/profile">
        <Profile />
      </PrivateRoute>
      <Route>Error 404! you have reach the end of the web.</Route>

    </Switch>
  );
};
