import axios from "axios"
import React from "react"
import Detail from "./Detail"
import List from "./List"
import Home from "./Home"
import Login from "./Login"
import Header from "./Header"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

const App = () => {
  const [token, setToken] = React.useState(undefined)

  if (!token) {
    return <Login setToken={setToken} />
  }

  return (
    <Router>
      <Header token={token} setToken={setToken} />

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
        <Route path="*">Not found</Route>
      </Switch>
    </Router>
  )
}

export default App
