> 아래의 링크에 있는 자바스크립트 40제를 구현하고 있습니다.   
> 구현된 기능들은 폴더 별로 다르게 저장되어 있고, 미리보기 및 주요 개념은 아래에 따로 작성해두었습니다.   
> (주요 개념은 아래 링크에서 언급된 것으로, 해당 개념을 필수로 사용하여 구현했습니다.)   
> 링크 : [초보자를 위한 40가지의 자바스크립트 프로젝트](https://www.freecodecamp.org/korean/news/javascript-projects-for-beginners)   

***   
자바스크립트 40제   
=============   
   
**첫번째 예제의 미리보기는 색이 빠르게 바뀝니다. 주의하시기 바랍니다.**   
   
## [01. Color Flipper](https://github.com/hungerbk/freeCodeCamp-study/tree/main/01.colorFlipper)
![Apr-26-2023 16-28-55](https://user-images.githubusercontent.com/43366461/234501811-5c3f367f-bb00-4cfa-a8c9-8732fc17e908.gif)
   
- 버튼을 클릭하면 배경색이 바뀌고 해당하는 배경색의 이름이 화면에 표시됨
- 현재 배경색과 선택된 배경색을 비교하여 둘이 같은 경우 함수를 다시 실행하도록 구현함 (같은 색으로 바뀌는 경우, 겉으로 보기에는 함수가 제대로 실행되지 않은 것처럼 보임)
- 색 정보가 담긴 리스트를 만든 뒤, 함수를 실행하면 랜덤으로 리스트의 요소를 반환함
    
### 주요 개념
- arrays
- document.getElementById()
- document.querySelector()
- addEventListener()
- document.body.style.backgroundColor
- Math.floor()
- Math.random()
- array.length
***   
## [02. Counter](https://github.com/hungerbk/freeCodeCamp-study/tree/main/02.counter)
![Apr-26-2023 16-37-27](https://user-images.githubusercontent.com/43366461/234503794-e0e49fa1-f79a-401a-a5de-bf3590710452.gif)
   
- 버튼을 클릭하면 숫자의 크기가 증가, 감소, 초기화되도록 구현
- 숫자의 크기를 비교하여 숫자의 글자색이 다르게 보이도록 구현
- currentTarget 속성을 이용하여 하나의 함수에 여러 기능을 한번에 작성
- classList를 사용하여, class 추가/삭제를 통해 글자 색이 바뀌도록 구현

### 주요 개념
- document.querySelectorAll()
- forEach()
- addEventListener()
- currentTarget 속성
- classList
- textContent
***   
## [03. Review Carousel](https://github.com/hungerbk/freeCodeCamp-study/tree/main/03.reviewCarousel)
![Jul-17-2023 22-58-17](https://github.com/hungerbk/freeCodeCamp-study/assets/43366461/915d64ae-9a4b-41d2-86fd-eece4c7908a5)

- 여러 리뷰 객체의 정보가 있는 리뷰 배열을 생성   
- prevButton을 클릭하면 이전 리뷰가 화면에 보이도록 구현
- nextButton을 클릭하면 다음 리뷰가 화면에 보이도록 구현
- randomButton을 클릭하면 랜덤 리뷰가 화면에 보이도록 구현 (단, 현재 보이는 리뷰와 일치하지 않는 리뷰로만 변경)

### 주요 개념
- 객체
- DOMContentLoaded
- addEventListener()
- array.length
- textContent

***   
## [04. 반응형 내비게이션바 만들기](https://github.com/freeCodeCamp-study/bokyeong/tree/main/04.responsiveNavbar)
![Aug-24-2023 23-12-07](https://github.com/hungerbk/freeCodeCamp-study/assets/43366461/3d9b88de-6baa-4814-aba0-7e31259ded94)

- toggle을 이용하여 반응형 내비게이션 구현
- 내비게이션 바를 숨긴 뒤, 너비에 따라 다른 스타일이 보이게 구현

### 주요 개념
- document.querySelector()
- addEventListener()
- classList.toggle()

### 해결해야 하는 문제
- 아이콘 이미지를 svg를 사용했는데, hover 했을 때는 색상이 변하지만 focus했을 때는 변하지 않음 (css의 filter 이용)

  ![Aug-24-2023 22-32-28](https://github.com/hungerbk/freeCodeCamp-study/assets/43366461/9c6a42d2-6880-49a9-a9c3-6bb4819bedbd)

- 모바일 햄버거 바를 클릭한 경우, 원래대로 돌아오지 않음...

  ![Aug-24-2023 22-35-51](https://github.com/hungerbk/freeCodeCamp-study/assets/43366461/8da4fa45-3ac3-4d2d-862c-d900224104be)

***
## [05. 사이드바 만들기](https://github.com/hungerbk/freeCodeCamp-study/tree/main/05.sidebar)
![Aug-26-2023 22-48-15](https://github.com/hungerbk/freeCodeCamp-study/assets/43366461/1a4a2668-1560-45f9-968f-024deb09f40b)


- classList.toggle() 및 classList.remove()를 이용하여 사이드바 제어
- toggle 버튼을 클릭하면 show-sidebar 클래스를 토글하고, close 버튼을 클릭하면 show-sidebar 클래스를 제거
- transform을 이용하여 show-sidebar 제어
  ```css
  .sidebar {
   transform: translate(-100%);
   transition: all 0.5s ease;
   }

  .show-sidebar {
   transform: translate(0);
  }
  ```
- 화면 크기에 따라 사이드바의 크기 조절

### 주요개념
- document.querySelector()
- addEventListener()
- classList.toggle()

***
## [06. 모달 만들기](https://github.com/hungerbk/freeCodeCamp-study/tree/main/06.modal)
![Aug-27-2023 17-47-19](https://github.com/hungerbk/freeCodeCamp-study/assets/43366461/012cf19f-1470-42bc-88c3-272dcb9821fa)

- classList.add()와 classList.remove()를 통해 모달의 display를 제어
- backdrop-filter 속성을 이용하여 모달 뒷 부분 배경을 블러처리함

### 주요개념
- document.querySelector()
- addEventListener()
- classList.add()
- classList.remove()


***
## [07. FAQ 페이지 만들기](https://github.com/hungerbk/freeCodeCamp-study/tree/main/07.faqPage)
![Aug-28-2023 22-36-18](https://github.com/hungerbk/freeCodeCamp-study/assets/43366461/4d4433c8-5c86-4205-a469-303acb3b9e89)

- 하나의 함수로 여러 버튼에 이벤트 적용하기
- 클릭한 질문 외의 다른 질문은 세부 내용 가리기

## 주요개념
- document.querySelectorAll()
- addEventListener()
- forEach()
- classList.remove()
- classList.toggle()

***
## [08. 식당 메뉴판 만들기](https://github.com/hungerbk/freeCodeCamp-study/tree/main/08.menu)
![Sep-02-2023 12-25-54](https://github.com/hungerbk/freeCodeCamp-study/assets/43366461/f45c8052-45e2-4040-b28d-bb92cf5ee7db)

- 버튼에 따라 필터된 항목을 화면을 보여줌
- 객체 정보에 따라 필터 버튼이 동적으로 생성 됨

### 주요 개념
- 배열
- 객체
- forEach()
- DOMContentLoaded
- map, reduce, filter
- innerHTML
- includes 메서드

### 해결해야 하는 문제
- 클릭할 때마다 가운데 정렬해둔 부분이 움직임...

  ![Sep-01-2023 22-36-50](https://github.com/hungerbk/freeCodeCamp-study/assets/43366461/3ab6e059-adb9-4f56-bb4d-d5993993da9c)

***
## [09. 비디오 만들기](https://github.com/hungerbk/freeCodeCamp-study/tree/main/09.video)
![Sep-11-2023 22-12-16](https://github.com/hungerbk/freeCodeCamp-study/assets/43366461/0e17aa53-756a-443f-b5a1-49d4f2a3f781)


- pause()와 play()를 이용하여 비디오를 컨트롤할 수 있게 구현
- preloader 학습 (노션)

### 주요 개념
- document.querySelector()
- addEventListener()
- classList.contains()
- classList.add()
- classList.remove()
- play()
- pause()
  
***
## [10. 스크롤바를 따라 움직이는 내비게이션 바 만들기](https://github.com/hungerbk/freeCodeCamp-study/tree/main/10.navWithScroll)
![Oct-03-2023 21-41-45](https://github.com/hungerbk/freeCodeCamp-study/assets/43366461/f0f1d2f8-0108-4fcc-9915-5c7cd6c12ad6)

데스크탑 ver.

![Oct-03-2023 21-45-26](https://github.com/hungerbk/freeCodeCamp-study/assets/43366461/5fcae1a3-342e-4a4c-983e-cd1fca637a3d)

모바일 ver.

- getFullYear()를 사용하여 연도를 동적으로 생성
- getBoundingClientRect()를 사용하여 목록 리스트의 높이를 동적으로 생성
- slice 메서드를 사용하여 원하는 문자열 부분만 잘라내기
- window.scrollTo()를 사용하여 원하는 위치로 이동 (기본 기능을 사용하면 h2가 내비게이션 바에 가려져서 보이지 않음)
- scroll-behavior: smooth; 를 사용하여 스크롤 이벤트를 부드럽게

### 주요 개념
- document.getElementById()
- getFullYear()
- getBoundingClientRect()
- slice 메서드
- window.scrollTo()

### 해결해야 하는 문제
- 모바일에서 h1이 nav list 보다 위에 보임(저 부분은 list 선택도 되지 않음). z-index로 해결되지 않음 
   <img width="738" alt="스크린샷 2023-10-03 오후 9 47 24" src="https://github.com/hungerbk/freeCodeCamp-study/assets/43366461/2bec3230-a514-4234-9f77-b743c7f44500">

***
## [11. 서로 다른 내용을 보여주는 탭 만들기](https://github.com/hungerbk/freeCodeCamp-study/tree/main/11.tab)
![Oct-10-2023 23-36-36](https://github.com/hungerbk/freeCodeCamp-study/assets/43366461/e803e441-c464-42fa-ac42-cad409d7283e)

데스크탑 ver.

<img width="624" alt="스크린샷 2023-10-10 오후 11 41 34" src="https://github.com/hungerbk/freeCodeCamp-study/assets/43366461/5002dc62-588e-42da-82ed-83e57a002ffc">

모바일 ver.

- 이벤트 버블링을 이용하여 개별 버튼이 아닌 ```<article class= 'about' >``` 에 이벤트 리스너를 연결함
- data-id와 dataset을 이용하여 버튼과 내용이 보여지는 영역을 연결

### 주요개념

- classList.add()
- classList.remove()
- forEach()
- addEventListener()

### 해결해야 하는 문제
- 내용에 따라 영역의 크기를 변경하기 위해 min-height와 height를 지정했는데, min-height:300px이 적용되지 않음. 처음에 height:300px 했을 땐 적용이 되었음.

   <img width="534" alt="스크린샷 2023-10-10 오후 11 44 45" src="https://github.com/hungerbk/freeCodeCamp-study/assets/43366461/e8e97b56-724a-48ef-8c35-817e8c67a46e">
   <img width="262" alt="스크린샷 2023-10-10 오후 11 45 04" src="https://github.com/hungerbk/freeCodeCamp-study/assets/43366461/e0525769-45ca-405d-8720-5949a6832f9f">

***
## [12. 카운트다운 시계 만들기](https://github.com/hungerbk/freeCodeCamp-study/tree/main/12.countdown)
![Nov-11-2023 02-01-51](https://github.com/hungerbk/freeCodeCamp-study/assets/43366461/647cb8e4-0450-45fb-b0aa-722b20db6195)


- Date() 관련 함수를 이용하여 target date를 동적으로 생성
- setInterval()을 이용하여 1초마다 화면이 바뀌도록(시간이 줄어들도록) 구현
- 남은 시간이 0이 되는 경우, 카운트다운 대신 시간이 완료되었다는 문구 보여줌

### 주요 개념
- getFullYear()
- getMonth()
- getDate()
- Math.floor()
- setInterval()
- clearInterval()


***
## [13. 나만의 Lorem ipsum 만들기](https://github.com/freeCodeCamp-study/bokyeong/tree/main/13.myLoremIpsum)
![Nov-25-2023 23-50-11](https://github.com/freeCodeCamp-study/bokyeong/assets/43366461/45783ccd-701e-4ec9-bf27-6d7df73f965d)

- 입력한 숫자에 맞는 수의 문단을 보여줌
- 아무 숫자도 입력하지 않았거나 0 미만 9 초과를 입력한 경우 랜덤으로 한 문단을 보여줌

### 주요 개념
- parseInt()
- Math.floor()
- Math.random()
- isNaN()
- slice 메서드
- event.preventDefault()

### 생각해 볼 문제
- 현재 입력 값을 받아오는 코드는 ```const value = parseInt(amount.value);``` 인데, 처음에 ```const value = Number(amount.value);```로 입력하니 입력 값이 없는 경우 화면에 아무 문단도 보이지 않았다. undefined를 숫자로로 바꿀 수없어서 그런 거였나..? 그럼 undefined를 parseInt()하는 것은 괜찮은건가? 둘이 크게 다르지 않은 함수라고 생각했는데 그건 아니었던 것 같다.


