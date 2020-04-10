import React, { useState, FC } from "react"
import * as S from "./Input.styles"

interface Input {
  name: string
  type: string
  placeholder: string
  // value: any
  handleChange: (e: any) => void
}

export const Input: FC<Input> = ({
  name,
  type,
  placeholder,
  // value,
  handleChange,
}) => {
  // const [value, setValue] = useState<string>("")
  return (
    <S.InputContainer>
      <S.Label htmlFor={name}>{name}</S.Label>
      <S.Input
        id={name}
        type={type}
        placeholder={placeholder}
        name={name}
        // value={value}
        onChange={(e: any) => handleChange(e)}
      />
    </S.InputContainer>
  )
}
