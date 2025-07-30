import { useState } from 'react'
import SearchResults from './pages/SearchResults'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchResults />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
