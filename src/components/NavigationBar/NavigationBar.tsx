import React from "react"
import { Link, useLocation } from "react-router-dom"
import { navigationList, userPanelList } from "./utils"
import { isAuthenticated, logout } from "common/utils"

import * as S from "./NavigationBar.styles"

export const NavigationBar = () => {
  const { pathname } = useLocation()
  return (
    <header>
      <S.NavBar>
        <S.List>
          {navigationList
            .filter(
              ({ authorized }) =>
                !authorized || isAuthenticated() === authorized,
            )
            .map(({ path, name }) => (
              <S.ListItem isActive={path === pathname} key={name}>
                <Link to={path}>{name}</Link>
              </S.ListItem>
            ))}
        </S.List>
        <S.List>
          {userPanelList
            .filter(({ authorized }) => isAuthenticated() === authorized)
            .map(({ path, name }) =>
              !isAuthenticated ? (
                <S.ListItem isActive={path === pathname} key={name}>
                  <Link to={path}>{name}</Link>
                </S.ListItem>
              ) : (
                <S.ListItem isActive={false} key={name}>
                  <Link to={path} onClick={() => logout()}>
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
