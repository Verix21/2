import React from "react"
import { NavLink } from "react-router-dom"
import "./style.css"
import Button from "components/Button"

const Header = ({ setToken, profile }) => {
  return (
    <div class="header">
      <div class="header__links">
        <NavLink className="header__link" activeClassName="active" to="/" exact>
          Home
        </NavLink>

        <NavLink className="header__link" activeClassName="active" to="/Events">
          Events
        </NavLink>
      </div>
      <div class="header__user">
        {profile.first_name + " " + profile.last_name}
      </div>
      <Button
        onClick={() => {
          setToken(null)
          localStorage.removeItem("accessToken")
        }}
        text="Logout"
      />
    </div>
  )
}

export default Header
