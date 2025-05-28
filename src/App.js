import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import OAuthSuccess from './components/OAuthSuccess'; // ✅ NEW import
import Auth from './components/Auth';
import TaskDashboard from './components/TaskDashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/oauth-success" element={<OAuthSuccess />} /> {/* ✅ NEW route */}
        <Route path="/dashboard" element={<TaskDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
