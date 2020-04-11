import React from "react"
import { Link, useLocation } from "react-router-dom"
import { navigationList, userPanelList } from "./utils"
import * as S from "./NavigationBar.styles"

export const NavigationBar = () => {
  const { pathname } = useLocation()
  const accessToken = !!localStorage.getItem("accessToken")
  return (
    <header>
      <S.NavBar>
        <S.List>
          {navigationList.map(({ path, name }) => (
            <S.ListItem isActive={path === pathname} key={name}>
              <Link to={path}>{name}</Link>
            </S.ListItem>
          ))}
        </S.List>
        <S.List>
          {userPanelList.map(({ path, name, isLoggedIn }) =>
            !isLoggedIn
              ? !accessToken && (
                  <S.ListItem isActive={path === pathname} key={name}>
                    <Link to={path}>{name}</Link>
                  </S.ListItem>
                )
              : accessToken && (
                  <S.ListItem isActive={false} key={name}>
                    <Link to={path} onClick={() => localStorage.clear()}>
                      {name}
                    </Link>
                  </S.ListItem>
                ),
          )}
        </S.List>
      </S.NavBar>
    </header>
  )
}
