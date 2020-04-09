import React, { FC } from "react"
import * as S from "./UserList.styles"
import { User } from "../Messages"

type UserListProps = {
  users: User[]
  activeUser: number | null
  setActiveUser: any
}

export const UserList: FC<UserListProps> = ({
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
