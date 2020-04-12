import React, { FC } from "react"
import * as S from "./MessageContainer.styles"
import { MessageField } from "./MessageField"

interface ActiveUser {
  activeUser: number | null
}

export const MessageContainer: FC<ActiveUser> = ({ activeUser }) => (
  <S.MessagesContainer>
    <span>Your Conversation {activeUser && ` with User ${activeUser}`}</span>
    <MessageField {...{ activeUser }} />
  </S.MessagesContainer>
)
