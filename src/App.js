import React from "react";
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import DashboardComponent from './Components/Dashboard';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import BookAppointment from './Components/BookAppointment';
import LandingPage from './Components/LandingPage';

function App() {
  const authToken = sessionStorage.getItem("authToken") || null;

  return (
    <Router>
      <Routes>
          {/* <Route exact={true} path="/" element={<Login />} /> */}
          {
            authToken && <Route exact={true} path="/dashboard" element={<DashboardComponent />} />
          }
          <Route exact={true} path="/bookappointment" element={<BookAppointment />} />
          <Route path="/" element={<LandingPage />} />
          <Route exact={true} path="/login" element={<Login />} />
          <Route exact={true} path="/register" element={<SignUp />} />
          <Route path="*" element={<Login />}  />
        </Routes>
    </Router>
  );
}

export default App;
