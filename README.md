# 유비무환 프로젝트
- 목표 달성을 위한 ToDoList 앱
- React와 ES6 문법들에 대해 좀 더 연습하고자 진행했던 프로젝트이다.
- 매번 따라 치기만 했지 실제 뭔가를 구상하고 고민하면서 하려니 손이 안움직이더라 ㅋㅋㅋ 역시 프로젝트 한번 하는게 짱인거 같다.
- 잘 알지 못하고 마음대로 안되는 부분들도 많았지만,
- 하나 하나 검색해가면서 안써본 hooks들도 써보고 styled-component도 써보고 이것저것 많은 경험이 되었던 것 같다.
- 반응형은 아니라서 아마 화면이 작으면 뭉개질수도... ㅋㅋ

https://sbomhoo.github.io/UBMH_PRJ/

## 화면
### `메인화면`
![img1](https://user-images.githubusercontent.com/30708283/206904332-a6cc70e4-49b1-4beb-abc4-918caccb7ad6.png)

### `'목표 추가하기'` 버튼 클릭 시
![img2](https://user-images.githubusercontent.com/30708283/206904337-6526f72d-ed15-4619-b42f-396156aadf3f.png)

### `react-datepicker`를 이용한 캘린더 (살짝 커스터마이징)
![img3](https://user-images.githubusercontent.com/30708283/206904346-70f1bb40-386e-4d28-acce-3d61c13ef1a5.png)

### `목표 상세 페이지`
![img4](https://user-images.githubusercontent.com/30708283/206904350-d6b35182-08d7-4d5a-893b-07ad518b01b8.png)

![img5](https://user-images.githubusercontent.com/30708283/206904351-d7ce5ead-a3a6-4696-a2b9-7ee627264113.png)
왠지 감성적인게 더 잘어울린다..

## 프로젝트 진행하면서 배우고 느낀 점들.. (너프하게)
- 우선 `useState`나 좀 익숙해지자라는 취지로 진행했지만 하다보니 욕심이 조금 생겨서 이것저것 써봤다.. (잘 못하니깐 간단한것도 꽤 오래 걸렸다.)
- `useRef` 목표 추가 버튼을 누르면 특정 컴포넌트로 쓰윽 가는 거 해보고 싶어서 접하게 되었다, useRef에 들어간 값은 리렌더링이 안되서 리렌더링이 필요 없는 값을 저장할 때 쓰기도 한다고 한다.
- `React Router` 누르면 다른 페이지로 이동하는 거 해보고 싶어서 넣었다.. 다음부터는 Router로 전환한 페이지에서는 데이터 뿌려지게만 해야겠다.. (state 넘길 때 최대한 완성된 형태로 넘기기, 괜히 challengeList 스트링으로 넘겨서.. 체크박스에 취소선 만들기가 안되더라..) 
- `react-datepicker` 커스터마이징 하는데 꽤나 고생했다. 젤 멘붕했던게 react-datepicker의 날짜는 Date형이 아니라 Object형이다 따라서 JSX에 렌더링 할때 JSON.stringify()로 감싸줘야한다.
- `styled-component` 주로 styled-component를 사용했고, 목표 카드 부분만 mui를 사용했다. styled-component는 props 전달도 가능해서 잘쓰면 아주 좋을 거 같다. 하지만 담번엔 css파일 쓸래..( 레이아웃 잡을라고 브라우저 개발자 모드에서 html보는데 이름이 다 인코딩 되어서 확인하기 힘듬)
- `타이틀 이미지 들어간 글자` 이거는 진짜 어떤 개인 API 사이트 보고 너무 예뻐서 무조건 넣어야겠다 생각해서 이악물고 악착같이 찾아내서 해버렸다.. 넘 예뻐서 만족스럽다.
- `div css` css는 정말 빡친다.. 예쁘게 만들고 싶지만 내맘대로 안된다. 레이아웃이라도 잘 잡고 싶어서 div 속성 값 position(relative, absolute) 랑 display(grid,flex) 열심히 공부했다.. 나중에 또 까먹겠지?
- `localStorage` Router로 페이지 이동 하고 다시 뒤로가기 하면 state가 사라지는 것을 방지하기 위해 localStorage에 저장하는 것을 공부했다. 
- `useEffect` objectives가 추가하는 시점 마다 localStorage에 저장하기 위해 공부했다.
- `웹폰트 woff 적용` 웹전용 폰트가 있는지 첨 알았다. tft로 했는데 안되더라..
- `build`, `gh-pages` github 배포 하는 방법
- ES6 문법 `비구조화 할당`, `조건부 렌더링 OR 연산자`, `조건부 렌더링 삼항 연산자`, `spread 문법`
