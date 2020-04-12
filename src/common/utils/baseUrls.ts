const PROTOCOL: string = "http"
const HOST: string = "localhost"
const PORT: number = 8000

export type ConcatString = (val: string) => string

export const getUsersUrl: ConcatString = (endpoint) =>
  `https://wlvzi8eq1m.execute-api.eu-west-1.amazonaws.com/dev/${endpoint}`

export const messages = () =>
  "https://0d6jhab182.execute-api.eu-west-1.amazonaws.com/dev/messages"

export const loginUrl: ConcatString = (endpoint) =>
  `${PROTOCOL}://${HOST}:${PORT}/${endpoint}`

export const signUpUrl: ConcatString = (endpoint) =>
  `${PROTOCOL}://${HOST}:${PORT}/${endpoint}`
