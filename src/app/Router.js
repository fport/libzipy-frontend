import React from 'react'
import { BrowserRouter as Routers, Route, Switch } from 'react-router-dom'
import axios from 'axios'
import { LandingPage, NotFoundPage } from './screens'
import { Provider } from 'react-redux'
import store from './redux/store'

const Router = () => {
  axios.defaults.baseURL = process.env.REACT_APP_API_URL || 'localhost:3000'
  return (
    <Provider store={store}>
      <Routers>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="*" component={NotFoundPage} />
        </Switch>
      </Routers>
    </Provider>
  )
}

export default Router