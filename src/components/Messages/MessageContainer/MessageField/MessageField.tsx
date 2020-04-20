import React, { useState, FC, FormEvent, ChangeEvent } from "react"
import { fetchData } from "common/utils"
import { Input } from "common/UI"
import * as S from "./MessageField.styles"

interface ActiveUser {
  activeUser: number | null
}

export const MessageField: FC<ActiveUser> = ({ activeUser }) => {
  const [error, setError] = useState("")
  const [value, setValue] = useState("")
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    fetchData("messages", {
      method: "POST",
      body: { activeUser, value },
    }).catch(({ message }: Error) => {
      setError(message)
    })
    setValue("")
  }
  return (
    <S.MessageField>
      <form onSubmit={handleSubmit}>
        <Input
          name="message"
          type="input"
          placeholder="Enter message"
          value={value}
          handleChange={(e: ChangeEvent<HTMLInputElement>) =>
            setValue(e.target.value)
          }
        />
      </form>
    </S.MessageField>
  )
}
