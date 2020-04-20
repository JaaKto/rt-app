import React, { FC, Dispatch, SetStateAction, FormEvent } from "react"
import * as S from "./MessageContainer.styles"
import { MessageField } from "./MessageField"

interface Item {
  id: string | number
  activeUser: number | null
  value: string | null
  date: string
}
interface ActiveUser {
  messages: Item[]
  message: string
  setMessage: Dispatch<SetStateAction<string>>
  sendMessage: (event: FormEvent<HTMLFormElement>) => void
  activeUser: number | null
}

export const MessageContainer: FC<ActiveUser> = ({
  messages,
  message,
  setMessage,
  sendMessage,
  activeUser,
}) => {
  return (
    <S.MessagesContainer>
      {messages
        .sort((a, b) => new Date(a.date).valueOf() - new Date(b.date).valueOf())
        .filter(
          (message) =>
            message && message.activeUser && +message.activeUser === activeUser,
        )
        .map(({ id, activeUser, value, date }) => (
          <span key={id}>
            {new Date(date).toUTCString()} User {activeUser}: {value}
          </span>
        ))}
      {!!activeUser ? (
        <MessageField {...{ message, setMessage, sendMessage, activeUser }} />
      ) : (
        <p>Choose a friend</p>
      )}
    </S.MessagesContainer>
  )
}
