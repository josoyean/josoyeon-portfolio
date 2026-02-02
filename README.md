
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

\- Supabase를 활용해 DB 및 API를 연동

 - 소개 영역에 타이핑 애니메이션을 적용

\- 프로젝트 이미지를 클릭하면 상세 내용을 확인할 수 있는 팝업 UI를 구성

---

#### 1) Supabase를 활용해 DB 및 API를 연동

#### ![](https://blog.kakaocdn.net/dna/bkD33A/dJMb9MizJvV/AAAAAAAAAAAAAAAAAAAAAG-69gVUe_1DpGditlNeU3eSsX4dO2TbeUHhsYTYJBUU/img.png?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1772290799&allow_ip=&allow_referer=&signature=eadz%2Bu5Gl4%2FKu8Hufh7fi8crbuM%3D)![](https://blog.kakaocdn.net/dna/bT8Sc1/dJMb9d8fDSf/AAAAAAAAAAAAAAAAAAAAAPATfhs_dd2xWMCasUceO_gCcOcmz2s1L9A1SddyiRDi/img.png?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1772290799&allow_ip=&allow_referer=&signature=J47SghiuiZxdds57D6OakzxJn2o%3D)


슈퍼베이스 설치, api 연결을 하고 어느 테이블에 있는 데이터를 설정한후 슈퍼베이스 DB에 넣은 데이터를 useQuery를 이용해서 데이터를 호출했습니다. 보안을 위해 슈퍼베이스url,슈퍼베이스key를 env에 넣어 외부에서 못보게 작업을 했습니다. 

#### 2) 소개 문장 타이핑 애니메이션 적용

타이핑 하고 싶은 문구를 지정하고 0.15초 마다 typing를 호출 한다. typing은 문구를 하나씩 넣어주는데 &가 있으면 줄바꿈 태그를 넣어 주면 되고 없으면 그 문자 그대로 값을 넣어 타이핑 효과를 줬습니다. 문구가 끝나면 초기화를 하고 다시 처음부터 작업 하게하면 된다.

#### 3) 프로젝트 이미지를 클릭하면 상세 내용을 확인할 수 있는 팝업 UI를 구성


화면 전환 없이도 정보를 확인할 수 있도록 사용자 흐름을 개선

---

[https://github.com/josoyean/josoyeon-portfolio](https://github.com/josoyean/josoyeon-portfolio)

 [GitHub - josoyean/josoyeon-portfolio

Contribute to josoyean/josoyeon-portfolio development by creating an account on GitHub.

github.com](https://github.com/josoyean/josoyeon-portfolio)
