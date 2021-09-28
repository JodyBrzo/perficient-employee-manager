import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NoMatch from "./pages/NoMatch.js";
import Employees from "./pages/Employees";
import Detail from "./pages/Detail";
import Nav from "./components/Nav";

const App = () => {
  return (
    <Router>
      <div id="root">
        <Nav />
        <Switch>
          <Route exact path={["/"]}>
            <Employees />
          </Route>
          <Route exact path="/employee/:id">
            <Detail />
          </Route>
          <Route>
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </Router>
  )
};

export default App;