import React, { useState } from "react"

export default () => {
  const [isAuth, setAuth] = useState(!!localStorage.getItem("accessToken"))
  return (
    <>
      <div>HomePage</div>
      You're currently {!isAuth && "not"} log in
      {isAuth && (
        <>
          <p>Clear local storage to log out</p>
          <button
            onClick={() => {
              localStorage.clear()
              setAuth(false)
            }}
          >
            Clear
          </button>
        </>
      )}
    </>
  )
}
