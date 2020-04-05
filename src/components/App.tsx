import React from "react"
import { Route, Switch } from "react-router-dom"
import { NavigationBar } from "./NavigationBar"
import { UsersList } from "./UsersList"
import * as S from "./App.styles"

const App = () => (
  <S.App>
    <NavigationBar />
    <Route exact path="/userslist" component={() => <UsersList />} />
  </S.App>
)

export default App
