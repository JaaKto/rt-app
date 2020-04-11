import React, { FC } from "react"
import * as S from "./Input.styles"

interface Input {
  name: string
  type: string
  placeholder: string
  handleChange: (e: any) => void
}

export const Input: FC<Input> = ({ name, type, placeholder, handleChange }) => (
  <S.InputContainer>
    <S.Label htmlFor={name}>{name}</S.Label>
    <S.Input
      id={name}
      type={type}
      placeholder={placeholder}
      name={name}
      onChange={(e: any) => handleChange(e)}
    />
  </S.InputContainer>
)
