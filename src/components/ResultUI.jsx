import { useFont } from '../FontContext'

export function Tag({ type, children }) {
  const colors = {
    normal:  { bg: 'var(--color-green-light)', color: 'var(--color-green-dark)' },
    caution: { bg: 'var(--color-amber-light)', color: 'var(--color-amber-dark)' },
    check:   { bg: 'var(--color-info-light)',  color: 'var(--color-info-dark)'  },
  }
  const { s } = useFont()
  const c = colors[type]
  return (
    <span style={{
      display: 'inline-block',
      background: c.bg, color: c.color,
      fontSize: s.tag, padding: '3px 10px',
      borderRadius: 20, marginBottom: 8,
    }}>{children}</span>
  )
}

export function NoticeCard({ title, items, type = 'warning' }) {
  const { s } = useFont()
  const isWarning = type === 'warning'
  return (
    <div style={{
      background: isWarning ? 'var(--bg-warning)' : 'var(--bg-danger)',
      border: `0.5px solid ${isWarning ? 'var(--border-warning)' : 'var(--border-danger)'}`,
      borderRadius: 'var(--radius-lg)',
      padding: '16px 20px',
      marginBottom: 12,
    }}>
      <p style={{ fontSize: s.sub, fontWeight: 500, color: isWarning ? 'var(--text-warning)' : 'var(--text-danger)', marginBottom: 8 }}>
        {title}
      </p>
      {items.map((item, i) => (
        <p key={i} style={{
          fontSize: s.sub,
          color: isWarning ? 'var(--text-warning)' : 'var(--text-danger)',
          lineHeight: 1.7,
          paddingLeft: 14,
          position: 'relative',
        }}>
          <span style={{ position: 'absolute', left: 0 }}>{type === 'warning' ? '-' : '!'}</span>
          {item}
        </p>
      ))}
    </div>
  )
}

export function InfoBox({ children }) {
  const { s } = useFont()
  return (
    <div style={{
      background: 'var(--color-info-light)',
      borderRadius: 'var(--radius-md)',
      padding: '11px 13px',
      marginTop: 10,
      fontSize: s.infoBox,
      color: 'var(--color-info-dark)',
      lineHeight: 1.65,
    }}>
      {children}
    </div>
  )
}

export function AccPoint({ label, children }) {
  const { s } = useFont()
  return (
    <div style={{ marginTop: 9, paddingLeft: 14, position: 'relative', fontSize: s.accA, color: 'var(--text-secondary)', lineHeight: 1.75 }}>
      <span style={{ position: 'absolute', left: 0, color: 'var(--text-secondary)' }}>•</span>
      {label && <strong style={{ fontWeight: 500, color: 'var(--text-primary)' }}>{label} </strong>}
      {children}
    </div>
  )
}

export function Hl({ children }) {
  return <strong style={{ fontWeight: 500, color: 'var(--text-primary)' }}>{children}</strong>
}

export function BackButton({ onClick }) {
  const { s } = useFont()
  return (
    <button
      onClick={onClick}
      style={{
        display: 'flex', alignItems: 'center', gap: 6,
        padding: '16px 0 8px',
        fontSize: s.sub, color: 'var(--text-secondary)',
        background: 'none', border: 'none',
        fontFamily: 'inherit',
      }}
    >
      <span style={{ fontSize: 21 }}>← 뒤로</span>
    </button>
  )
}

export function ResultCard({ title, children }) {
  const { s } = useFont()
  return (
    <div style={{
      background: 'var(--surface)',
      borderRadius: 'var(--radius-lg)',
      border: '0.5px solid var(--border)',
      padding: 20,
      marginBottom: 12,
    }}>
      <h2 style={{ fontSize: s.h2, fontWeight: 500, color: 'var(--text-primary)', marginBottom: 14, paddingBottom: 10, borderBottom: '0.5px solid var(--border)' }}>
        {title}
      </h2>
      {children}
    </div>
  )
}

export function ResultItem({ label, children }) {
  const { s } = useFont()
  return (
    <div style={{ marginBottom: 12 }}>
      <p style={{ fontSize: s.label, color: 'var(--text-secondary)', marginBottom: 3 }}>{label}</p>
      {children}
    </div>
  )
}

export function SectionLabel({ children }) {
  const { s } = useFont()
  return (
    <p style={{ fontSize: s.sectionLabel, fontWeight: 500, color: 'var(--text-secondary)', margin: '20px 0 8px', letterSpacing: '0.5px' }}>
      {children}
    </p>
  )
}
