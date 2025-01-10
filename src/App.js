import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Button from '@mui/material/Button';
import DashboardComponent from './Components/Dashboard';

function App() {
  return (
    <Router>
      <div className="App">
        <Button variant="contained">Hello world</Button>
      </div>
      <Routes>
          <Route path="/dashboard" element={<DashboardComponent />} />
        </Routes>
    </Router>
  );
}

export default App;
