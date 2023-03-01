# Github Repo Search & Bookmark

## 프로젝트 설명

유저가 Github Public Repository를 검색할 수 있고, 원하는 Repository를 Bookmark 할 수 있으며, 해당 Repository의 Issue를 모아서 볼 수 있습니다.

## 배포 주소

https://github-bookmark.vercel.app/

- vercel을 사용하여 배포

## 실행방법

```
$ git clone https://github.com/ginsum/github-bookmark.git

$ cd github-bookmark

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

1. Tailwindcss

- style 작성을 편리하게 하기 위한 CSS 프레임워크
- 미리 만들어진 Utility Class를 활용하여 HTML 내에서 스타일 설정 가능
- 네이밍이 따로 필요없고 바로 스타일을 확인할 수 있는 것이 장점
- 코드가 길어져 가독성이 떨어지고 적응하는데 시간이 걸리는 것이 단점

2. Octokit

- GitHub API Wrapper
- GitHub API의 모든 기능을 커버하고 모든 최신 브라우저에서 작동함
- API 를 통해 받아온 response 관련 코드르 작성할때 타입을 미리 볼 수 있어서 편리하였음

## 구현 기능

1. Github Public Repository를 검색

- search page의 검색창에 검색어를 입력하면 public repository 검색 결과를 볼 수 있습니다.
- 한페이지에 10개의 결과를 보여주며, 페이지네이션을 사용해 이동하면 다음 결과를 볼 수 있습니다.
- 검색 결과의 오른쪽 상단의 북마크 아이콘을 누르면 북마크로 추가 가능합니다.

2. Repository를 Bookmark 추가 및 삭제

- search page에서 추가한 북마크를 bookmark page에서 모아 볼 수 있습니다.
- 화면 상단의 tab을 통해 bookmark와 search 이동이 가능합니다.
- 북마크는 최대 4개까지 등록 가능하며 그 이상 등록할 경우 alert 창을 보여줍니다.
- 북마크 아이콘을 다시 누르면 북마크 삭제가 가능합니다.
- 북마크는 localStorage에 저장 됩니다.
- 북마크 리스트의 레포 이름을 누르면, 이슈를 모아보는 페이지로 이동이 가능합니다.

3. 북마크한 각각의 Repository의 Open Issue 보기

- bookmark page에서 레포 이름을 누르면 이동 가능합니다.
- 레포의 간단한 정보와 open issue 리스트를 보실 수 있습니다.
- issue 리스트는 한 페이지당 10개씩 보이며 페이지네이션을 통해 페이지 이동이 가능합니다.
- issue 제목을 누르면 해당 issue 상세 페이지로 이동합니다.

## 작업하면서 느낀 점

- Github API 처음 사용해 보았는데, 검색 뿐 아니라 다른 기능들도 유용하게 사용해 볼 수 있을 것 같았습니다.
- Tailwindcss를 선택한 이유는 이전 회사에서 사용해 보아 익숙하였고, 간단한 프로젝트에서 빠르게 작성하기 좋다고 생각하여서 입니다.
- 페이지네이션을 라이브러리를 사용하지 않고 직접 구현했는데, 기능이 한정적으로 밖에 구현하지 못해 아쉽습니다.
- Issue 리스트 보여줄때 closed 된 이슈를 보여주는 부분을 추가하지 못해 아쉬습니다.
- 에러 관련 처리를 시간상 하지 못해 그 부분 또한 아쉽습니다.
