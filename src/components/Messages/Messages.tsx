import React, { useState, useEffect } from "react"
import { UserList } from "../UserList"
import { MessageContainer } from "./MessageContainer"
import * as S from "./Messages.styles"

const loadData = async () => {
  const response = await fetch(
    "https://wlvzi8eq1m.execute-api.eu-west-1.amazonaws.com/dev/simpleAPI",
  )
  const json = await response.json()
  return json
}

export default () => {
  const [activeUser, setActiveUser] = useState<number | null>(null)
  const [users, setUsers] = useState([])

  useEffect(() => {
    loadData().then(setUsers)
  }, [])

  return (
    <S.Messages>
      <UserList {...{ users, activeUser, setActiveUser }} />
      <MessageContainer {...{ activeUser }} />
    </S.Messages>
  )
}
