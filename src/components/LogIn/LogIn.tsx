import React from "react"
import { Input } from "common/UI"
import { inputList } from "./utils"
import * as S from "./LogIn.styles"

export default () => (
  <S.LogIn>
    <p>Log In</p>
    {inputList.map((field) => (
      <Input key={field.id} {...{ ...field }} />
    ))}
    <button type="submit">Submit</button>
  </S.LogIn>
)
