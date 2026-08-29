import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'

// Support legacy hash URLs like /#/vanam → /Vanam
;(() => {
  const { hash, search } = window.location
  if (!hash.startsWith('#/')) return
  const legacyPath = hash.slice(1) // e.g. /vanam or /vanam?x=1
  const [pathOnly, hashQuery = ''] = legacyPath.split('?')
  const normalized =
    pathOnly.toLowerCase() === '/vanam' ? '/Vanam' : pathOnly || '/'
  const nextSearch = hashQuery
    ? `?${hashQuery}${search ? `&${search.slice(1)}` : ''}`
    : search
  window.history.replaceState(null, '', `${normalized}${nextSearch}`)
})()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
