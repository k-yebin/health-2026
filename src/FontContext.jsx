import { createContext, useContext, useState, useEffect } from 'react'

const FontContext = createContext()

const SIZES = {
  sm: { base: 13, h1: 18, h2: 15, label: 11, tag: 11, btn: 13, today: 15, dangerTag: 11, sectionLabel: 11, accQ: 13, accA: 12, infoBox: 12, sub: 12 },
  md: { base: 15, h1: 22, h2: 16, label: 12, tag: 12, btn: 14, today: 17, dangerTag: 12, sectionLabel: 12, accQ: 14, accA: 13, infoBox: 13, sub: 13 },
  lg: { base: 18, h1: 26, h2: 19, label: 15, tag: 14, btn: 17, today: 20, dangerTag: 14, sectionLabel: 14, accQ: 17, accA: 16, infoBox: 15, sub: 15 },
}

export function FontProvider({ children }) {
  const [size, setSize] = useState(() => {
    try { return localStorage.getItem('fontPref') || 'md' } catch { return 'md' }
  })

  const changeSize = (s) => {
    setSize(s)
    try { localStorage.setItem('fontPref', s) } catch {}
  }

  return (
    <FontContext.Provider value={{ size, changeSize, s: SIZES[size] }}>
      {children}
    </FontContext.Provider>
  )
}

export const useFont = () => useContext(FontContext)
