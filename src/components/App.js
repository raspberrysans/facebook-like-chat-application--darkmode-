import React from "react"

import { BrowserRouter, Switch, Route } from "react-router-dom"

import { AuthProvider } from "../contexts/AuthContext"

import Chats from "./Chats"
import Login from "./Login"

function App() {
  return (
    <div>
      <BrowserRouter>
        <AuthProvider>
          <Switch>
            <Route path="/chats" component={Chats} />
            <Route path="/" component={Login} /> 
          </Switch>
        </AuthProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
