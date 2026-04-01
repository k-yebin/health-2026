import { Accordion } from '../components/Accordion'
import { Tag, NoticeCard, InfoBox, AccPoint, Hl, BackButton, ResultCard, ResultItem, SectionLabel } from '../components/ResultUI'
import { useFont } from '../FontContext'

const qna = [
  {
    q: '"지켜보자"고 한 건 암이 아니라는 뜻인가요?',
    a: (
      <>
        네, 그렇게 볼 수 있어요. 의사가 암을 강하게 의심했다면 반응이 달랐을 거예요.
        <AccPoint>암이 강하게 의심되는 병변이었다면 "큰 병원에 가보세요"나 "수술적 처치가 필요할 수 있다"는 무거운 안내가 뒤따라요.</AccPoint>
        <AccPoint>"지켜보거나 약을 먹자"는 표현은 대부분 <Hl>염증 조절이나 헬리코박터균 제균 치료</Hl>를 염두에 둔 발언이에요.</AccPoint>
        <InfoBox>지금 상황에서 "갑자기 암입니다"라는 진단이 나올 확률은 매우 낮아요. 10일 결과를 너무 걱정하지 않아도 돼요.</InfoBox>
      </>
    ),
  },
  {
    q: '"뭉쳐진 부분"이 뭔가요? 종양인가요?',
    a: (
      <>
        위염이 심하면 점막이 부어오르거나, 염증 세포가 모여서 혹처럼 툭 튀어나와 보일 수 있어요. 이를 <Hl>미란성 위염</Hl>이나 <Hl>결절성 위염</Hl>이라고 해요.
        <AccPoint label="확인 차원:">핀셋으로 떼어낸 건 단순 염증인지, 아주 초기 단계의 선종인지를 구분하기 위함이에요.</AccPoint>
        <AccPoint label="긍정적 신호:">아빠의 대장이 깨끗하다는 건 전반적인 소화기 건강이 나쁘지 않다는 의미예요.</AccPoint>
      </>
    ),
  },
  {
    q: '조직검사가 헬리코박터균 검사와 관련 있나요?',
    a: (
      <>
        네, "위염이 생기는 이유 파악"은 높은 확률로 <Hl>헬리코박터균 검사</Hl>를 의미해요.
        <AccPoint>이 균은 위 점막 깊숙이 살고 있어 눈으로는 보이지 않고, 조직을 떼어 검사해야 알 수 있어요.</AccPoint>
        <AccPoint>균이 있다면 <Hl>항생제 처방</Hl>으로 위염과 식도염의 근본 원인을 제거할 수 있어요.</AccPoint>
      </>
    ),
  },
  {
    q: '역류성 식도염은 어떻게 관리하나요?',
    a: (
      <>
        기름진 음식, 카페인, 술, 탄산음료를 줄이고 식후 바로 눕지 않는 게 중요해요. 취침 시 머리를 약간 높이면 도움이 돼요.
        <AccPoint>증상이 심하면 위산 억제 약을 처방받을 수 있어요. 10일 결과 때 함께 물어보세요.</AccPoint>
      </>
    ),
  },
]

export function Dad({ onBack }) {
  const { s } = useFont()
  return (
    <div style={{ padding: '0 16px' }}>
      <BackButton onClick={onBack} />
      <ResultCard title="아빠 내시경 검사결과">
        <ResultItem label="대장"><Tag type="normal">이상무</Tag></ResultItem>
        <ResultItem label="식도"><Tag type="caution">역류성 식도염</Tag></ResultItem>
        <ResultItem label="위">
          <Tag type="caution">위염</Tag>
          <p style={{ fontSize: s.base, color: 'var(--text-primary)', lineHeight: 1.6 }}>
            위염이 부분적으로 뭉쳐진 부분이 있어 핀셋으로 작게 뜯어서 조직검사 시행
          </p>
        </ResultItem>
        <ResultItem label="조직검사 결과">
          <Tag type="check">4월 10일 확인 예정</Tag>
          <p style={{ marginTop: 4, fontSize: s.label + 1, color: 'var(--text-secondary)' }}>
            의사 왈: 위염 원인 파악 목적이며, 결과에 따라 경과 관찰 또는 약 처방 예정
          </p>
        </ResultItem>
      </ResultCard>

      <NoticeCard
        title="주의사항"
        items={[
          '내일 저녁까지 무조건 죽만 드세요',
          '4월 10일 방문 시 조직검사 결과도 함께 들을 예정',
          '암 여부는 현재 알 수 없고 10일 결과 후 확인 가능',
        ]}
      />

      <SectionLabel>아빠 검사 관련 Q&A</SectionLabel>
      <Accordion items={qna} />
    </div>
  )
}
