import React from "react"

const Login = () => {
  const [email, setEmail] = React.useState()
  const [passwd, setPasswd] = React.useState()
  const [shpw, setShpw] = React.useState()
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
    </div>
  )
}

export default Login
