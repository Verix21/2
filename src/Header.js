import React from "react"
import { NavLink } from "react-router-dom"

const Header = ({ token, setToken }) => {
  return (
    <nav>
      {token ? "logged in" : "logged out"}

      {token && <button onClick={() => setToken(null)}>Logout</button>}

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
      </ul>
    </nav>
  )
}

export default Header
