import React from 'react'
import Signup from './Signup'
import {Container} from 'react-bootstrap'
import { AuthProvider } from '../contexts/AuthContext'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './Dashboard'
import Login from './Login'
import PrivateRoute from './PrivateRoute'
import ForgotPassword from './ForgotPassword'
import UpdateProfile from './UpdateProfile'

export default function App() {
  return (
   
    <Container 
      className="d-flex align-items-center justify-content-center"
      style={{minHeight: "100vh"}}
    >
      <div className="w-100" style={{maxWidth: "400px"}}>
        <Router>
          <AuthProvider>
            <Routes>
              <Route exact path="/" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
              <Route path="/update-profile" element={<PrivateRoute><UpdateProfile /></PrivateRoute>} />
              <Route path="/signup" Component={Signup} />
              <Route path="/login" Component={Login} />
              <Route path="/forgot-password" Component={ForgotPassword}></Route>
            </Routes>
          </AuthProvider>
        </Router>
      </div>
    </Container>
   
  )
}
