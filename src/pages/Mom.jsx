import { Accordion } from '../components/Accordion'
import { Tag, NoticeCard, InfoBox, AccPoint, Hl, BackButton, ResultCard, ResultItem, SectionLabel } from '../components/ResultUI'
import { useFont } from '../FontContext'

const qna = [
  {
    q: '5mm 용종, 혹시 암인가요? 너무 걱정돼요',
    a: (
      <>
        <Hl>지금 상황에서 "갑자기 대장암입니다"라는 진단이 나올 확률은 매우 낮아요.</Hl>
        <AccPoint>5mm 용종은 대부분 <Hl>선종이거나 단순 증식성 용종인 경우가 90% 이상</Hl>이에요.</AccPoint>
        <InfoBox>지금 엄마의 상태는 "암에 걸린 상태"가 아니라, 나중에 암이 될지도 모르는 아주 작은 씨앗을 오늘 미리 발견해서 깨끗하게 뿌리 뽑은 상태예요.</InfoBox>
      </>
    ),
  },
  {
    q: '현장에서 바로 뗐다는 게 어떤 의미인가요?',
    a: (
      <>
        암이 명확해 보이거나 침윤이 의심되었다면 일반 검진센터에서는 올가미로 뗄 수 없어요.
        <AccPoint><Hl>즉시 제거했다는 것</Hl> = 의사가 "이건 여기서 떼어내기만 하면 끝나는 수준의 혹"이라고 확신했다는 뜻이에요.</AccPoint>
      </>
    ),
  },
  {
    q: '조직검사는 왜 하는 건가요?',
    a: (
      <>
        암이어서가 아니라, <Hl>이 혹의 정확한 이름이 무엇인지 밝히기 위해서</Hl>예요.
        <AccPoint>'선종'인지, '증식성 용종'인지에 따라 다음 내시경을 1년 후에 할지, 3년 후에 할지 결정해요.</AccPoint>
        <InfoBox>
          10일 결과는 아마 이 둘 중 하나일 가능성이 높아요.<br />
          ① "선종이었지만 잘 떼어냈으니 1~3년 뒤 다시 검사합시다."<br />
          ② "단순한 증식성 용종이었습니다. 걱정 마세요."
        </InfoBox>
      </>
    ),
  },
  {
    q: '용종은 왜 생기나요?',
    a: (
      <>
        우리나라 대장 용종 발생의 주요 원인들이에요.
        <AccPoint label="고지방·고칼로리 식이:">붉은 육류나 가공육을 많이 섭취하면 발암 물질이 생기기 쉬워요.</AccPoint>
        <AccPoint label="저섬유질 식이:">채소나 과일을 적게 먹으면 유해 물질이 배출되지 못해요.</AccPoint>
        <AccPoint label="음주와 흡연:">장 점막의 세포 분열을 비정상적으로 유도해요.</AccPoint>
        <AccPoint label="활동량 부족:">장 연동 운동이 저하되어 노폐물이 오래 머물게 돼요.</AccPoint>
      </>
    ),
  },
  {
    q: '올가미로 뗄 때 아픈가요? 몸살은 왜 생기나요?',
    a: (
      <>
        수면 내시경 중 진행하기 때문에 시술 중에는 통증이 없어요.
        <AccPoint>엄마의 경우 몸부림이 심해 간호사들이 잡고 있어서 온몸이 쑤시는 몸살이 생길 수 있어요. <Hl>타이레놀</Hl> 복용하시면 돼요.</AccPoint>
        <AccPoint>입술에 상처가 생겼다면 <Hl>오라메디</Hl>를 발라주세요.</AccPoint>
      </>
    ),
  },
]

export function Mom({ onBack }) {
  const { s } = useFont()
  return (
    <div style={{ padding: '0 16px' }}>
      <BackButton onClick={onBack} />
      <ResultCard title="엄마 내시경 검사결과">
        <ResultItem label="위"><Tag type="caution">가벼운 위염 소견</Tag></ResultItem>
        <ResultItem label="대장">
          <Tag type="caution">5mm 용종 발견 및 제거</Tag>
          <p style={{ marginTop: 4, fontSize: s.base, color: 'var(--text-primary)', lineHeight: 1.6 }}>올가미로 제거 완료</p>
        </ResultItem>
        <ResultItem label="조직검사 결과">
          <Tag type="check">4월 10일 확인 예정</Tag>
        </ResultItem>
      </ResultCard>

      <NoticeCard
        title="즉시 응급실 가야 하는 상황"
        type="danger"
        items={[
          '혈변이 나오는 경우',
          '복통이 심한 경우',
        ]}
      >
        <p style={{ marginTop: 8, fontSize: s.label, color: 'var(--text-danger)' }}>
          평일 8시~5시 사이 → 건강증진센터 즉시 방문
        </p>
      </NoticeCard>

      <NoticeCard
        title="주의사항"
        items={[
          '내일 저녁까지 무조건 죽만 드세요',
          '4월 10일 용종 조직검사 결과 확인 예정',
          '용종 제거 부위 천공 가능성 있으니 잘 지켜봐야 해요',
          '몸살 생기면 타이레놀 복용',
          '입술 상처 있으면 오라메디 발라주기',
        ]}
      />

      <SectionLabel>엄마 검사 관련 Q&A</SectionLabel>
      <Accordion items={qna} />
    </div>
  )
}
