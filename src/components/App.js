import React from 'react'
import Signup from './auth/Signup'
import Login from './auth/Login'
import LandingPage from './LandingPage'
import Dashboard from './Dashboard'
import ForgotPassword from './ForgotPassword'
import UpdateProfile from './auth/UpdateProfile'
import PrivateRoute from './PrivateRoute'
import { AuthProvider } from './auth/AuthContext'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Router>
        <AuthProvider>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <PrivateRoute path="/dashboard" component={Dashboard} />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/forgot-password" component={ForgotPassword} />
            <Route path="/update-profile" component={UpdateProfile} />
          </Switch>
        </AuthProvider>
      </Router>
    </>
  )
}

export default App