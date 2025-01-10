import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Button from '@mui/material/Button';
import DashboardComponent from './Components/Dashboard';
import Login from './Components/Login';
import LandingPage from './Components/LandingPage';

function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route exact={true} path="/login" element={<Login />} />
          <Route path="/dashboard" element={<DashboardComponent />} />
        </Routes>
    </Router>
  );
}

export default App;
