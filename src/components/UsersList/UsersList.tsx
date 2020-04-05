import React, { useState, useEffect } from "react"

const loadData = async () => {
  const response = await fetch(
    "https://wlvzi8eq1m.execute-api.eu-west-1.amazonaws.com/dev/simpleAPI",
  )
  const json = await response.json()
  return json
}

export default () => {
  const [state, setState] = useState([])

  useEffect(() => {
    loadData().then(setState)
  }, [])
  console.log(state)

  return (
    <div>
      {state.map(({ id, username, age, isActive }) => (
        <p key={id}>
          {id}. {username} ({age}) - {isActive ? "active" : "inactive"}
        </p>
      ))}
    </div>
  )
}
