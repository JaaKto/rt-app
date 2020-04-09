import React, { useState, FC } from "react"
import * as S from "./Input.styles"

interface Input {
  name: string
  type: string
  placeholder: string
}

export const Input: FC<Input> = ({ name, type, placeholder }) => {
  const [value, setValue] = useState<string>("")
  return (
    <S.InputContainer>
      <S.Label htmlFor={name}>{name}</S.Label>
      <S.Input
        id={name}
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={(e: any) => setValue(e.target.value)}
      />
    </S.InputContainer>
  )
}
