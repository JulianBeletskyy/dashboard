import React, { lazy, Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'
import PrivateLayout from './layouts/Private'
import './App.scss'

const Dashboard = lazy(() => import('./pages/Dashboard'))

function App() {
  return (
    <div className="App">
      <PrivateLayout>
        <Suspense fallback={<div style={{height: '100vh'}}></div>}>
          <Switch>
            <Route exact path="/" component={Dashboard} />
          </Switch>
        </Suspense>
      </PrivateLayout>
    </div>
  );
}

export default App;
