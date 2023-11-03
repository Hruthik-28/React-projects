import GamePage from './components/GamePage'
import HomePage from './components/HomePage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter >
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="gamePage" element={<GamePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
