import React, { useState, useEffect, FormEvent } from "react"
import { fetchData } from "common/utils"
import { UserList } from "../UserList"
import { MessageContainer } from "./MessageContainer"
import * as S from "./Messages.styles"
import { User } from "."

interface Item {
  id?: string | number
  activeUser?: number | null
  value?: string | null
  date: string
}

interface Messages {
  Items: Item[]
}

export default () => {
  const [messages, setMessages] = useState<Item[]>([])

  const [activeUser, setActiveUser] = useState<number | null>(null)
  const [users, setUsers] = useState<User[]>([])
  const [error, setError] = useState("")
  const [message, setMessage] = useState("")
  const sendMessage = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    fetchData("messages", {
      method: "POST",
      body: { activeUser, value: message, date: new Date() },
    })
      .catch(({ message }: Error) => {
        setError(message)
      })
      .then(() => setMessage(""))
  }

  useEffect(() => {
    fetchData<Messages>("messages").then((res) => setMessages(res.Items))
  }, [message])

  useEffect(() => {
    fetchData<User[]>("simpleAPI").then((res) => setUsers(res))
  }, [])

  return (
    <S.Messages>
      <UserList {...{ users, activeUser, setActiveUser }} />
      <MessageContainer
        {...{ messages, message, setMessage, sendMessage, activeUser }}
      />
    </S.Messages>
  )
}
