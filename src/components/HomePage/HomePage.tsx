import React, { useState } from "react"
import { isAuthenticated } from "common/utils"

export default () => {
  const [isAuth, setAuth] = useState(isAuthenticated())
  return (
    <>
      <div>HomePage</div>
      <p>You're currently {!isAuth && "not"} log in</p>
    </>
  )
}
