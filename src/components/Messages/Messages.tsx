import React, { useState, useEffect } from "react"
import { fetchData } from "common/utils"
import { UserList } from "../UserList"
import { MessageContainer } from "./MessageContainer"
import { MessageField } from "./MessageContainer/MessageField"
import * as S from "./Messages.styles"
import { User } from "."

export default () => {
  const [activeUser, setActiveUser] = useState<number | null>(null)
  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    fetchData<User[]>("simpleAPI").then((res) => setUsers(res))
  }, [])

  return (
    <S.Messages>
      <UserList {...{ users, activeUser, setActiveUser }} />
      <MessageContainer {...{ activeUser }} />
    </S.Messages>
  )
}
