import axios from "axios"
import React from "react"
import { useParams } from "react-router"

const Detail = () => {
  const [value, setValue] = React.useState()

  const { id } = useParams()

  React.useEffect(() => {
    const url = `https://swapi.dev/api/people/${id}`
    axios.get(url).then((x) => {
      console.log(x)
      setValue(x.data)
    })
  }, [])

  if (!value) {
    return "Loading"
  }

  return (
    <div>
      <div>Name: {value.name}</div>
      <div>Height: {value.height}</div>
      <div>Weight: {value.mass}</div>
    </div>
  )
}

export default Detail
