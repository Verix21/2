import React from "react"
import { config } from "./config"
import axios from "axios"

const fakelogin = () =>
  new Promise((res, rej) => {
    setTimeout(() => {
      res({
        accessToken: "dfghhkkjhjk",
      })
    }, 2000)
  })

const Login = ({ setToken }) => {
  const [email, setEmail] = React.useState()
  const [passwd, setPasswd] = React.useState()
  const [shpw, setShpw] = React.useState()
  const [loading, setLoading] = React.useState()
  console.log(email)

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
            // axios
            //   .post(config.url + "auth/login", {
            //     email: email,
            //     password: passwd,
            //   })
            fakelogin().then(function (response) {
              setLoading()
              setToken(response.accessToken)
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
