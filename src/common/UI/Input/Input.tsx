import React, { useState } from "react"
import * as S from "./Input.styles"

type InputProps = {
  name: string
  type: string
  placeholder: string
}

export default ({ name, type, placeholder }: InputProps) => {
  const [value, setValue] = useState("")
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
