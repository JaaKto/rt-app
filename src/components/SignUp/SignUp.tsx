import React from "react"
import { Input } from "common/UI"
import { inputList } from "./utils"
import * as S from "./SignUp.styles"

export default () => (
  <S.SignUp>
    <p>Sign up</p>
    {inputList.map((field) => (
      <Input key={field.id} {...{ ...field }} />
    ))}
    <button type="submit">Submit</button>
  </S.SignUp>
)
