import { getUsersUrl, loginUrl, signUpUrl } from "."

type ObjectMap = { [key: string]: unknown }
interface Options {
  method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH"
  headers?: Headers
  body?: ObjectMap
}

const handleError = (res: Response) => {
  if (!res.ok) {
    throw new Error(res.statusText)
  }
  return res
}

const getUrl = (endpoint: string) => {
  switch (endpoint) {
    case "login":
      return loginUrl(endpoint)
    case "register":
      return signUpUrl(endpoint)
    case "simpleAPI":
      return getUsersUrl(endpoint)
    default:
      return ""
  }
}

export const fetchData = <T>(
  endpoint: string,
  options = {} as Options,
): Promise<T> =>
  fetch(getUrl(endpoint), {
    method: options.method || "GET",
    headers: { ...options.headers },
    body: JSON.stringify(options.body),
  })
    .then(handleError)
    .then((res) => res.json())
