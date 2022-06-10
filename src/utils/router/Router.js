import * as React from 'react'
import { Switch, Route } from 'react-router-dom'
import PropTypes from 'prop-types'

function SwitchWithRoutes({ routes = [] }) {
  const allRoutes = routes.map((route) => createRoute(route))
  return <Switch>{allRoutes}</Switch>
}

function createRoute(route) {
  const key = `${route.path}-${route.name}`
  const Component = route.comp
  return (
    <Route key={key} path={route.path} {...route}>
      <Component />
    </Route>
  )
}

SwitchWithRoutes.propTypes = {
  routes: PropTypes.array.isRequired,
}

export default SwitchWithRoutes
