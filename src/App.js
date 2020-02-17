import React, { lazy, Suspense } from 'react'
import { Switch, Redirect } from 'react-router-dom'
import PrivateLayout from './layouts/Private'
import './App.scss'
import PrivateRoute from './components/PrivateRoute'

const Dashboard = lazy(() => import('./pages/Dashboard'))
const Empty = lazy(() => import('./pages/EmptyPage'))

const App = () => {
  return (
    <div className="App">
      <Suspense fallback={<PrivateLayout />}>
        <Switch>
          <PrivateRoute exact path="/" component={Dashboard} />
          <PrivateRoute exact path="/contracts" component={Empty} />
          <PrivateRoute exact path="/rates" component={Empty} />
          <Redirect to="/" />
        </Switch>
      </Suspense>
    </div>
  );
}

export default App
