import axios from "axios"
import React from "react"
import { NavLink } from "react-router-dom"
import { config } from "./config"

const Header = ({ token, setToken, profile }) => {
  return (
    <nav>
      <div>{profile.first_name + " " + profile.last_name}</div>
      <button onClick={() => setToken(null)}>Logout</button>

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
