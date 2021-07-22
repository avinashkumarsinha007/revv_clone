import React from "react";
import {Switch,Route} from "react-router-dom"

export const Router = () => {
  
    return(
    <Switch>
        <Route exact path="/">
            home
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
        <Route>
            Error 404! you have reach the end of the web.
        </Route>
        </Switch>
    )
}