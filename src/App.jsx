import { useState } from 'react'
import { FontProvider } from './FontContext'
import { FontSizeBar } from './components/FontSizeBar'
import { Home } from './pages/Home'
import { Dad } from './pages/Dad'
import { Mom } from './pages/Mom'

function AppInner() {
  const [page, setPage] = useState('home')

  const navigate = (to) => {
    setPage(to)
    window.scrollTo(0, 0)
  }

  return (
    <div style={{ maxWidth: 430, margin: '0 auto', minHeight: '100vh', background: 'var(--bg)', paddingBottom: 40 }}>
      {page === 'home' && <FontSizeBar />}
      {page === 'home' && <Home onNavigate={navigate} />}
      {page === 'dad'  && <Dad  onBack={() => navigate('home')} />}
      {page === 'mom'  && <Mom  onBack={() => navigate('home')} />}
    </div>
  )
}

export default function App() {
  return (
    <FontProvider>
      <AppInner />
    </FontProvider>
  )
}
