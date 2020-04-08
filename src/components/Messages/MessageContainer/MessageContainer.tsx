import React from "react"
import * as S from "./MessageContainer.styles"

export const MessageContainer = ({ activeUser }: { activeUser: any }) => (
  <S.MessagesContainer>
    Your Conversation {activeUser && ` with User${activeUser}`}
  </S.MessagesContainer>
)
