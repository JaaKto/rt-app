import React, { FC } from "react"
import { Input } from "common/UI"
import * as S from "./MessageField.styles"
import { Message } from "../.."

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
