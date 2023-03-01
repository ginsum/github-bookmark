# Github Repo Search & Bookmark

## 프로젝트 설명

유저가 Github Public Repository를 검색할 수 있고, 원하는 Repository를 Bookmark 할 수 있으며, 해당 Repository의 Issue를 모아서 볼 수 있습니다.

## 실행방법

```
$ git clone https://github.com/ginsum/github-bookmark.git

$ cd ph-assignment

$ npm install

$ npm start
```

실행 주소
[http://localhost:3000](http://localhost:3000)

## Client 프로젝트 구조

```
src
├── assets
├── components
├── container
├── fetch
├── pages
├── routes
├── types
├── app.tsx
├── index.sss
└── index.tsx
```

- components: 공통으로 쓰일 수 있는 Card, SearchForm, Pagination, Skeleton 등의 컴포넌트
- container: search 페이지의 Repo 결과를 보여주는 부분을 RepoList로 분리
- fetch: Octokit를 사용하여 Github api 요청
- page: 검색을 위한 search, 북마크를 볼 수 있는 bookmark, 북마크한 repo의 issue를 모아보는 repoDetail
- routes: 페이지 이동 하기 위한 routing 파일
- types: type을 위한 파일

## 사용 라이브러리

- Tailwindcss

- Octokit를

## 구현 기능

1. Github Public Repository를 검색

2. Repository를 Bookmark 추가 및 삭제

3. 북마크한 각각의 Repository의 Issue 보기

## 작업하면서 느낀 점

-
