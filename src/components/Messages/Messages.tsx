import React, { useState, useEffect, FormEvent } from "react"
import { fetchData } from "common/utils"
import { UserList } from "../UserList"
import { MessageContainer } from "./MessageContainer"
import * as S from "./Messages.styles"
import { User, Item, Data } from "."

export default () => {
  const [messages, setMessages] = useState<Item[]>([])
  const [activeUser, setActiveUser] = useState<number | undefined>(undefined)
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
    fetchData<Data>("messages").then((res) => setMessages(res.Items))
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
