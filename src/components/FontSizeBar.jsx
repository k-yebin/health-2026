import { useFont } from '../FontContext'

export function FontSizeBar() {
  const { size, changeSize } = useFont()

  const btn = (key, label, fontSize) => (
    <button
      key={key}
      onClick={() => changeSize(key)}
      style={{
        background: size === key ? 'var(--text-primary)' : 'var(--surface)',
        color: size === key ? 'var(--surface)' : 'var(--text-secondary)',
        border: `0.5px solid ${size === key ? 'var(--text-primary)' : 'var(--border-strong)'}`,
        borderRadius: 'var(--radius-md)',
        padding: '5px 13px',
        fontSize,
        fontFamily: 'inherit',
        transition: 'all 0.15s',
      }}
    >
      {label}
    </button>
  )

  return (
    <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', padding: '20px 16px 10px', gap: 6 }}>
      <span style={{ fontSize: 12, color: 'var(--text-secondary)', marginRight: 4 }}>글자 크기</span>
      {btn('sm', '작게', 14)}
      {btn('md', '보통', 16)}
      {btn('lg', '크게', 18)}
    </div>
  )
}
