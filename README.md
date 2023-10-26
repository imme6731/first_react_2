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

#### Event 사용을 위한 useState 작성

> useState() : react hook 종류 중 하나로 변수를 정의하고 값을 변경할 때 사용.
> 배열 비구조화 할 당을 이용하여 첫번째 값은 변수.
> 두번째 값은 변수를 변경할 수 있는 함수로 정의.
> 단, set이라는 이름을 붙여줘야됨.

- const [변수명, set변수명] = useState(변수에 저장할 값)
- event 발생할 태그에 이벤트 변수명 작성
- 이벤트 변수명 정의할 때 위 set변수명 메서드 사용
- const [num, setNum] = useState(0);
  const plusHandler = () => {
  setNum(num + 1);
  };
  return (
    <div>
      <button onClick={plusHandler}>+</button>
    </div>
    );
- <button onClick={() => setNum(num + 1)}>+</button>
  이렇게 줄일 수 있음

# git

### git(기록)

=> 지정한 파일 및 폴더를 추적하여 각 파일, 폴더의 변화된 부분을 기록하는 파일 관리 툴

### git hub(저장소)

=> git으로 관리된 파일을 업로드 하여 저장소에 저장 및 관리를 할 수 있는 개발자 플랫폼

### git hub(저장소) 만들기

1. 웹사이트 좌측 상단에 초록색 new 버튼 클릭
2. repository name : 저장소 이름 등록 (프로젝트 폴더명 권장)
3. description : 저장소 내용 (옵션 사항)
4. public : 공개 저장소 / private : 비공개 저장소
5. 하단 create repository 클릭으로 저장소 생성

## git에 유저 등록하기 (처음만 실행)

=> 터미널에서 실행

1. git config -- global user.name "닉네임"
2. git config --global user.email "이메일"

## git 초기화

=> git init

## 만든 저장소에 파일 연동(등록)

=> 터미널에서 실행

1. 원격 저장소 연동 (등록)
   => git remote add origin 저장소 주소
2. 현재까지 작업 파일 기록
   => git add .
   => git commit -m "기록할 내용"
   => git push origin master

## 원격 저장소에 있는 내용 내려받기

1. window + r 실행 후 cmd 실행
2. 저장할 파일 경로 지정 (cd 파일주소 엔터)
3. git clone 저장소 주소 작성후 엔터

## 리액트에서 font awesome 사용하기

- 1. core 설치 : npm i --save @fortawesome/fontawesome-svg-core

- 2. free 설치 :
     npm i --save @fortawesome/free-solid-svg-icons
     npm i --save @fortawesome/free-regular-svg-icons
     npm i --save @fortawesome/free-brands-svg-icons

- 3. 리액트 컴포넌트 설치 :
     npm i --save @fortawesome/react-fontawesome@latest

- 4. 사용
  - FontAwesomeIcon 컴포넌트 불러오기 (자동 설치되있음)
  - 컴포넌트 안에서 사용할 아이콘 이름 불러오기
  - style 지정 가능
  - ex) <FontAwesomeIcon icon={faUser} style={{ color: "salmon" }} />

## Router

- 경로 설정
- 설치 : npm i react-router-dom
- ex
- <BrowserRouter>(라우터 설정, 브라우저 랄우터, 해쉬 라우터가 있음)
  <Routes>(라우터 부모)
  <Route path="경로1" element={컴포넌트1} />(각각 라우터 설정)
  <Route path="경로2" element={컴포넌트2} />
  <Route path="/\*" element={404에러 컴포넌트} />
  </Routes>
  </BrowserRouter>
- 링크를 사용할 땐 a 태그가 아닌 Link컴포넌트를 사용함
- a 태그를 사용하지 않는 이유 : 새로고침되기 때문
- ex <Link to={`경로`}></Link>

## 웹 title 설정

- 각 페이지 타이틀 정의
- 설치 : npm i react-helmet
- Helmet 컴포넌트 불러오고 안에 title 태그 사용
- ex
- <Helmet>
        <title>Home</title>
      </Helmet>
- 컴포넌트로 만들어 프롭스 활용 (ex11/components/PageTitle)
