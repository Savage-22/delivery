import { BrowserRouter as Router, Routes, Route} from 'react-router'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<h1 className='text-3xl font-bold underline'>Vite + React</h1>} />
      </Routes>
    </Router>
  )
};