export const setToken = (response: any) => {
  response.accessToken && localStorage.setItem("token", response.accessToken)
  return response
}

export const logout = () => {
  localStorage.removeItem("token")
}

export const isAuthenticated = () => {
  return !!localStorage.getItem("token")
}
