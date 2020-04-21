import { Dispatch, SetStateAction, FormEvent } from "react"

export interface User {
  id: number
  username: string
  age: number
  isActive: boolean
}

export interface ActiveUser {
  messages: Item[]
  message: string
  setMessage: Dispatch<SetStateAction<string>>
  sendMessage: (event: FormEvent<HTMLFormElement>) => void
  activeUser: number | null
}

export interface Item {
  id: string | number
  activeUser: number | null
  value: string | null
  date: string
}

export interface Data {
  Items: Item[]
}

export interface Message {
  message: string
  setMessage: Dispatch<SetStateAction<string>>
  sendMessage: (event: FormEvent<HTMLFormElement>) => void
}
