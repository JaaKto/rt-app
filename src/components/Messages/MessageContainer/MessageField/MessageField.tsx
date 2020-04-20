import React, { FC, FormEvent, Dispatch, SetStateAction } from "react"
import { Input } from "common/UI"
import * as S from "./MessageField.styles"

interface Message {
  message: string
  setMessage: Dispatch<SetStateAction<string>>
  sendMessage: (event: FormEvent<HTMLFormElement>) => void
}

export const MessageField: FC<Message> = ({
  message,
  setMessage,
  sendMessage,
}) => {
  return (
    <S.MessageField>
      <form onSubmit={sendMessage}>
        <Input
          name="message"
          type="input"
          placeholder="Enter message"
          value={message}
          handleChange={(e) => setMessage(e.target.value)}
        />
      </form>
    </S.MessageField>
  )
}
