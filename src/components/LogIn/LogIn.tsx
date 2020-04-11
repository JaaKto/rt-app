import React, { useState, FC, FormEvent } from "react"
import { useHistory } from "react-router-dom"
import { fetchData, setToken } from "common/utils"
import { Input } from "common/UI"
import { inputList } from "./utils"
import * as S from "./Login.styles"

export const Login: FC = () => {
  const { push } = useHistory()
  const [error, setError] = useState("")
  const [state, setState] = useState({
    email: "",
    password: "",
  })
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    const { email, password } = state
    e.preventDefault()
    fetchData("login", "login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
      body: { email, password },
    })
      .then((response) => setToken(response))
      .then(() => {
        push("/")
      })
      .catch(({ message }: Error) => {
        setError(message)
      })
  }
  return (
    <S.LogIn>
      <form onSubmit={handleSubmit}>
        <p>Log In</p>
        {inputList.map((field) => (
          <Input
            key={field.id}
            handleChange={(e: any) =>
              setState({ ...state, [field.name]: e.target.value })
            }
            {...{ ...field }}
          />
        ))}
        {error && <p>invalid data, try again</p>}
        <button type="submit">Submit</button>
      </form>
    </S.LogIn>
  )
}
