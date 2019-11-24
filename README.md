# MILLIONS

고려대 세종 멋사7기 밀리언즈 앱 프로젝트 입니다.
밀리언즈는 1만 시간 달성까지 타이머로 본인의 공부시간을 측정하는 앱 입니다.

## 프론트엔드

### 초기 세팅

1. 원하는 폴더에서 터미널 켜기

2) git clone https://github.com/ChanHoHan/MILLIONS.git

   - 브랜치만 가져오고 싶을때는 git clone -b 브랜치명 https://github.com/ChanHoHan/MILLIONS.git

3) cd MILLIONS/MILLIONS

4) npm install

5) environment.js 파일을 프로젝트 폴더에 만들고 아래 내용을 넣는다.

   import config from "./config.json";

   const ENV_MAP = {
   development: {
   BACKEND_HOST: "http://xxx.xx.xx:xxxx"
   },
   staging: {},
   production: {}
   };

   export default ENV_MAP[config.REACT_NATIVE_ENV] || ENV_MAP.development;

유의 사항 : BACKEND_HOST 부분에 http:// 꼭 적어줘야함.

6. npm start -> 프로젝트 잘 돌아가는지 테스트

## branch 만들고 사용하기

1. git init

2. git remote add origin https://github.com/ChanHoHan/MILLIONS.git

3. git branch 브랜치이름

4. git checkout 브랜치이름

5. 커밋 푸쉬는 원래 하던대로 + 푸쉬 할때만 git push -u origin 브랜치명
   **<--주의 사항 : push하기 전에 git branch로 현재 사용중인 branch 확인하기. -->**

## conflict를 줄여보자

github에 pull과 push를 할 때 겪는 기본적인 오류들을 줄여보자

1. 다른 사람의 코드를 pull을 통해서 받기 전에는 반드시 git add / git commit -m / git pull 후에 받도록 한다.

2. 다른 사람의 브랜치에서 코드를 받아올 때는 git pull origin (branch이름)을 사용한다.

3. 간혹가다가 다른 사람과 branch를 나누어 작업할 때 새로 생긴 파일에 대한 log가 존재 하지 않아서 다른 branch를 pull하려 하는데 오류가 나는 경우가 있다.

   - branch (branch이름) -> FETCH_HEAD
     fatal: refusing to merge unrelated histories

   git pull origin (branch이름) --allow-unrelated-histories 를 통해 해결이 가능하다!

## repository 받아오고 실행 시 front-end back-end 연결이 원활하지 않을 때 !

이제는 front-end와 back-end를 서로 연결 시켜 놓았기 때문에 서버를 돌려놔야 front-end 실행이 됩니다.

1. front-end 설정
   먼저 master 브랜치의 코드를 pull 해오면 front-end의 gettimer.js라는 파일이 있을겁니다. 여기서 axios.defaults.baseURL = "" 이렇게 비어 있을 겁니다.
   두 따옴표 사이에 empty string을 http://(본인ip번호):(본인port번호)로 바꾸어 줍니다.
   여기서 가장 중요한 것은 localhost로 돌린다고 해서 "http://127.0.0.1:8000" 을 넣고 돌리시면 안 됩니다.
   **<-- http://127.0.0.1:8000이 아닌 본인이 사용하고 있는 실제 ip주소를 입력해야합니다. -->**

2. back-end 실행
   **<- python3 manage.py runserver (입력했던ip주소):(입력했던port번호)로 실행합니다. -->**

3. push 할 때
   작업 다하시고 github에 어느 브랜치로 push를 하든! 반! 드! 시! 본인이 사용했던 ip와 port번호는 지우고 push하세요
   **<-- 차후에 다른 사람 코드를 pull할 때는 귀찮지만 다시 입력해줍시다. -->**
