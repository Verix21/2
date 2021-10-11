import axios from "axios"
import React from "react"
import { config } from "config"
import EditForm from "components/EditForm"
import * as R from "ramda"
import Button from "components/Button"

const Create = ({ token, history }) => {
  const [value, setValue] = React.useState({})

  return (
    <div class="events">
      <EditForm value={value} setValue={setValue} />
      <Button
        onClick={() => {
          axios({
            method: "post",
            url: `${config.url}event`,
            data: R.pick(
              ["title", "date", "time", "description", "capacity"],
              value,
            ),
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + token,
            },
          }).then((x) => {
            console.log(x)
            history.push(`/detail/${x.data[0].id}`)
          })
        }}
        text="create"
      />
    </div>
  )
}

export default Create
