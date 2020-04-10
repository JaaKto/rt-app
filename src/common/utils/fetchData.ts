import { getUsersUrl, loginUrl } from "."

interface Options {
  method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH"
  headers?: any
  body?: any
}

const handleError = (res: Response) => {
  if (!res.ok) {
    throw new Error(res.statusText)
  }
  return res
}

const getUrl = (url: string, endpoint: string) => {
  switch (url) {
    case "login":
      return loginUrl(endpoint)
    case "getUsers":
      return getUsersUrl(endpoint)
    default:
      return ""
  }
}

export const fetchData = <T>(
  url: string,
  endpoint: string,
  options = {} as Options,
): Promise<T> =>
  fetch(getUrl(url, endpoint), {
    method: options.method || "GET",
    headers: { ...options.headers },
    body: JSON.stringify(options.body),
  })
    .then(handleError)
    .then((res) => res.json())
