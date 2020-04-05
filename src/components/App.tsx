import React from "react"
import { Route, Switch } from "react-router-dom"
import { NavigationBar } from "./NavigationBar"
import { UsersList } from "./UsersList"
import { HomePage } from "./HomePage"
import * as S from "./App.styles"

const App = () => (
  <S.App>
    <NavigationBar />
    <Switch>
      <Route exact path="/userslist" component={() => <UsersList />} />
      <Route exact path="/" component={() => <HomePage />} />
    </Switch>
  </S.App>
)

export default App
