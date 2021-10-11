import React from "react"

const Input = ({ name, type, value, onChange }) => {
  return (
    <div>
      <div>{name}:</div>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  )
}

export default Input
