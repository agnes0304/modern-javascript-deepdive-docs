# 모던 자바스크립트 딥다이브를 들어가며.

🚧 이 부분은 차차 수정될 예정 🚧

## JS의 발전과정

웹페이지의 보조적인 기능을 수행하기 위해 한정된 용도로 사용. 대부분은 서버에서 실행해서 옴.

</br>

### Ajax(Asynchronous JS and XML)

JS를 사용하여 서버와 브라우저가 비동기로 데이터를 교환할 수 있는 기능
- 이전에는 완전한 html을 받아 웹페이지를 구성했음. 하여 변경할 필요가 없는 부분까지 리렌더링이 발생.
- 필요한 데이터만 전송받아 변경할 부분만 렌더링 하는 방식이 가능해짐. 

</br>

### JQuery

DOM을 쉽게 제어, 크로스 브라우징 이슈도 일부 해결한 JS library

</br>

### V8 탄생

V8엔진의 탄생으로 JS가 웹 애플리케이션 프로그래밍 언어로 정착되었음. 서버 로직이 클라이언트로 이동하면서 웹 개발에서 프론트가 주목받기 시작. 

</br>

### 자바스크립트, ECMAScript

- ECMA? 자바스크립트 표준. 핵심문법을 규정
- 자바스크립트? 명령형, 함수형, 프로토타입 기반 객체지향 프로그래밍을 지원하는 프로그래밍 언어.

</br>

### ES5(2009) → ES6(2015)

ECMAScript의 약어.

<table>
  <tr>
    <th align="center" width="300">ES5(2009)</th>
    <th align="center" width="300">ES6(2015)</th>
  </tr>
  <tr>
    <td align="center">HTML5와 함께 출현한 표준안 </br> <code>JSON</code>, <code>strict mode</code>, 접근자 프로퍼티 ,프로퍼티 어트리뷰트 제어 ,향상된 배열 조작 기능(<code>forEach, map, filter, reduce, some, every</code>)</td>
    <td align="center"><code>let/const</code>, 클래스, 화살표 함수, 템플릿 리터럴, 구조분해 할당(<code>destructuring assignment</code>), <code>spread</code>, rest 파라미터, <code>Symbol</code>, <code>Promise</code>, <code>Map/Set</code>, iterable(이터러블) , <code>for - of</code>, 제너레이터, Proxy, 모듈 <code>import/export</code></td>
  </tr>
</table>


</br>

## Node.js에서 자바스크립트

- JS는 브라우저에서 동작하는 유일한 프로그래밍 언어이며 인터프리터 언어. 즉, 웹 페이지를 브라우저 화면에 렌더링하는 것이 브라우저의 주 목적임. 

- Node.js는 완전히 다른 방향으로, 브라우저 외부에서 JS 실행 환경을 제공하는 것이 목적이다. 

> DOM api에서 알 수 있는 차이
> </br>브라우저에서 중요하게 다루는 DOM api를 Node.js에서는 제공하지 않는다.
> </br>왜? html를 파싱한 객체인 DOM을 브라우저 바깥에서 직접 다룰 필요가 없으니까.




~~*컴파일과정 컴구관점에서~~
