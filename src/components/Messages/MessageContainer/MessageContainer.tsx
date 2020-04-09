import React, { FC } from "react"
import * as S from "./MessageContainer.styles"

interface ActiveUser {
  activeUser: number | null
}

export const MessageContainer: FC<ActiveUser> = ({ activeUser }) => (
  <S.MessagesContainer>
    Your Conversation {activeUser && ` with User ${activeUser}`}
  </S.MessagesContainer>
)
