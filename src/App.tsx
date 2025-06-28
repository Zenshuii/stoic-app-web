import './App.css'
import LandingPage from './components/LandingPage'
import 'aos/dist/aos.css'
import AOS from 'aos'
import { useEffect } from 'react'

function App() {
  useEffect(() => {
    AOS.init({
      duration: 600,
      once: true,
      easing: 'ease-in-out',
    })
  }, [])

  return (
    <>
      <div>
        <LandingPage />
      </div>
    </>
  )
}

export default App
