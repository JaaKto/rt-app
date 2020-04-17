import { getUsersUrl, loginUrl, signUpUrl, messages } from "."

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
  switch (endpoint.split("/")[0]) {
    case "login":
      return loginUrl(endpoint)
    case "register":
      return signUpUrl(endpoint)
    case "simpleAPI":
      return getUsersUrl(endpoint)
    case "messages":
      return messages(endpoint)
    default:
      return ""
  }
}

export const fetchData = <T>(
  endpoint: string,
  options = {} as Options,
): Promise<T> => {
  console.log("endpoint", endpoint)
  console.log("options", options)
  console.log("method", options.method || "GET")
  console.log("mode", {
    mode: options.method === "DELETE" ? "no-cors" : "cors",
  })
  return fetch(getUrl(endpoint), {
    method: options.method || "GET",
    // mode: options.method === "DELETE" ? "no-cors" : "cors", // no-cors, *cors, same-origin
    // cache: "reload", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "omit", // include, *same-origin, omit
    // redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *client
    headers: options.headers,
    body: JSON.stringify(options.body),
  })
    .then(handleError)
    .then((res) => res.json())
}
