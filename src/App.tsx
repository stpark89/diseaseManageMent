import React, { FunctionComponent } from "react";
import logo from "./logo.svg";
import "./App.css";
import BoardList from "./board/BoardList";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Index from "./main/Index";

const App: FunctionComponent = () => {
  return (
    <Router>
      <Switch>
        <Route path={["/board"]}>
          <BoardList />
        </Route>
        <Route path={["", "/"]}>
          <Index />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
