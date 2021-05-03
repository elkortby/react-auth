import React from 'react'
import Signup from './auth/Signup'
import Login from './auth/Login'
import Blog from './Blog'
import LandingPage from './LandingPage'
import Dashboard from './Dashboard'
import ForgotPassword from './ForgotPassword'
import UpdateProfile from './auth/UpdateProfile'
import PrivateRoute from './PrivateRoute'
import { AuthProvider } from './auth/AuthContext'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import "./App.css"

function App() {
  return (
    <>
      <Router>
        <AuthProvider>
          <div className="App">
            <Switch>
              <Route exact path="/" component={LandingPage} />
              <PrivateRoute path="/dashboard" component={Dashboard} />
              <Route path="/signup" component={Signup} />
              <Route path="/blog" component={Blog} />
              <Route path="/login" component={Login} />
              <Route path="/forgot-password" component={ForgotPassword} />
              <Route path="/update-profile" component={UpdateProfile} />
            </Switch>
          </div>
        </AuthProvider>
      </Router>
    </>
  )
}

export default App