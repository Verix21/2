import axios from "axios"
import React from "react"
import Detail from "./Detail"
import List from "./List"
import Home from "./Home"
import Login from "./Login"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom"

const App = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <NavLink
              activeStyle={{
                fontWeight: "bold",
                color: "red",
              }}
              to="/"
              exact
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              activeStyle={{
                fontWeight: "bold",
                color: "red",
              }}
              to="/users"
            >
              Users
            </NavLink>
          </li>

          <li>
            <NavLink
              activeStyle={{
                fontWeight: "bold",
                color: "red",
              }}
              to="/login"
            >
              Login
            </NavLink>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/detail/:id">
          <Detail />
        </Route>
        <Route path="/users">
          <List />
        </Route>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
