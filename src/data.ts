export type Project = {id:string;title:string;en:string;kind:string;status:string;summary:string;tags:string[];role:string;steps:string[];pending:string[];links:{label:string;url:string}[]};
const team='https://github.com/Gachon-Unv-AIProgramming-Group-C/AI_Programming_Group_C_2026';
const gpt='https://github.com/ygcawn/GPT-Messenger-theme-Extension';
const x='https://github.com/ygcawn/X-VSCode-theme-Extension';
export const projects:Project[]=[
{id:'hallucination',title:'LLM 할루시네이션 탐지 시스템',en:'AI reliability',kind:'AI 프로그래밍 · 팀 프로젝트',status:'공개 코드 확인',summary:'LLM 응답의 신뢰성을 살펴보는 팀 프로젝트. 데이터와 결과 검증의 관점에서 참여했습니다.',tags:['LLM','MCP','데이터 검증'],role:'데이터 수집 · 전처리 · 결과 검증 · 보고서 작성',steps:[
'LLM 응답에 포함될 수 있는 할루시네이션을 탐지하는 것이 팀 프로젝트의 목표입니다. 개인이 처음 발견한 문제와 구체적인 계기는 추가 확인이 필요합니다.',
'팀 README는 LSC, SINdex, SAC³를 사용하는 캐스케이드 탐지 구조를 설명합니다. 공개 코드에는 MCP 도구와 실험 실행·평가 로직이 있습니다. README와 코드 내 단계 설명은 일부 달라 세부 흐름을 확인해야 합니다.',
'데이터 수집, 전처리, 결과 검증, 보고서 작성을 담당했습니다. 이는 본인이 제공한 역할 정보이며, 구체적인 데이터 출처·처리 규칙·담당 파일은 확인이 필요합니다. 서버와 모델 구현 전체를 개인 성과로 제시하지 않습니다.',
'팀 저장소에서 React·TypeScript 클라이언트, NestJS MCP 서버, Python 코드와 실험 자료를 확인했습니다. 평가 스크립트는 UNCERTAIN과 오류를 별도로 집계하며, 판정된 표본 기준 정확도 등을 계산합니다. 실행 결과와 성능 수치는 검증 전이므로 기재하지 않습니다.',
'개인 회고 확인 필요: 데이터 품질이 판정에 미친 영향, 결과 검증에서 발견한 사례, 팀에 전달한 피드백을 실제 기록을 바탕으로 보완할 예정입니다.'
],pending:['데이터 출처와 전처리 규칙','개인 작업을 보여주는 커밋·보고서','실험 조건과 실제 결과','역할 분담·협업 사례 및 개인 회고'],links:[{label:'팀 GitHub',url:team},{label:'탐지 코드',url:team+'/blob/main/Project/Sever/src/mcp/mcp.service.ts'},{label:'실험·평가 코드',url:team+'/blob/main/Project/experiments/run_experiment.py'}]},
{id:'gpt-messenger',title:'GPT Messenger Theme Extension',en:'A different conversation',kind:'브라우저 확장 프로그램',status:'로컬 테스트 버전',summary:'ChatGPT 대화 화면을 메신저 형태로 구성하는 Edge 확장 프로그램입니다.',tags:['JavaScript','Manifest V3','DOM'],role:'개인 개발 범위 확인 필요',steps:[
'ChatGPT 대화를 메신저 형태의 화면으로 표시하는 프로젝트입니다. 개발 동기와 기존 화면에서 느낀 불편은 본인 확인이 필요합니다.',
'README에 따르면 Tampermonkey 사용자 스크립트를 Edge Manifest V3 확장으로 변환했습니다. content script와 팝업을 통해 화면 및 설정을 구성합니다.',
'공개 코드에서 localStorage 호환 레이어와 메뉴 명령 등록 로직을 확인했습니다. 직접 작성한 범위와 도구를 활용한 범위는 추가 확인 전까지 단정하지 않습니다.',
'공개 저장소에 로컬 설치용 v1.5.0 ZIP과 코드가 있습니다. README는 첨부·이미지 붙여넣기가 미완성이며 ChatGPT DOM 변경에 영향을 받을 수 있다고 명시합니다. 스토어 배포나 사용자 수는 확인되지 않았습니다.',
'개인 회고 확인 필요: 화면 구조 변경 대응과 저장소 선택에서 실제로 얻은 교훈을 보완할 예정입니다. localStorage의 chrome.storage.local 이전은 README의 권장 사항이며 완료된 개선이 아닙니다.'
],pending:['직접 구현한 기능과 개발 과정','실제 동작 화면과 검증 환경','개인 회고'],links:[{label:'GitHub',url:gpt},{label:'구현 코드',url:gpt+'/blob/main/content.js'},{label:'테스트 ZIP',url:gpt+'/blob/main/gptmessage-v1.5.0.zip'}]},
{id:'planner',title:'시간 관리 플래너',en:'Work in progress',kind:'개발 중 프로젝트',status:'개발 중 · 범위 확인 필요',summary:'시간 관리 플래너를 개발 중입니다. 공개 가능한 구현 범위를 확인한 뒤 내용을 업데이트합니다.',tags:['개발 중'],role:'구현 범위 확인 필요',steps:[
'시간 관리를 위한 플래너를 개발 중입니다. 구체적인 사용자 문제와 요구사항은 확인이 필요합니다.',
'기술 스택과 설계는 공개 가능한 자료 확인 후 작성합니다.',
'직접 구현한 기능과 담당 범위는 아직 확인되지 않았습니다.',
'개발 중입니다. 완료 기능, 실행 화면, 배포 여부는 확인 전이며 비공개 저장소 내용은 공개하지 않습니다.',
'개발 과정의 실제 회고를 확인한 뒤 추가합니다.'
],pending:['공개할 수 있는 자료와 범위','구현된 기능·기술 스택','실행 화면과 개발 회고'],links:[]},
{id:'x-vscode',title:'X VSCode Theme Extension',en:'A familiar workspace',kind:'브라우저 확장 프로그램',status:'공개 코드 확인',summary:'X 화면에 에디터와 탐색기 형태의 UI를 적용하는 확장 프로그램입니다.',tags:['JavaScript','CSS','MutationObserver'],role:'개인 개발 범위 확인 필요',steps:[
'X의 화면을 VS Code와 유사한 작업 공간 형태로 바꾸는 프로젝트입니다. 개발 계기와 해결하려던 불편은 추가 확인이 필요합니다.',
'공개 content.js는 UI 패널을 삽입하고 게시물을 재구성합니다. MutationObserver로 DOM 변화를 감지하고 타이머를 사용해 갱신을 예약합니다.',
'테마 모드 전환, 미디어 접기, 원래 화면 복구, chrome.storage.local 기반 설정 코드를 확인했습니다. 해당 기능별 개인 기여와 개발 도구 활용 범위는 확인이 필요합니다.',
'README에는 v2.4 내비게이션·좋아요·레이아웃 개선 내역이 있습니다. 현재 content.js와 README의 기능 설명에는 차이가 있어 전체 기능의 동작이나 배포 상태를 단정하지 않습니다.',
'개인 회고 확인 필요: 동적 페이지의 DOM 변화와 원상 복구를 다루면서 얻은 경험을 실제 사례로 추가할 예정입니다.'
],pending:['README와 현재 코드의 기능 차이','개인 구현 범위와 문제 해결 사례','실제 동작 검증·배포 상태'],links:[{label:'GitHub',url:x},{label:'구현 코드',url:x+'/blob/main/content.js'},{label:'결과물 ZIP',url:x+'/blob/main/x-vscode-theme.zip'}]}
];
