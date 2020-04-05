import React from "react"
import { signInArr } from "common/utils"
import { Input } from "common/UI"
import * as S from "./LogIn.styles"

export default () => (
  <S.LogIn>
    <p>Log In</p>
    {signInArr.map((field) => (
      <Input key={field.id} {...{ ...field }} />
    ))}
    <button type="submit">Submit</button>
  </S.LogIn>
)
