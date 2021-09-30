import axios from "axios"
import React from "react"
import { Link } from "react-router-dom"
import { config } from "./config"

const List = ({ token }) => {
  const [value, setValue] = React.useState([])

  React.useEffect(() => {
    axios({
      method: "get",
      url: `${config.url}events`,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    }).then((x) => {
      setValue(x.data)
    })
  }, []) // eslint-disable-line
  console.log(value)
  return (
    <ul>
      {value.map((x) => (
        <Link to={`/detail/${x.id}`}>
          <li>{x.title}</li>
        </Link>
      ))}
    </ul>
  )
}

export default List
