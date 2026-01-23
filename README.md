
<img width="1335" height="639" alt="20251016" src="https://github.com/user-attachments/assets/525c08e0-c402-4560-9565-35a27d8d0d59" />

## **  
Intor**

리액트 기반으로 타입스크립트로 제작한 포트폴리오입니다.

DB는 SQL로 자유롭게 사용하고 싶어서 슈퍼베이스를 사용을해서 페이지를 제작했습니다.

## **사용기술**

lang - react, styled-components , typesjavascript, react-query 

배포 - vercel.app

## **개발 기간**

2025.09 ~ 진행중

## **구현 기능**

\- 슈퍼베이스 활용해서 DB와 API 통해서 제작

 - 소개 문장 타이핑 애니메이션 적용

\- 프로젝트 이미지를 클릭을 하면 팝업이 나오는 형식

---

#### 1) 슈퍼베이스 활용해서 DB와 API 통해서 제작

슈퍼베이스 설치, api 연결을 하고 어느 테이블에 있는 데이터를 설정한후 슈퍼베이스 DB에 넣은 데이터를 useQuery를 이용해서 데이터를 호출했습니다. 보안을 위해 슈퍼베이스url,슈퍼베이스key를 env에 넣어 외부에서 못보게 작업을 했습니다. 

#### 2) 소개 문장 타이핑 애니메이션 적용

타이핑 하고 싶은 문구를 지정하고 0.15초 마다 typing를 호출 한다. typing은 문구를 하나씩 넣어주는데 &가 있으면 줄바꿈 태그를 넣어 주면 되고 없으면 그 문자 그대로 값을 넣어 타이핑 효과를 줬습니다. 문구가 끝나면 초기화를 하고 다시 처음부터 작업 하게하면 된다.

#### 3) 프로젝트 이미지를 클릭을 하면 팝업이 나오는 형식

---

[https://github.com/josoyean/josoyeon-portfolio](https://github.com/josoyean/josoyeon-portfolio)

 [GitHub - josoyean/josoyeon-portfolio

Contribute to josoyean/josoyeon-portfolio development by creating an account on GitHub.

github.com](https://github.com/josoyean/josoyeon-portfolio)
