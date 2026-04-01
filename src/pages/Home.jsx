import { useFont } from '../FontContext'
import { Accordion } from '../components/Accordion'

const commonQna = [
  {
    q: '내시경 후 언제부터 밥 먹어도 되나요?',
    a: '내일 저녁까지는 무조건 죽이나 미음 등 부드러운 음식만 드세요. 모레부터는 일반식 가능하지만 맵고 짠 음식, 술은 1주일 이상 피하는 게 좋아요.',
  },
  {
    q: '4월 10일엔 어떤 결과를 듣나요?',
    a: '아빠는 위염 조직검사 결과, 엄마는 대장 용종 조직검사 결과를 4월 10일 건강검진 결과 방문 때 함께 들을 예정이에요.',
  },
  {
    q: '조직검사란 무엇인가요?',
    a: '내시경 중 조직 일부를 채취해서 현미경으로 세포를 분석하는 검사예요. 위염의 원인이나 용종의 성질을 정확히 파악하기 위해 진행해요. 결과가 나오는 데 약 1~2주 소요돼요.',
  },
]

export function Home({ onNavigate }) {
  const { s } = useFont()

  return (
    <div>
      {/* 헤더 */}
      <div style={{
        background: 'var(--surface)',
        padding: '16px 20px 20px',
        textAlign: 'center',
        borderBottom: '0.5px solid var(--border)',
      }}>
        <h1 style={{ fontSize: s.h1, fontWeight: 500, color: 'var(--text-primary)', marginBottom: 4 }}>
          2026 검사결과
        </h1>
        <p style={{ fontSize: s.label + 1, color: 'var(--text-secondary)' }}>4월 건강검진 내시경 결과</p>
      </div>

      {/* 오늘 안내 카드 */}
      <div style={{
        margin: '16px 16px 0',
        background: 'var(--surface)',
        borderRadius: 'var(--radius-lg)',
        border: '0.5px solid var(--border)',
        overflow: 'hidden',
      }}>
        <div style={{
          background: 'var(--color-primary-light)',
          padding: '10px 16px',
          fontSize: s.label,
          fontWeight: 500,
          color: 'var(--color-primary-dark)',
        }}>
          오늘 꼭 확인하세요
        </div>
        <div style={{ padding: 16 }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 10 }}>
            <span style={{ fontSize: s.sub, color: 'var(--text-secondary)', flexShrink: 0, width: 36 }}>물</span>
            <span style={{ fontSize: s.today, fontWeight: 500, color: 'var(--text-primary)', lineHeight: 1.4 }}>
              <span style={{ color: 'var(--color-red)' }}>오후 3시 20분</span>부터 드실 수 있어요
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 10 }}>
            <span style={{ fontSize: s.sub, color: 'var(--text-secondary)', flexShrink: 0, width: 36 }}>식사</span>
            <span style={{ fontSize: s.today, fontWeight: 500, color: 'var(--text-primary)', lineHeight: 1.4 }}>
              시술 2시간 후 <span style={{ color: 'var(--color-red)' }}>오후 4시 20분</span>부터 죽
            </span>
          </div>
          <div style={{ height: '0.5px', background: 'var(--border)', margin: '12px 0' }} />
          <p style={{ fontSize: s.sub, color: 'var(--text-secondary)', lineHeight: 1.65 }}>
            <strong style={{ fontWeight: 500, color: 'var(--text-primary)' }}>다음 날 저녁까지</strong> 죽만 드세요.<br />
            아주 드문 경우 시술 후 <strong style={{ fontWeight: 500, color: 'var(--text-primary)' }}>천공</strong>이
            발생할 수 있으며, 출혈 증상이 지속될 시 의료진의 도움이 필요해요.
          </p>
        </div>
      </div>

      {/* 응급 배너 */}
      <div style={{
        margin: '10px 16px 0',
        background: 'var(--bg-danger)',
        border: '0.5px solid var(--border-danger)',
        borderRadius: 'var(--radius-lg)',
        padding: '14px 16px',
      }}>
        <div style={{
          fontSize: s.sub,
          fontWeight: 500,
          color: 'var(--color-red-dark)',
          marginBottom: 8,
          display: 'flex',
          alignItems: 'center',
          gap: 6,
        }}>
          <span style={{
            display: 'inline-block', width: 7, height: 7,
            borderRadius: '50%', background: 'var(--color-red)', flexShrink: 0,
          }} />
          이 증상이 있으면 바로 연락하세요
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 8 }}>
          {['흑색변','혈변','어지럼증','맥박 빨라짐','식은땀','심한 복통'].map(t => (
            <span key={t} style={{
              background: 'var(--color-red-mid)',
              color: 'var(--color-red-darker)',
              fontSize: s.dangerTag,
              padding: '4px 10px',
              borderRadius: 20,
            }}>{t}</span>
          ))}
        </div>
        <p style={{ fontSize: s.sub, color: 'var(--color-red-dark)', lineHeight: 1.6 }}>
          <strong style={{ fontWeight: 500 }}>건강증진센터</strong>{' '}
<a href="tel:0522508300" style={{ color: 'var(--color-red-dark)', fontWeight: 500 }}>052-250-8300</a><br />
          또는 <strong style={{ fontWeight: 500 }}>응급실</strong> 즉시 방문
        </p>
      </div>

      {/* 아빠/엄마 버튼 */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, padding: '16px 16px 0' }}>
        {[
          { id: 'dad', label: '아빠', icon: '👨', borderColor: 'var(--color-primary)', iconBg: 'var(--color-primary-light)', iconColor: 'var(--color-primary-dark)' },
          { id: 'mom', label: '엄마', icon: '👩', borderColor: 'var(--color-pink)', iconBg: 'var(--color-pink-light)', iconColor: 'var(--color-pink-dark)' },
        ].map(({ id, label, icon, borderColor, iconBg, iconColor }) => (
          <button
            key={id}
            onClick={() => onNavigate(id)}
            style={{
              background: 'var(--surface)',
              border: '0.5px solid var(--border)',
              borderTop: `2px solid ${borderColor}`,
              borderRadius: 'var(--radius-lg)',
              padding: '20px 16px',
              textAlign: 'center',
              transition: 'transform 0.15s',
            }}
          >
            <div style={{
              width: 40, height: 40, borderRadius: '50%',
              background: iconBg, color: iconColor,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              margin: '0 auto 10px', fontSize: 18,
            }}>{icon}</div>
            <div style={{ fontSize: s.btn, fontWeight: 500, color: 'var(--text-primary)', marginBottom: 3 }}>{label}</div>
            <div style={{ fontSize: s.btn - 2, color: 'var(--text-secondary)' }}>검사결과 보기</div>
          </button>
        ))}
      </div>

      {/* 공통 Q&A */}
      <div style={{ padding: '0 16px' }}>
        <p style={{ fontSize: s.sectionLabel, fontWeight: 500, color: 'var(--text-secondary)', margin: '20px 0 8px', letterSpacing: '0.5px' }}>
          공통 안내
        </p>
        <Accordion items={commonQna} />
      </div>
    </div>
  )
}
