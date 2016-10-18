import { Route, IndexRedirect } from 'react-router'
import UsersList from './containers/UsersList'
import SnacksList from './containers/SnacksList'
import App from './components/App'
import React from 'react'

export default (
  <Route path='/' component={App}>
    <IndexRedirect to='/pantry' />
    <Route path='pantry' component={UsersList} />
    <Route path='pantry/:user' component={SnacksList} />
  </Route>
)
