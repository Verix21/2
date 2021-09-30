import React from "react"
import { config } from "./config"
import axios from "axios"

const Login = ({ setToken }) => {
  const [email, setEmail] = React.useState("john@doe.com")
  const [passwd, setPasswd] = React.useState("hunter2")
  const [shpw, setShpw] = React.useState()
  const [loading, setLoading] = React.useState()

  return (
    <div>
      <div>
        <input value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <input
          type={shpw ? "text" : "password"}
          value={passwd}
          onChange={(e) => setPasswd(e.target.value)}
        />
        <button onClick={() => setShpw(!shpw)}>
          {" "}
          {shpw ? "Hide" : "Show"}
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            setLoading(true)
            axios
              .post(config.url + "auth/login", {
                email: email,
                password: passwd,
              })
              .then(function (response) {
                setLoading()

                setToken(response.data.accessToken)
              })
          }}
          disabled={loading}
        >
          {loading ? "Loading" : "Login"}
        </button>
      </div>
    </div>
  )
}

export default Login
