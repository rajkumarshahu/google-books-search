import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./pages/Search";
import SavedBooks from "./pages/SavedBooks";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Wrapper>
            <Switch>
              <Route exact path='/' component={Search} />
              <Route exact path='/search' component={Search} />
              <Route exact path='/savedbooks' component={SavedBooks} />
            </Switch>
          </Wrapper>
        </div>
      </Router>
    );
  }
}

export default App;
