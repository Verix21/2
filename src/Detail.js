import axios from "axios"
import React from "react"
import { useParams } from "react-router"
import { config } from "./config"
import * as R from "ramda"

const Detail = ({ token, profile }) => {
  const [value, setValue] = React.useState()

  const { id } = useParams()

  React.useEffect(() => {
    axios({
      method: "get",
      url: `${config.url}event/${id}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    }).then((x) => {
      setValue(x.data)
    })
  }, []) // eslint-disable-line

  if (!value) {
    return "Loading"
  }

  const isMine = `${profile.id}` === value.user_id

  return (
    <div>
      <div>
        attendees:{" "}
        {value.attendees.map((x) => (
          <>
            <div> {x.email}</div>
            <div> {x.first_name}</div>
            <div> {x.last_name}</div>
          </>
        ))}
      </div>
      <div>capacity: {value.capacity}</div>
      <div>date: {value.date}</div>
      <div>description: {value.description}</div>
      <div>time: {value.time}</div>
      {isMine ? (
        <div>
          <input
            value={value.title}
            onChange={(e) => {
              const newValue = e.target.value
              setValue({ ...value, title: newValue })
            }}
          />
          <button
            onClick={() => {
              axios({
                method: "put",
                url: `${config.url}event/${id}`,
                data: R.pick(
                  ["title", "date", "time", "description", "capacity"],
                  value,
                ),
                headers: {
                  "Content-Type": "application/json",
                  Authorization: "Bearer " + token,
                },
              })
            }}
          >
            save
          </button>
        </div>
      ) : (
        <div>title: {value.title}</div>
      )}
    </div>
  )
}

export default Detail
