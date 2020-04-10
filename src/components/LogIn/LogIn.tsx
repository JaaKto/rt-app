import React, { useState, FC, FormEvent } from "react"
import { useHistory } from "react-router-dom"
import { fetchData } from "common/utils"
import { Input } from "common/UI"
import { inputList } from "./utils"
import * as S from "./Login.styles"

type InputEvent = FormEvent<HTMLInputElement>

export const Login: FC = () => {
  const { push } = useHistory()
  const [error, setError] = useState("")
  const [token, setToken] = useState("")
  const [state, setState] = useState({
    email: "jakub@jakub.jakub",
    password: "jakub",
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
      .then((res: any) => localStorage.setItem("accessToken", res.accessToken))
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
          <Input key={field.id} {...{ ...field }} />
        ))}
        <button type="submit">Submit</button>
      </form>
    </S.LogIn>
  )
}
