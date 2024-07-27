# Project "Slideshow"

<goose-dark-mode-image
  src-light="https://goose.redgoose.me/data/upload/original/202106/slideshow-001-light.png"
  src-dark="https://goose.redgoose.me/data/upload/original/202106/slideshow-001-dark.png"
  alt="Slideshow"/>

- date: 2019-02-24
- position: design, front and develop
- tool: phpstorm, sketchapp, balsamiq mockup

회사 개발자가 서비스를 운영하기 위하여 만든 관리자 프로그램을 사용하고 있었다. 시간이 점차 지나가고 점점 관리해야 할 것들이 많아지면서 사용하는데 불만이 많아지기 시작했다.
무엇보다 UI가 엄청 불편해서 사용하는데 지장이 생기는 것들이 한둘이 아니었고, 가면 갈수록 복잡해지기만 하는 모습을 보고 먼저 나서서 관리자를 다시 만들 계획을 하게 되었다.

시작은 짬나는 시간에 조금씩 구상을 하고 어떤 프로그램을 베이스로 할것인지와 어떤 UI 프레임워크를 사용 할 것인지를 고민하는데 꽤 시간이 걸렸다.

최종적으로는 `vue.js`와 `element-ui`를 사용하게 되었다.
편하고 빠르게 개발을 해서 사용할 수 있다는 것을 중요하게 여기다보니 쉽고 빠르게 개발 가능한 `vue.js`로 사용하기로 마음먹고, `vue.js`에서 사용할 수 있고, 많은 기능을 가진 UI 프레임워크들을 찾아보니 `element-ui` 가 가장 나아 보였다.

그래서 최종적으로 정해진 스택들은 다음과 같다.

- vue.js
- elements-ui
- scss

### 작품 목록에 대한 구상

관리자로 무엇을 할 것인지에 대하여 역할을 미리 정해두는 것이 가장 중요하다고 생각했다.
처음 구상하기 시작할때 적어도 작품 검색이 편했으면 하는 바램이 가장컷다. 그리고 검색한 작품으로 또다른 기능에 활용하는 재료로 사용했으면 좋겠다고 생각했다.

![bbuzzart-manager-001.jpg](https://goose.redgoose.me/data/upload/original/201905/bbuzzart-manager-001.jpg)

작품이라는 것은 명확하게 키워드로 제목이나 내용을 검색하기엔 애매한 주제다.
쇼핑몰의 상품같이 사진을 객관적으로 설명할 수 없는 것들이 대부분이다. 그래서 느낌의 표현에 대한 단서들을 통하여 필터링 해내는것이 이상적이라고 생각한다. 키워드, 색깔, 단어, 장르 같은 것들을 서로 교집합을 통하여 원하는 취향으로 작품을 뽑아내는것을 목표로 잡고 있었다.

## Design

디테일한 UI 디자인은 `element-ui`가 해결해 주지만 레이아웃 디자인은 직접 만들기로 하고 레이아웃 네비게이션 부분만 `sketchApp` 툴을 이용하여 만들었다.

요소가 많고, 무거운 색을 사용하게 된다면 사용하는데 부담감이 느껴질거라는 생각에 가볍고 단순한 레이아웃으로 만들어 보기로 했다.

![bbuzzart-manager-002.jpg](https://goose.redgoose.me/data/upload/original/201905/bbuzzart-manager-002.jpg)

내부 컨텐츠 영역에서는 `element-ui`를 통해서 UI를 만들 예정이어서 `balsamiq mockup`툴을 이용하여 와이어프레임 형태로 UI 형태만 빠르게 그리고, 바로 마크업하고, 개발하였다.

![bbuzzart-manager-003.jpg](https://goose.redgoose.me/data/upload/original/201905/bbuzzart-manager-003.jpg)

UI 프레임워크는 실질적으로 사용해본것은 처음이라서 처음 사용할때는 꽤 편해보였다.

## Development

본격적으로 개발을 시작하기전에 먼저 `vue.js` 를 이용하여 환경설정을 시작했다.
대부분 `nuxt.js` 로 작업을 하다가 `vue-cli`를 통하여 개발환경을 만들어보니 상대적으로 직접 커스터마이즈를 많이 할 수 있어보였다. 다르게 말하자면 환경을 만드는데 손이 많이 간다고 할 수 있다.

![bbuzzart-manager-004.png](https://goose.redgoose.me/data/upload/original/201905/bbuzzart-manager-004.png)

디테일하게 view, store, assets, router 부분들의 영역을 배분하는데 꽤 고민을 했다. 이런것들을 잘 설계를 해둬야지 기능이 계속 추가될 때 쉽게 만들 수 있거나 구조가 꼬이지 않을 것이다.
특히 router 부분에서 직접 map을 만들어 컴포넌트로 연결해줘야 하는 방식이 꽤 번거롭게 느껴졌다. (계속 `nuxt.js`만 사용해 왔으므로..)

### Markup & Styling

레이아웃 부분은 구조가 단순하고, ui 프레임워크를 사용하기에 애매한 부분이 많아서 직접 만들었다.
대신 컨텐츠 부분에서의 마크업과 컴포넌트 제작 부분에 관해서는 상당히 쉽게 만들어나갈 수 있었다.

![bbuzzart-manager-006.jpg](https://goose.redgoose.me/data/upload/original/201905/bbuzzart-manager-006.jpg)

작은 단위의 컴포넌트는 대부분 `element-ui` 프레임워크가 담당하였고(button, text-input, checkbox, switch..), 이것들을 조합하여 레이아웃을 뼈대가 되는 컴포넌트를 만드는것부터 시작하여 페이지가 되는 view 영역의 컴포넌트들을 만들어갔다.

![bbuzzart-manager-005.png](https://goose.redgoose.me/data/upload/original/201905/bbuzzart-manager-005.png)

개인적으로 느끼기엔 `element-ui` 의 grid 시스템은 꽤 불편했다.
기초적인 베이스는 `flex`가 아닌 `floating` 방식으로 만들어져 있지만 속성값으로 `flex` 방식으로 바꾸어줄 수 있다.
요즘에는 flex 형식으로 만들고 있다보니 일일히 속성값을 넣어줘야 한다는 점과 `flex` 의 속성값들이 제대로 지원해주지 않는다는 인상을 많이 가지고 있다. 그리고 기본 엘리먼트로 사용해도 되는데도 그리드 레이아웃을 위하여 커스텀 컴포넌트를 사용해야 한다는점도 별로 마음에 들진 않는다.
그래서 특수한 레이아웃의 모습을 가진 컴포넌트는 기본 엘리먼트로 마크업하고 컴포넌트 레벨에서 스타일시트를 따로 작성했다.

### List view

개인적으로 가장 중요하게 생각하고 가장 많이 신경을 쓴 부분이 목록 부분이라고 할 수 있다.

목록에서의 요소는 작품, 회원, 컨텐츠등.. 다양한 요소로 이루어진다.
나중에 깨닫게 되었지만 성격이 다른 요소들을 목록화 시키는 부분에서 어려웠던 점은 통일성이라고 볼 수 있다. 목록의 요소 부분은 컴포넌트화 시켜 다양하게 사용할 수 있으면서 알아보기 쉽게 만드는데 노력했다.

![bbuzzart-manager-007.jpg](https://goose.redgoose.me/data/upload/original/201905/bbuzzart-manager-007.jpg)

하나의 크게 시행착오를 겪은 부분은 검색에 관련된 인터페이스 부분이었는데, 처음 생각으로는 필터링 2,3개와 키워드 검색부분만 넣고 나머지는 확장필터라는 형태로 별도의 화면으로 필터링 인터페이스를 만들 계획으로 필터링 영역을 가로로 배치시켰다.

나중에 조금씩 만들어보니 가로로 배치되어있는 필터링이 화면 스크롤로 내리다보면 안보이게 되어 사용에 불편하다는것을 깨닫게 되었다.
이미 컨텐츠 몇개는 만들어져 있는 상태에서 다시 되돌아가서 고치는건 시간적인 소모가 많아서 새로 만들어지는 부분에서 먼저 사용하고 나중에 시간날때 하나씩 다시 리팩토링을 하게 되었다.

![bbuzzart-manager-008.jpg](https://goose.redgoose.me/data/upload/original/201905/bbuzzart-manager-008.jpg)

최종적으로는 목록 오른쪽 사이드 영역으로 배치하고 목록이 스크롤이 되더라도 위치가 그대로 유지할 수 있도록 고정시켰다. 이렇게 고정시켜보니 필터의 값을 변경하고 업데이트된 목록을 확인하고 다시 필터를 바꾸기가 굉장히 쉬워졌다.

### Connect with API

API 연동에 대해서는 기술적으로 그다지 어렵게 만들지는 않았다.

접속할때 로그인한 토큰값으로 검사하고 토큰값을 헤더에 집어넣어서 요청할때 같이 보낸다. API 주소와 그에대한 설명, 파라메터와 결과값 정보는 서버 개발자가 [swagger](https://swagger.io) 도구를 이용하여 팀에게 공유해 주었다.

서버 개발자가 관리자 기능 추가 요청을 할때도 있고, 기획이나 디자인을 한 다음에 서버 개발자에게 기능 추가 요청을 할때가 있는데 그럴때는 서로 대화를 하면서 대략적으로 와이어프레임을 그린다.

![bbuzzart-manager-009.jpg](https://goose.redgoose.me/data/upload/original/201905/bbuzzart-manager-009.jpg)

백엔드와 프론트엔드의 대략적인 작업과정은 다음과 같다.

1. 어떤 형태와 흐름으로 구성할지에 대하여 확정을 짓는다.
2. 화면을 만드는 프론트엔드 개발과 API 개발을 하는 백엔드 개발이 동시에 이루어진다.
3. API 제작이 끝나면 프론트엔드에서 API 요청을 하여 결과값을 확인한다.
4. API 요청을 하여 받은 값들을 화면을 만든 곳에다 넣어주면서 컨트롤 부분들을 디테일하게 만들면서 마무리 짓는다.

기능 하나하나의 마무리는 API 연동 후 내부 테스트를 끝내면 실제 서버로 업데이트를 하게된다.

## End

처음 서비스 관리자를 만들게 된 계기는 기존에 사용하는 관리자가 너무나도 불편해 보였고, 완성도가 떨어져 보여서 내손으로 만들어보고 싶은 의욕이 생겨서 시작하게 되었다.

주요 기능들은 다 만들어진 상태고, 그 이후로 어떻게 기능이 더 늘어나게 되는지는 모르겠지만 잘 쓰였으면 좋겠다.

![bbuzzart-manager-010.jpg](https://goose.redgoose.me/data/upload/original/201905/bbuzzart-manager-010.jpg)

특히 UI에 관해서는 UI 프레임워크를 사용했지만 그것을 활용하는 부분에도 결국 많은 고민과 노력이 필요했다.

보통 재미없는 작업이라고 생각하지만 나름대로 혼자 구상부터 디자인, 프론트엔드 제작까지 모두 만들어낼 수 있어서 재미있게 작업했다.