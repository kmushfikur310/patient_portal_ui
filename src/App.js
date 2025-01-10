import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Button from '@mui/material/Button';
import DashboardComponent from './Components/Dashboard';
import Login from './Components/Login';

function App() {
  return (
    <Router>
      <Routes>
          <Route exact={true} path="/" element={<Login />} />
          <Route exact={true} path="/dashboard" element={<DashboardComponent />} />
        </Routes>
    </Router>
  );
}

export default App;
