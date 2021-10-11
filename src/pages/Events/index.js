import axios from "axios"
import React from "react"
import { Link } from "react-router-dom"
import { config } from "config"
import Button from "components/Button"
import "./style.css"

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
    <div class="events">
      <div class="events__list">
        {value.map((x) => (
          <Link className="events__item" to={`/detail/${x.id}`}>
            <div>{x.title}</div>
          </Link>
        ))}
      </div>
      <Link to="/create">
        <Button text="Create new event" />
      </Link>
    </div>
  )
}

export default List
