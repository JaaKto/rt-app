import React from "react"
import { Link, useLocation } from "react-router-dom"
import { navigationArr } from "../../common/utils/utils"

export default () => {
  const { pathname } = useLocation()
  return (
    <nav>
      <ul>
        {navigationArr.map(({ path, name }) => (
          <li key={name}>
            <Link
              style={{ color: `${path === pathname ? "red" : "black"}` }}
              to={path}
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
