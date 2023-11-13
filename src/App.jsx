import { useState } from 'react'
import LandingPages from './pages/LandingPages'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SearchCar from './pages/SearchCar'
import CarsDetail from './pages/CarsDetail'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPages/>}/>
        <Route path="/search-cars" element={<SearchCar/>}/>
        <Route path="/detail-car/:id" element={<CarsDetail/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
