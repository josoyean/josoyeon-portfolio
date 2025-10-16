
[##_Image|kage@bZyVWt/dJMb8YwubLf/AAAAAAAAAAAAAAAAAAAAAB2kpfBnawlvpdTiEAzWX4xQMDxD7cYZmYHJzFGVKocB/img.png?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&amp;expires=1761922799&amp;allow_ip=&amp;allow_referer=&amp;signature=JDpi%2B4RxQ2f%2BQYy8zB9JrUaWdc4%3D|CDM|1.3|{"originWidth":2670,"originHeight":1278,"style":"alignCenter","filename":"20251016.png"}_##]

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

[##_ImageGrid|kage@bkD33A/dJMb9MizJvV/AAAAAAAAAAAAAAAAAAAAAG-69gVUe_1DpGditlNeU3eSsX4dO2TbeUHhsYTYJBUU/img.png?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&amp;expires=1761922799&amp;allow_ip=&amp;allow_referer=&amp;signature=wyHNZ8CFg0JqZiwIDmvQ5c%2FF1IM%3D,kage@bT8Sc1/dJMb9d8fDSf/AAAAAAAAAAAAAAAAAAAAAPATfhs_dd2xWMCasUceO_gCcOcmz2s1L9A1SddyiRDi/img.png?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&amp;expires=1761922799&amp;allow_ip=&amp;allow_referer=&amp;signature=wi8GNgnNijpFkFYtlimUTwOthWc%3D|data-is-animation="false" data-origin-width="355" data-origin-height="300" data-filename="스크린샷 2025-10-16 오후 3.45.28.png" style="width: 36.9638%; margin-right: 10px;" data-widthpercent="37.4",data-is-animation="false" data-origin-width="309" data-origin-height="156" data-filename="스크린샷 2025-10-16 오후 3.45.49.png" style="width: 61.8734%;" data-widthpercent="62.6"|_##][##_Image|kage@bGx89x/dJMb862mfBz/AAAAAAAAAAAAAAAAAAAAAL1f3ln1KaRL6x9gXtW9kxYTkr-VAgjxetCND7qD3LHN/img.png?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&amp;expires=1761922799&amp;allow_ip=&amp;allow_referer=&amp;signature=ryQkne%2FtZE4maL9b%2BnyKJUiffSo%3D|CDM|1.3|{"originWidth":354,"originHeight":69,"style":"alignCenter","width":585,"height":114,"filename":"스크린샷 2025-10-16 오후 3.46.10.png"}_##]

슈퍼베이스 설치, api 연결을 하고 어느 테이블에 있는 데이터를 설정한후 슈퍼베이스 DB에 넣은 데이터를 useQuery를 이용해서 데이터를 호출했습니다. 보안을 위해 슈퍼베이스url,슈퍼베이스key를 env에 넣어 외부에서 못보게 작업을 했습니다. 

#### 2) 소개 문장 타이핑 애니메이션 적용

[##_Image|kage@tMh3B/btsF9c7TKzr/AAAAAAAAAAAAAAAAAAAAABXz9vYs9tovCCamaLeYtIsYXp75q3C54riSrTMufwGW/img.png?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&amp;expires=1761922799&amp;allow_ip=&amp;allow_referer=&amp;signature=96BjJhM1ql7kMwBZqtplknPTAbU%3D|CDM|1.3|{"originWidth":1086,"originHeight":554,"style":"alignCenter","width":470,"filename":"스크린샷 2024-03-28 오후 5.54.18.png"}_##][##_Image|kage@ba5DdT/btsF9dlrOYr/AAAAAAAAAAAAAAAAAAAAABcom9WKABGbQEoJPhDD4_xWSMTn5wd-qecwpOfDWa9u/img.png?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&amp;expires=1761922799&amp;allow_ip=&amp;allow_referer=&amp;signature=l4XaV1h%2Fe2f7luZ4%2F43%2BYXNtmFw%3D|CDM|1.3|{"originWidth":966,"originHeight":106,"style":"alignCenter","width":467,"filename":"스크린샷 2024-03-28 오후 5.54.36.png"}_##]

타이핑 하고 싶은 문구를 지정하고 0.15초 마다 typing를 호출 한다. typing은 문구를 하나씩 넣어주는데 &가 있으면 줄바꿈 태그를 넣어 주면 되고 없으면 그 문자 그대로 값을 넣어 타이핑 효과를 줬습니다. 문구가 끝나면 초기화를 하고 다시 처음부터 작업 하게하면 된다.

#### 3) 프로젝트 이미지를 클릭을 하면 팝업이 나오는 형식

<iframe src="https://play-tv.kakao.com/embed/player/cliplink/458626487?service=daum_tistory" width="460" height="331" frameborder="0" allowfullscreen="true"></iframe>

---

## **회고록**

작성 예정

[https://github.com/josoyean/josoyeon-portfolio](https://github.com/josoyean/josoyeon-portfolio)

 [GitHub - josoyean/josoyeon-portfolio

Contribute to josoyean/josoyeon-portfolio development by creating an account on GitHub.

github.com](https://github.com/josoyean/josoyeon-portfolio)
