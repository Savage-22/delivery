import { BrowserRouter as Router, Routes, Route} from 'react-router'
import Home from './pages/Home.jsx';

export default function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home />} />
      </Routes>
      </div>
    </Router>
  )
};