import axios from "axios"
import React from "react"
import { useParams } from "react-router"
import { config } from "config"
import EditForm from "components/EditForm"
import * as R from "ramda"

const Detail = ({ token, profile, history }) => {
  const [value, setValue] = React.useState()

  const { id } = useParams()

  const refetch = () => {
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
  }

  React.useEffect(() => {
    refetch()
  }, []) // eslint-disable-line

  if (!value) {
    return "Loading"
  }

  const isMine = `${profile.id}` === value.user_id
  const amAttending = value.attendees.find((x) => x.id === `${profile.id}`)

  return (
    <div>
      <ul>
        attendees:{" "}
        {value.attendees.length === 0
          ? "none"
          : value.attendees.map((x) => (
              <li>{`${x.email}, ${x.first_name} ${x.last_name}`}</li>
            ))}
      </ul>

      {isMine ? (
        <div>
          <EditForm value={value} setValue={setValue} />
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
          <button
            onClick={() => {
              axios({
                method: "delete",
                url: `${config.url}event/${id}`,

                headers: {
                  "Content-Type": "application/json",
                  Authorization: "Bearer " + token,
                },
              }).then((x) => {
                history.push(`/events`)
              })
            }}
          >
            delete event
          </button>
        </div>
      ) : (
        <div>
          <div>capacity: {value.capacity}</div>
          <div>date: {value.date}</div>
          <div>description: {value.description}</div>
          <div>time: {value.time}</div>
          <div>title: {value.title}</div>

          {amAttending ? (
            <button
              onClick={() => {
                axios({
                  method: "put",
                  url: `${config.url}event/${id}/leave`,

                  headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + token,
                  },
                }).then(() => {
                  refetch()
                })
              }}
            >
              Leave
            </button>
          ) : (
            <button
              onClick={() => {
                axios({
                  method: "put",
                  url: `${config.url}event/${id}/join`,

                  headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + token,
                  },
                }).then(() => {
                  refetch()
                })
              }}
            >
              Join
            </button>
          )}
        </div>
      )}
    </div>
  )
}

export default Detail
