import React, { FC, useState, useEffect, MouseEvent } from "react"
import * as S from "./MessageContainer.styles"
import { fetchData } from "common/utils"
import { MessageField } from "./MessageField"
import axios from "axios"

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
  const [error, setError] = useState("")

  const handleRemove = (
    e: MouseEvent<HTMLSpanElement>,
    id: string | number | undefined,
  ) => {
    e.preventDefault()
    fetchData(`messages/${id}`, {
      method: "DELETE",
    }).catch(({ message }: Error) => {
      setError(message)
    })
  }

  useEffect(() => {
    fetchData<Message>("messages").then((res) => setMessages(res.Items))
  }, [])

  return (
    <S.MessagesContainer>
      <button
        onClick={() =>
          axios(
            `https://0d6jhab182.execute-api.eu-west-1.amazonaws.com/dev/messages/${messages[0].id}`,
            {
              method: "DELETE",
            },
          )
        }
      >
        Axios delete first
      </button>
      <button
        onClick={() =>
          fetch(
            "https://0d6jhab182.execute-api.eu-west-1.amazonaws.com/dev/messages",
            {
              method: "GET", // *GET, POST, PUT, DELETE, etc.
              mode: "cors", // no-cors, *cors, same-origin
            },
          )
            .then((res) => res.json())
            .then((data) => console.log(data))
        }
      >
        messages
      </button>
      <button
        onClick={() =>
          fetch(
            "https://0d6jhab182.execute-api.eu-west-1.amazonaws.com/dev/messages/19fabb43-fe91-4f79-8c82-4bee80ea555d",
            // `https://0d6jhab182.execute-api.eu-west-1.amazonaws.com/dev/messages/${messages[0].id}`,
            {
              method: "delete", // *GET, POST, PUT, DELETE, etc.
              mode: "cors", // no-cors, *cors, same-origin
              // cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
              // credentials: "include", // include, *same-origin, omit
              // headers: {
              //   "Content-Type": "application/json",
              //   // 'Content-Type': 'application/x-www-form-urlencoded',
              // },
              // redirect: "follow", // manual, *follow, error
              // referrerPolicy: "no-referrer", // no-referrer, *client
              // body: JSON.stringify(data), // body data type must match "Content-Type" header
            },
          ).then((res) => res.json())
        }
      >
        Dlete first message
      </button>
      You've got{" "}
      {messages.filter(({ activeUser }) => activeUser == activeUser).length} new
      messages
      {messages &&
        messages
          .filter(({ activeUser }) => activeUser == activeUser)
          .map(({ id, activeUser, value }) => (
            <span
              key={id}
              onClick={(e) => {
                console.log(messages)
                handleRemove(e, id)
              }}
            >
              User {activeUser}: {value}
            </span>
          ))}
      <MessageField {...{ activeUser }} />
    </S.MessagesContainer>
  )
}
