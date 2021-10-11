import React from "react"
import Input from "components/Input"

const EditForm = ({ value, setValue }) => {
  return (
    <div>
      <div>
        <Input
          name="capacity"
          type="number"
          value={value.capacity}
          onChange={(v) => setValue({ ...value, capacity: v })}
        />
      </div>
      <div>
        <Input
          name="date"
          type="date"
          value={value.date}
          onChange={(v) => setValue({ ...value, date: v })}
        />
      </div>
      <div>
        <Input
          name="description"
          value={value.description}
          onChange={(v) => setValue({ ...value, description: v })}
        />
      </div>
      <div>
        <Input
          name="time"
          value={value.time}
          onChange={(v) => setValue({ ...value, time: v })}
        />
      </div>
      <div>
        <Input
          name="title"
          value={value.title}
          onChange={(v) => setValue({ ...value, title: v })}
        />
      </div>
    </div>
  )
}

export default EditForm
