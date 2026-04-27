import { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { initClarity } from './lib/clarity'
import { LandingPage } from './pages/LandingPage'
import { ThankYouPage } from './pages/ThankYouPage'

function App() {
  useEffect(() => {
    initClarity()
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/thank-you" element={<ThankYouPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
