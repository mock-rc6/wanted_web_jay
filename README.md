## 본 템플릿의 저작권은 (주)소프트스퀘어드에 있습니다. 상업적 용도의 사용을 금합니다.
## 2022-06-25 진행상황
- Header UI 구현
- 채용 페이지 UI 구현 중
---
## 2022-06-26 진행상황
- 채용 페이지 UI 구현 완료
- 유효하지 않은 url의 리다이렉트 페이지 연결
---
## 2022-06-27 진행상황
- 채용 상세 페이지에 네이버맵 연동 및 Geocoding 구현 완료
- 회원가입 Modal UI 구현 완료
- 이메일 유효성 검사 구현
* 개발 도중 발생한 이슈
  * Modal component 코드를 작성하는 도중, 화면의 정가운데에 Modal창을 배치하고 싶었는데, 각 Modal마다 height가 달라서 어려움을 겪었다.
  * 처음에는 width와 height 값을 고정값으로 준 후에 top과 left 값을 calc를 사용하여 구현했다. 그러나 각 Modal의 크기가 달랐기 때문에 더 나은 방법을 찾을 필요를 느꼈다.
  * top과 left 값을 50%로 설정한 후에, transform : translate(-50%, -50%); 으로 설정하여 이슈를 해결했다.
---
## 2022-06-28 진행상황
- 회원가입 기능 구현
* 1차 피드백 내용
  * 구현하지 않는 기능이어도 UI는 동일하게 만들어 놓을 것 (Header, 메인 화면)
---
## 2022-06-29 진행상황
- 이력서 소개 페이지 UI 구현
- 이력서 리스트 페이지 UI 구현
- 1차 피드백 내용을 기반으로 Header component UI 수정
* 개발 도중 발생한 이슈
  * 이력서 리스트 페이지를 구현하던 도중 여러 개의 section 중에서 첫 번째 section의 padding 값만 달랐다. 이 때문에 class를 2개 사용하기엔 비효율적이라는 생각이 들어서 방법을 찾고자 했다.
  * css의 not 선택자를 사용하여 첫 번째 section의 padding만 제거한 다음 따로 padding을 추가했다.
---
## 2022-06-30 진행상황
- 채용 공고 목록 불러오기 GET api 테스트 연동
- 채용 페이지 직무 선택 상자 UI 구현
---
## 2022-07-01 진행상황
- 직군 선택 상자 UI 구현
- 채용 공고 목록 Card에 api로 불러온 정보 적용
- 채용 공고 목록 api의 query string 중 직무(job_group), 직군(positions) test 완료
- 로그인 기능 구현
* 개발 도중 발생한 이슈
  * 직군 선택 기능 구현 중, 선택된 여러 개의 직군들을 기반으로 api의 query string으로 요청해야 했는데, map함수를 사용하여 값을 뿌리는데 ?positions=backend&,positions=frontend&, 와 같이 ,가 저절로 출력되는 이슈가 발생했다.
  * map 함수 뒤에 join("")을 추가하여 기본으로 ,가 출력되는 현상을 막음으로써 이슈를 해결했다.
---
## 2022-07-02 진행상황
- 채용 공고 상세 조회 구현
- 북마크, 좋아요 기능 구현 (북마크 및 좋아요의 초기 상태는 추후 적용 필요)
---
## 2022-07-03 진행상황
- 로그아웃 기능 구현
- 프로필 드롭다운 메뉴 UI 구현
- Header navbar 라우팅 구현
- 이미 가입된 이메일이면 로그인, 아니라면 회원가입 Modal을 띄우도록 수정
- 채용공고 페이지 지역 filter UI 및 기능 구현
* 개발 도중 발생한 이슈
  * Header에서 navbar 라우팅 시 Link를 사용하면 state가 바로 적용이 안 되고 클릭을 한 번 더 해야 적용이 되는 이슈가 발생했다.
  * useRef를 사용하여 classList를 add 및 remove하는 방식도 사용해봤지만 log를 찍어보니 라우팅 후에 ref.current가 null로 찍혀서 결국 해결하지 못 했다.
---
## 2022-07-04 진행상황
- 채용공고 페이지 경력 section UI 및 filter 구현
- 이력서 리스트 페이지에서 이력서 조회 api 테스트 연동
---
## 2022-07-05 진행상황
- 프로필 dropdown css 오류 수정
- 채용 공고 조회 필터 변경에 따른 버그 수정
- 이력서 작성 페이지 UI, 경력 추가 부분 구현
* 2차 피드백 내용
  * 구현한 기능을 모두 보여줄 수 있도록 영상에 담는 게 중요 ex) 로그인 여부에 따른 이력서 페이지 랜더링 차이
  * 좀 더 디테일하게 UI 구현 필요
---
## 2022-07-06 진행상황
- 이력서 작성 페이지 기초 UI 완성
* 개발 도중 발생한 이슈
  * textarea에서 height가 가변적이지 않고, 지정한 height에서 스크롤로만 조절이 되었다.
  * height를 100%, auto로도 해봤지만 여전히 똑같았다.
  * textarea의 onKeyUp, onKeyDown에 autoResizeTextarea라는 함수를 실행했다.
  * autoResizeTextarea 함수 내에서는 useRef 훅으로 ref.current.scrollHeight를 사용하여 textarea의 높이를 조절했다.
---
## 2022-07-07 진행상황
- 이력서 UI 완성 및 CRUD 구현
- 회사 등록 페이지 UI 및 등록 기능 구현
- 메인 페이지 UI 구현
- 채용 공고에서 지원하기 기능 구현
- My원티드 페이지 UI 및 회원 정보 불러오기, 정보 수정(프로필 사진, 이름, 이메일, 번호) 기능 구현
- 북마크, 좋아요 기능 구현 및 모아보기 구현
- 회사 팔로우 기능 구현
- 채용 공고 정렬 기능 구현
