import React, { Suspense } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'
import {
    DashboardPage,
    SigninPage,
} from '../containers'

const routes =  [
    {
        path: '/dashboard',
        component: DashboardPage,
        exact: true
      }
]

const WithAuthenRoute = ({ component: Component, user, ...others }) => {
  return (
    <Route
      {...others}
      render={(props) => {
        if (user) {
          return (
              <Component {...props} />
          )
        }
        return <Redirect to='/auth/signin' />
      }}
    />
  )
}

const renderAuthenticatedRoute = (user) => {
  return routes.map(({ path, component }) => (
    <WithAuthenRoute key={path} path={path} component={component} user={user}/>
  ))
}

function Routes() {
  const user = useSelector((state) => state.auth.token)

  return (
    <Suspense fallback=''>
      <Switch>
        <Route exact path='/' render={() => <Redirect to='/dashboard' />} />
        {renderAuthenticatedRoute(user)}
        <Route
          path='/auth'
          render={({ match: { url } }) => (
            <>
              <Route
                path={`${url}/`}
                render={({children}) => {
                  if (user) {
                    return <Redirect to='/dashboard' />
                  }
                  return children
                }}             
              />
              <Route exact path={`${url}/signin`} component={SigninPage} />
            </>
          )}
        />
        <Route
          path='/not-found'
          component={() => (
            <h1 style={{ textAlign: 'center', height:'50%' }}>404 PAGE NOT FOUND</h1>
          )}
        />
        <Redirect to='/not-found' />
      </Switch>
    </Suspense>
  )
}

export default Routes
