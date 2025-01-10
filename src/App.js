import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Button from '@mui/material/Button';
import DashboardComponent from './Components/Dashboard';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import BookAppointment from './Components/BookAppointment';
import LandingPage from './Components/LandingPage';

function App() {
  return (
    <Router>
      <Routes>
          {/* <Route exact={true} path="/" element={<Login />} /> */}
          <Route exact={true} path="/dashboard" element={<DashboardComponent />} />
          <Route exact={true} path="/bookappointment" element={<BookAppointment />} />
          <Route path="/" element={<LandingPage />} />
          <Route exact={true} path="/login" element={<Login />} />
          <Route exact={true} path="/register" element={<SignUp />} />
          <Route path="/dashboard" element={<DashboardComponent />} />
        </Routes>
    </Router>
  );
}

export default App;
