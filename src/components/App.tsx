import React from "react"
import { Route, Switch } from "react-router-dom"
import { NavigationBar } from "./NavigationBar"
import { HomePage } from "./HomePage"
import { Messages } from "./Messages"
import { Login } from "./Login"
import { SignUp } from "./SignUp"
import * as S from "./App.styles"

const App = () => (
  <S.App>
    <NavigationBar />
    <Switch>
      <Route exact path="/" component={() => <HomePage />} />
      <Route exact path="/messages" component={() => <Messages />} />
      <Route exact path="/login" component={() => <Login />} />
      <Route exact path="/signup" component={() => <SignUp />} />
    </Switch>
  </S.App>
)

export default App
