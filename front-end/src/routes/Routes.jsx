import React from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from "../components/dashboard/Dashboard";

const Routes = () => {
  return (
    <Switch>
      <Route path="/dashboard" exact render={(props) => <Dashboard {...props}/>} />
    </Switch>
  );
};

export default Routes;
