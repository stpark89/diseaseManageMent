import React, { FunctionComponent } from "react";
import logo from "./logo.svg";
import "./App.css";
import BoardList from "./board/BoardList";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import LayOutContainer from "./container/layout/index";

const App: FunctionComponent = () => {
  return (
    <Router>
      <Switch>
        <Route path={["/board"]}>
          <LayOutContainer />
        </Route>
        <Route path={["", "/"]}>
          <LayOutContainer />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
