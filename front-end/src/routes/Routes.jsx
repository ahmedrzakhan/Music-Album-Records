import React from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from "../components/dashboard/Dashboard";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact render={() => <Dashboard />} />
    </Switch>
  );
};

export default Routes;
