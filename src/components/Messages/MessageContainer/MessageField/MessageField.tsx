import React, { useState, FC, FormEvent, ChangeEvent } from "react"
import { fetchData } from "common/utils"
import { Input } from "common/UI"
import * as S from "./MessageField.styles"
import { Message } from "./index"

interface ActiveUser {
  activeUser: number | null
}

export const MessageField: FC<ActiveUser> = ({ activeUser }) => {
  const [error, setError] = useState("")
  const [value, setValue] = useState("")
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    console.log({ id: activeUser, value: value })
    e.preventDefault()
    fetchData("messages", {
      method: "POST",
      headers: new Headers({
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      }),
      body: { id: activeUser, value: value },
    }).catch(({ message }: Error) => {
      setError(message)
    })
  }
  return (
    <S.MessageField>
      <form onSubmit={handleSubmit}>
        <Input
          name="message"
          type="input"
          placeholder="Enter message"
          handleChange={(e: ChangeEvent<HTMLInputElement>) =>
            setValue(e.target.value)
          }
        />
      </form>
    </S.MessageField>
  )
}
