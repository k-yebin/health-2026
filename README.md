# 2026 건강검진 결과

부모님 내시경 검사 결과를 모바일에서 쉽게 볼 수 있는 웹앱이에요.

## 로컬 실행

```bash
npm install
npm run dev
```

폰에서 바로 테스트하려면:

```bash
npm run dev -- --host
```

터미널에 뜨는 `Network: http://192.168.x.x:5173` 주소를 같은 와이파이의 폰 브라우저에서 열면 돼요.

## GitHub Pages 배포

1. GitHub에 새 레포 만들기 (예: `health-2026`)
2. 이 폴더를 push

```bash
git init
git add .
git commit -m "first commit"
git remote add origin https://github.com/본인아이디/health-2026.git
git push -u origin main
```

3. GitHub 레포 → **Settings → Pages → Source: GitHub Actions** 선택
4. 자동으로 빌드 & 배포돼요 🎉

배포 완료 후 주소: `https://본인아이디.github.io/health-2026/`
