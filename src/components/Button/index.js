import React from "react"
import "./style.css"

const Button = ({ onClick, text }) => {
  return (
    <button class="button" onClick={onClick}>
      {text}
    </button>
  )
}

export default Button
