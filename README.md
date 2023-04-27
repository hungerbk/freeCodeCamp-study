> 아래의 링크에 있는 자바스크립트 40제를 구현하고 있습니다.   
> 구현된 기능들은 폴더 별로 다르게 저장되어 있고, 미리보기 및 주요 개념은 아래에 따로 작성해두었습니다.   
> (주요 개념은 아래 링크에서 언급된 것으로, 해당 개념을 필수로 사용하여 구현했습니다.)   
> 링크 : [초보자를 위한 40가지의 자바스크립트 프로젝트](https://www.freecodecamp.org/korean/news/javascript-projects-for-beginners)   

***   
자바스크립트 40제   
=============   
   
**첫번째 예제의 미리보기는 색이 빠르게 바뀝니다. 주의하시기 바랍니다.**   
   
## [01. Color Flipper](https://github.com/freeCodeCamp-study/bokyeong/tree/main/01.ColorFlipper)
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
## [02. Counter](https://github.com/freeCodeCamp-study/bokyeong/tree/main/02.Counter)
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
