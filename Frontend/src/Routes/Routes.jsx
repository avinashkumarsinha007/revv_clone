import React from "react";
import { Switch, Route } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";

import Dashboard from "../Pages/Home/Dashboard";
import Open from "../Pages/Home/Open";
import Profile from "../Pages/Profile/Profile";
import { SingleProduct } from "../Pages/SingleProduct";
import ExploreCars from "../Pages/ExploreCars/ExploreCars";
import { FinalPayment } from "../Pages/payment/FinalPayment";

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
      <Route exact path="/subscription/:location">
        <ExploreCars />
      </Route>
      <Route path="/open/:city/:car/:model/:carId">
          <SingleProduct/>
      </Route>
      <Route exact path="/profile">
        <Profile />
      </Route>
      <Route exact={true} path="/payment/:id/:amount/:type">
          <FinalPayment />
        </Route>
      <Route>Error 404! you have reach the end of the web.</Route>

    </Switch>
  );
};
