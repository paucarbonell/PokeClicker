import { BrowserRouter, Routes, Route } from 'react-router'
import './App.css'
import Game from './pages/Game'

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Game />} />
        </Routes>
        </BrowserRouter>
    </>
  )
}
