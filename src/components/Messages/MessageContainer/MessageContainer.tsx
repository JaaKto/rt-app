import React from "react"
import * as S from "./MessageContainer.styles"

export const MessageContainer = ({
  activeUser,
}: {
  activeUser: number | null
}) => (
  <S.MessagesContainer>
    Your Conversation {activeUser && ` with User ${activeUser}`}
  </S.MessagesContainer>
)
