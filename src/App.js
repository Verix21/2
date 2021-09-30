import axios from "axios"
import React from "react"
import Detail from "./Detail"
import List from "./List"
import Home from "./Home"
import Login from "./Login"
import Header from "./Header"
import { config } from "./config"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

const App = () => {
  const [token, setToken] = React.useState(undefined)

  const [profile, setProfile] = React.useState()

  React.useEffect(() => {
    if (token)
      axios({
        method: "get",
        url: `${config.url}auth/info`,
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      }).then((x) => {
        setProfile(x.data)
      })
  }, [token]) // eslint-disable-line

  if (!token) {
    return <Login setToken={setToken} />
  }

  if (!profile) {
    return "Loading"
  }

  return (
    <Router>
      <Header token={token} setToken={setToken} profile={profile} />

      <Switch>
        <Route path="/detail/:id">
          <Detail token={token} profile={profile} />
        </Route>
        <Route path="/users">
          <List token={token} />
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
