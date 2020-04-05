import React from "react"
import { Route, Switch } from "react-router-dom"
import { NavigationBar } from "./NavigationBar"
import { UsersList } from "./UsersList"
import { HomePage } from "./HomePage"
import { LogIn } from "./LogIn"
import { SignUp } from "./SignUp"
import * as S from "./App.styles"

const App = () => (
  <S.App>
    <NavigationBar />
    <Switch>
      <Route exact path="/" component={() => <HomePage />} />
      <Route exact path="/userslist" component={() => <UsersList />} />
      <Route exact path="/login" component={() => <LogIn />} />
      <Route exact path="/signup" component={() => <SignUp />} />
    </Switch>
  </S.App>
)

export default App
