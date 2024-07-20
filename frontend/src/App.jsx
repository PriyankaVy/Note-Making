import react from "react"
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import ProtectedRoute from "./components/ProtectedRoute"
import Form from "./components/Form"

function Logout() {
  localStorage.clear()
  return <Navigate to="/login" />
}

function RegisterAndLogout() {
  localStorage.clear()
  return <Register />
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/home" element = {<ProtectedRoute><Home /></ProtectedRoute>}/> 
        <Route path = "/login" element = {<form route="/api/token/" method="login" />}/>
        <Route path = "/logout" element = {<Logout />}/>
        <Route path = "/register" element = {<form route="/api/user/register/" method="register" />}/>
        <Route path = "/" element = {<Navigate to="/login" />}/>
        <Route path= "*" element = {<NotFound />}/>
      </Routes>  
    </BrowserRouter>
  )
}

export default App
