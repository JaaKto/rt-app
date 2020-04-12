import React, { FC, useState, useEffect } from "react"
import * as S from "./MessageContainer.styles"
import { fetchData } from "common/utils"
import { MessageField } from "./MessageField"

interface ActiveUser {
  activeUser: number | null
}

interface Item {
  id?: number | string
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
      You've got {messages.filter(({ id }) => id == activeUser).length} new
      messages
      {messages &&
        messages
          .filter(({ id }) => id == activeUser)
          .map(({ id, value }) => (
            <span key={id}>
              User{id}: {value}
            </span>
          ))}
      <MessageField {...{ activeUser }} />
    </S.MessagesContainer>
  )
}
