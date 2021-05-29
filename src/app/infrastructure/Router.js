import React from 'react'
import { BrowserRouter as Routers, Route, Switch } from 'react-router-dom'
import {
  LandingPage,
  LoginPage,
  RegisterPage,
  Dashboard,
  NotFoundPage,
  ReleaseNotes,
  LandAuthor,
  LandLibrary,
  LandBooks
} from './views/index'
import { Provider } from 'react-redux'
import store from '../store'

const Router = () => {
  return (
    <Provider store={store}>
      <Routers>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/release" component={ReleaseNotes} />
          <Route path="/library" component={LandLibrary} />
          <Route path="/books" component={LandBooks} />
          <Route path="/author" component={LandAuthor} />
          <Route path="*" component={NotFoundPage} />
        </Switch>
      </Routers>
    </Provider>
  )
}

export default Router
