import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Button from '@mui/material/Button';
import DashboardComponent from './Components/Dashboard';
import Login from './Components/Login';
import BookAppointment from './Components/BookAppointment';

function App() {
  return (
    <Router>
      <Routes>
          <Route exact={true} path="/" element={<Login />} />
          <Route exact={true} path="/dashboard" element={<DashboardComponent />} />
          <Route exact={true} path="/bookappointment" element={<BookAppointment />} />
        </Routes>
    </Router>
  );
}

export default App;
