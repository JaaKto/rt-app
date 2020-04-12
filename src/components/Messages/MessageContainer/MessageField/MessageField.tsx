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
    console.log({ user: activeUser, value: value })
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
