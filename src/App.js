import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Organizer from "./organizer";
import Todo from "./todo";
import Table from "./table";
import Navigation from "./navigation";

function App() {
  return (
    <div>
      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Organizer} />
          <Route path="/todo" component={Todo} />
          <Route path="/table" component={Table} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
