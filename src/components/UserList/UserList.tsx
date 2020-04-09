import React, { FC } from "react"
import * as S from "./UserList.styles"
import { User } from "../Messages"

interface UserList {
  users: User[]
  activeUser: number | null
  setActiveUser: (id: number) => void
}

export const UserList: FC<UserList> = ({
  users,
  activeUser,
  setActiveUser,
}) => (
  <div>
    {users.map(({ id, username, age, isActive }) => (
      <S.User
        key={id}
        onClick={() => setActiveUser(id)}
        isActive={id === activeUser}
      >
        {id}. {username} ({age}) - {isActive ? "active" : "inactive"}
      </S.User>
    ))}
  </div>
)
