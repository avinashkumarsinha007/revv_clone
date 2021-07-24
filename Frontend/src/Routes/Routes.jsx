import React from "react";
import {Switch,Route} from "react-router-dom"
import Dashboard from "../Pages/Home/Dashboard";
import Open from "../Pages/Home/Open";
import Profile from "../Pages/Profile/Profile";

export const Router = () => {
  
    return(
    <Switch>
        <Route exact path="/">
            <Dashboard/>
            {/* <LoggedInNavbar/>
            <Product/> */}
        </Route>
        <Route exact path="/open">
            <Open/>
        </Route>
        <Route exact path="/open/:city">
            Subscription
        </Route>
        <Route exact path="/open/:city/stock/car_pricing">
            shubham filter page
        </Route>
        <Route path="/open/:city/:car/:model">
            product page
        </Route>
        <Route exact path="/profile">
          <Profile/>
        </Route>
        <Route>
            Error 404! you have reach the end of the web.
        </Route>
    </Switch>
    )
}