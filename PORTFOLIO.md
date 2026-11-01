# 포트폴리오 실행·검증·배포

React + TypeScript + Vite 정적 사이트. 프로젝트는 저장소 루트에 있으며 기존 README.md를 그대로 보존했습니다.

## 로컬 실행

Node.js 22.12 이상을 사용합니다.

```sh
npm ci
npm run dev
npm run build
npm run preview
```

## 테스트

```sh
npx playwright install chromium
npm test
```

360·768·1440px 가로 넘침, WCAG A/AA 자동 검사, 키보드 이동, 화면 전환 후 포커스, 상세 새로고침과 잘못된 주소를 검사합니다. 수동 화면·스크린리더 검증은 별도로 필요합니다.

## 검토·승인 후 GitHub Pages 배포

ci.yml은 PR 및 main 반영 시 빌드와 브라우저 테스트만 수행합니다. PR 생성이나 병합으로 자동 배포하지 않습니다.

1. 변경 사항을 검토하고 PR을 main에 병합합니다.
2. Settings → Pages → Source를 GitHub Actions로 설정합니다.
3. Actions → Deploy portfolio (manual approval) → Run workflow에서 main을 선택합니다.
4. 배포 승인 입력을 체크하고 수동 실행합니다.

배포 워크플로는 main과 명시적인 승인 입력을 요구합니다. 빌드·테스트를 다시 수행한 뒤 dist를 배포합니다. 이 변경에서는 Pages 설정·환경 보호 설정 변경이나 실제 배포 실행을 하지 않습니다. 필요하면 github-pages 환경에 required reviewers를 추가할 수 있습니다.

사용자 사이트 주소는 https://ygcawn.github.io/ 이므로 Vite base는 / 입니다. HashRouter로 상세 주소 직접 접근과 새로고침을 지원합니다. node_modules와 dist는 커밋하지 않습니다.

## 콘텐츠

src/data.ts에서 프로젝트를 수정합니다. 출처와 확인 항목은 CONTENT_REVIEW.md에 있습니다. 실명·연락처·비공개 저장소 내용은 포함하지 않습니다. Google Fonts가 차단되면 시스템 글꼴로 표시합니다. 프로젝트 도형은 실제 실행 화면이 아닌 개념 표현입니다.
