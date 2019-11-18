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

### branch 만들고 사용하기

1. git init

2. git remote add origin https://github.com/ChanHoHan/MILLIONS.git

3. git branch 브랜치이름

4. git checkout 브랜치이름

5. 커밋 푸쉬는 원래 하던대로
   - 푸쉬 할때만 git push -u origin 브랜치명

**<--주의 사항 : push하기 전에 git branch로 현재 사용중인 branch 확인하기. ->**

수정 사항 / 참고사항 있으면 수정해주세요~
