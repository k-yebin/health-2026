import { useState } from 'react'
import { useFont } from '../FontContext'

export function Accordion({ items }) {
  const [open, setOpen] = useState(null)
  const { s } = useFont()

  return (
    <div style={{
      background: 'var(--surface)',
      borderRadius: 'var(--radius-lg)',
      border: '0.5px solid var(--border)',
      overflow: 'hidden',
      marginBottom: 8,
    }}>
      {items.map((item, i) => (
        <div key={i} style={{ borderBottom: i < items.length - 1 ? '0.5px solid var(--border)' : 'none' }}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            style={{
              width: '100%',
              background: 'none',
              border: 'none',
              padding: '15px 16px',
              textAlign: 'left',
              fontSize: s.accQ,
              fontWeight: 500,
              color: 'var(--text-primary)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: 8,
              lineHeight: 1.4,
            }}
          >
            <span>{item.q}</span>
            <span style={{
              fontSize: 12,
              color: 'var(--text-secondary)',
              transition: 'transform 0.2s',
              transform: open === i ? 'rotate(180deg)' : 'none',
              flexShrink: 0,
            }}>▼</span>
          </button>
          {open === i && (
            <div style={{
              padding: '12px 20px 25px',
              fontSize: s.accA,
              color: 'var(--text-secondary)',
              lineHeight: 1.95,
            }}>
              {item.a}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
