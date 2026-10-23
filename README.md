# Bosoo Kim · 김보수

O-RAN·vRAN을 중심으로 모바일 UI, BSP, Radio Protocol 및 검증 경력을 소개하는 한국어·영어 포트폴리오입니다.

- 한국어: <https://darkcirclepooh.github.io/my_profile/>
- English: <https://darkcirclepooh.github.io/my_profile/en/>
- 공개 연락처: darkcirclepooh@gmail.com

## 시작하기

Node.js 24.22.1과 npm을 사용합니다. 의존성은 `package-lock.json`으로 고정합니다.

```sh
nvm install
nvm use
npm ci
npx playwright install chromium
npm run dev
```

개발 서버 주소는 <http://127.0.0.1:4321/my_profile/>입니다.

| 명령                   | 용도                                     |
| ---------------------- | ---------------------------------------- |
| `npm ci`               | 잠금 파일에 따른 의존성 설치             |
| `npm run dev`          | 로컬 개발 서버                           |
| `npm run build`        | `dist/`에 정적 사이트 생성               |
| `npm run preview`      | 빌드 결과 미리보기                       |
| `npm run check`        | Astro 및 TypeScript 검사                 |
| `npm run format:check` | Prettier 포맷 검사                       |
| `npm run format`       | Prettier 포맷 적용                       |
| `npm test`             | Playwright 브라우저·접근성 테스트        |
| `npm run test:ui`      | 대화형 테스트 실행                       |
| `npm run validate`     | 포맷·타입·빌드·브라우저 테스트 전체 실행 |

## 구조와 콘텐츠 수정

- `src/data/portfolio.ts`: 개인정보, 전문 분야, 경력, 한국어·영어 문구의 단일 편집 지점입니다. 두 언어는 같은 타입을 사용합니다.
- `src/layouts/Portfolio.astro`: 두 언어가 공유하는 페이지 구조와 SEO 메타데이터입니다.
- `src/pages/`: 한국어 홈과 영어 홈을 정적으로 생성합니다.
- `src/components/`: 코드로 작성한 네트워크 SVG 아트와 아이콘입니다.
- `src/styles/global.css`: 반응형 레이아웃, 색상, 타이포그래피, 모션 감소 및 인쇄 스타일입니다.
- `src/scripts/interactions.ts`: 언어 전환의 섹션 유지, 메뉴·경력 노드 강조, 스크롤 진행 표시입니다.
- `public/`: favicon 등 변환 없이 배포하는 정적 파일입니다.
- `tests/*.spec.ts`: 실제 빌드 결과를 검증하는 Playwright 테스트입니다.

Astro 7과 TypeScript로 정적 HTML을 생성합니다. API, 데이터베이스 또는 비밀키가 필요하지 않습니다. JavaScript가 없어도 모든 경력, 연락처와 기본 언어 이동 링크에 접근할 수 있습니다. JavaScript는 스크롤 효과와 현재 섹션을 유지하는 언어 전환에 사용합니다. 글꼴은 npm 패키지에서 가져와 사이트와 함께 배포합니다.

경력 범위는 제공된 2003–2026년을 유지합니다. 성과·회사명·수치를 추가할 때는 공개할 실제 내용을 먼저 확인하고 한국어와 영어를 함께 수정하세요.

## 검증

```sh
npm run validate
```

Playwright는 데스크톱과 모바일 Chromium에서 한·영 콘텐츠, 언어 전환, 직접 접속·새로고침, 배포 하위 경로, 320–1440px 레이아웃, 키보드 탐색, 모션 감소, JavaScript 없는 화면, axe 기반 WCAG 2 A/AA·2.1 AA 규칙을 검사합니다. 개별 `npm test`를 실행할 때는 먼저 `npm run build`가 필요합니다. 자동 접근성 검사와 함께 수동 화면·키보드 검토를 수행하세요.

실패 시 `playwright-report/`의 HTML 보고서와 `test-results/`의 스크린샷·trace를 확인합니다. CI는 실패 보고서를 7일 보관합니다.

## GitHub Pages 배포

저장소는 `DarkcirclePooh/my_profile`, 기본 브랜치는 `main`입니다. 저장소 **Settings → Pages → Build and deployment → Source**는 **GitHub Actions**를 사용합니다.

`main`에 push하면 `.github/workflows/deploy.yml`이 의존성 설치, 포맷·타입 검사, 빌드, 브라우저 테스트를 수행하고 통과한 산출물만 배포합니다. Pull request에서는 검사만 실행하며, Actions에서 수동 실행할 수도 있습니다.

최초 설정 예시(이미 설정된 저장소에서는 다시 실행하지 마세요):

```sh
gh auth login
git init -b main
git add .
git commit -m "Add bilingual portfolio website"
gh repo create DarkcirclePooh/my_profile --public --source=. --remote=origin
gh api --method POST repos/DarkcirclePooh/my_profile/pages -f build_type=workflow
git push -u origin main
```

배포 실행은 `gh run list`와 GitHub Actions에서 확인합니다. Pages 설정이 첫 push 전 허용되지 않으면 첫 push 후 설정하고 Actions에서 워크플로를 수동 실행하세요.

배포 경로는 `astro.config.mjs`의 `site`, `base`, `trailingSlash`로 정합니다. 저장소 이름이나 도메인을 바꾸면 테스트 기준 주소·메타데이터 기대값, robots 및 문서의 주소도 함께 수정하세요.

`dist/`, 의존성, 테스트 보고서, 로컬 비밀 파일은 버전 관리에서 제외합니다. 환경 변수가 필요해질 경우에만 정제된 `.env.example`을 추가하세요.
