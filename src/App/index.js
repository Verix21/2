import axios from "axios"
import React from "react"
import Detail from "pages/Detail"
import Events from "pages/Events"
import Home from "pages/Home"
import Login from "pages/Login"
import Create from "pages/Create"
import Header from "./Header"
import { config } from "config"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import "./style.css"

const App = () => {
  const [token, setToken] = React.useState(localStorage.getItem("accessToken"))

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
        <Route
          path="/detail/:id"
          render={(p) => <Detail {...p} token={token} profile={profile} />}
        />
        <Route path="/create" render={(p) => <Create {...p} token={token} />} />
        <Route path="/events" render={(p) => <Events {...p} token={token} />} />
        <Route path="/" exact render={(p) => <Home {...p} />} />
        <Route path="*">Not found</Route>
      </Switch>
    </Router>
  )
}

export default App
