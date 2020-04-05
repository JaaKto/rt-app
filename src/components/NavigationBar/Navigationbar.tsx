import React from "react"
import { Link, useLocation } from "react-router-dom"
import { navigationArr } from "../../common/utils/utils"
import * as S from "./NavigationBar.styles"

export default () => {
  const { pathname } = useLocation()
  return (
    <nav>
      <S.List>
        {navigationArr.map(({ path, name }) => (
          <S.ListItem isActive={path === pathname} key={name}>
            <Link to={path}>{name}</Link>
          </S.ListItem>
        ))}
      </S.List>
    </nav>
  )
}
