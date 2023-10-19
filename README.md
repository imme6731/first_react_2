# 리액트

> ui 개발할 때 사용하는 라이브러리

## SPA

= Single Page Application

- 한 페이지에서 변경될 내용만 바뀜
- 속도 및 유지 보수에 수월함

## node.js

- 자바스크립트
- 브라우저 밖에서 사용하는 자바스크립트

#### node.js 설치

- 홈페이지에서 설치 (최초 한번만)
- LTS 버전 설치 (안정적)
- 설치된 버전 확인(cmd) : node -v

#### npm

= node package manage

- 노드 패키지를 관리
- 노드 설치 시 같이 설치됨
- 설치된 버전 확인(cmd) : npm --version

## react 설치 (cmd)

- > 설치할 경로 지정 (cd 경로)
- > npm -g install create-react-app 엔터
- 전역으로 리액트 설치(최초 딱 한번만)
- > npx create-react-app 프로젝트명 엔터
- 프로젝트명 내가 정하면 됨
- 새 프로젝트를 진행할때마다 실행
- > happy hacking 나오면 완료

### jsx문법 ul>li\*5 같은 식 사용할 수 있게 세팅하는 법

- 설정 > workspace 검색 > live server 탭에 root 메뉴의 json 클릭 >
- "emmet.includeLanguages": {
  "javascript": "javascriptreact"
  }, >> 오타없이 입력
- ex .box>h3\*3

### react styled-components 세팅

- 구글에 styled-components 검색하여 사이트 들어감
- install 읽고 코드 복사 (npm install styled-components)
- 터미널에 입력하여 설치
- 확장 > vscode-styled-components 설치 (자동완성)

### 돌아가고 있는 서버 터미널 종료하기

- ctrl + c 클릭 후 y

### styled-Component에 props를 이용하여 배경색 설정

- styled의 배경색에 props 작성
- 태그 안에 위에 작성한 props명을 작성하여 값 작성
- ${(props) => props.$bgColor};
- props명 앞에 $ 기호 넣어주기 (console 오류 안남)

### GlobalStyled 파일에 styled reset 설정

- GlobalStyled 파일 생성 후 npm i styled-reset 설치
- ${reset} 작성 (reset을 import)
- 상위 파일에 파일 불러오기
- 폰트 전체 설정 : html에 링크 연결 후 GlobalStyled 파일의 body 태그에 스타일 적용
- 기본 padding 값 설정 : GlobalStyled에 객체 생성하여 padding 값 입력 > 해당 컴포넌트의 스타일에 적용
- styled 태그안에 event 적용 : &:event명{} 작성 (&는 태그 자신을 한번 더 부르기 위해 사용)
