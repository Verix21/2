import axios from "axios"
import React from "react"
import { Link } from "react-router-dom"

const getUserId = (user) => {
  const first = user.url.slice(0, -1)

  return first.slice(first.lastIndexOf("/") + 1)
}

const List = () => {
  const [value, setValue] = React.useState([])

  React.useEffect(() => {
    const url = "https://swapi.dev/api/people"
    axios.get(url).then((x) => setValue(x.data.results))
  }, [])

  return (
    <ul>
      {value.map((x) => (
        <Link to={`/detail/${getUserId(x)}`}>
          <li>{x.name}</li>
        </Link>
      ))}
    </ul>
  )
}

export default List
