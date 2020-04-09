export type ConcatString = (val: string) => string

export const getUsersUrl: ConcatString = (endpoint) =>
  `https://wlvzi8eq1m.execute-api.eu-west-1.amazonaws.com/dev/${endpoint}`
