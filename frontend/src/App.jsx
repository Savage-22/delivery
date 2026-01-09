import { BrowserRouter as Router, Routes, Route} from 'react-router'
import Home from './pages/Home.jsx';
import Dashboard from './pages/Dashboard.jsx';

export default function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
      </div>
    </Router>
  )
};