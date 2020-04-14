import React, { FC, useState, useEffect } from "react"
import * as S from "./MessageContainer.styles"
import { fetchData } from "common/utils"
import { MessageField } from "./MessageField"

interface ActiveUser {
  activeUser: number | null
}

interface Item {
  id?: string | number
  activeUser?: ActiveUser
  value: string | null
}
interface Message {
  Items: Item[]
}

export const MessageContainer: FC<ActiveUser> = ({ activeUser }) => {
  const [messages, setMessages] = useState<Item[]>([])

  useEffect(() => {
    fetchData<Message>("messages").then((res) => setMessages(res.Items))
  }, [])

  return (
    <S.MessagesContainer>
      You've got{" "}
      {messages.filter(({ activeUser }) => activeUser == activeUser).length} new
      messages
      {messages &&
        messages
          .filter(({ activeUser }) => activeUser == activeUser)
          .map(({ id, activeUser, value }) => (
            <span key={id}>
              User{activeUser}: {value}
            </span>
          ))}
      <MessageField {...{ activeUser }} />
    </S.MessagesContainer>
  )
}
