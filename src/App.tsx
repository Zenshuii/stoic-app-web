import './App.css'
import LandingPage from './components/LandingPage'
import 'aos/dist/aos.css'
import AOS from 'aos'
import { useEffect, useLayoutEffect } from 'react'

function App() {
  useLayoutEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual'
    }

    const html = document.documentElement
    const prev = html.style.scrollBehavior
    html.style.scrollBehavior = 'auto'

    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
      html.style.scrollBehavior = prev
    })

    const onPageShow = (e: PageTransitionEvent) => {
      if (e.persisted) window.scrollTo(0, 0)
    }
    window.addEventListener('pageshow', onPageShow)

    return () => {
      window.removeEventListener('pageshow', onPageShow)
      if ('scrollRestoration' in history) {
        history.scrollRestoration = 'auto'
      }
    }
  }, [])

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
