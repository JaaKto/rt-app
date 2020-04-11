export const navigationList = [
  {
    path: "/",
    name: "Home",
    authorized: false,
  },
  {
    path: "/messages",
    name: "Messages",
    authorized: true,
  },
]

export const userPanelList = [
  {
    path: "/login",
    name: "Log in",
    authorized: false,
  },
  {
    path: "/signup",
    name: "Sign up",
    authorized: false,
  },
  {
    path: "/",
    name: "Log out",
    authorized: true,
  },
]
