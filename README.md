# 모던 자바스크립트 딥다이브
>Modern Javascript DeepDive

👤 개인 / 2023.11 ~ 🚧 이사 진행 중(노션에서 깃허브로) 🚧

본 문서는 책 「모던 자바스크립트 딥다이브」를 공부하며 자바스크립트에 대한 레포 오너의 이해를 돕고, 
</br>어렴풋이 알고 있는 개념에 대한 환기를 위해 작성하였습니다.

</br>

### 📁 폴더 규칙

- 폴더명 숫자는 책에서 해당하는 챕터

</br>

### 📑 문서 작성 기준

- 당연하게 사용하고 있었지만 ‘이게 이런 이유에서 동작하는 거였어?’
- 프론트엔드 면접 단골 질문과 관련이 있는 주제
- 사실 뭐...전부...?

</br>

공부 자료이다 보니 사견이 주석처럼 들어가 있을 수 있고 만약 있다면 이는 인용으로 처리.
</br>꼬리물기를 좋아하는 지라, 책에 없더라도 궁금한 부분에 대한 정리가 있을 수 있음. 이 부분은 tail-questions 폴더에 별도로 정리함. 

</br>


## 목차
<table>
<tr>
  
<th align="center" width="150">
CHAPTER
</th>
  
<th align="center" width="420">
TITLE
</th>
  
<th align="center" width="410">
KEYWORDS
</th>

</tr>
  
<tr>
<td align="center">
01, 02, 03
</td>
<td align="center">
<a href="https://github.com/agnes0304/modern-javascript-deepdive-docs/tree/main/01-02-03-introduction">모던 자바스트립트 딥다이브를 들어가며</a>
</td>
<td align="center">
<code>ES6</code>, <code>V8</code>
</td>
</tr>

<tr>
<td align="center">
04, 05
</td>
<td align="center">
<a href="https://github.com/agnes0304/modern-javascript-deepdive-docs/tree/main/04-05-variable-expression-statement">변수, 식별자, 리터럴, 표현식, 명령문</a>
</td>
<td align="center">
변수(variable), 식별자(identifier), 리터럴(literal), 표현식(expression), 문(statement)
</td>
</tr>

<tr>
<td align="center">
06, 07, 09
</td>
<td align="center">
<a href="https://github.com/agnes0304/modern-javascript-deepdive-docs/tree/main/06-07-09-type-operators-typeCoercion">JS의 데이터 타입과 타입변환, 연산자와 단축평가</a>
</td>
<td align="center">
operator, 암묵적/명시적 타입변환(implicit/explicit coercion), type casting, <code>&&</code>, <code>||</code>, <code>?.</code>, <code>??</code>
</td>
</tr>

<tr>
<td align="center">
08
</td>
<td align="center">
<a href="https://github.com/agnes0304/modern-javascript-deepdive-docs/tree/main/08-control-flow-statements">제어문 간단히 보기</a>
</td>
<td align="center">
switch문, label문, <code>for</code>, <code>while</code>, <code>break</code>, <code>continue</code>
</td>
</tr>

<tr>
<td align="center">
10, 11
</td>
<td align="center">
<a href="https://github.com/agnes0304/modern-javascript-deepdive-docs/tree/main/10-11-object-comparison-to-primitive">Object(객체), 원시 타입과의 비교</a>
</td>
<td align="center">
object, <code>pass by value</code>, <code>pass by reference</code>
</td>
</tr>

<tr>
<td align="center">
12, 18, 26
</td>
<td align="center">
<a href="https://github.com/agnes0304/modern-javascript-deepdive-docs/blob/main/12-18-26-function-firstClassObject-es6Function/README.md">함수, 일급객체, ES6 함수의 추가 기능</a>
</td>
<td align="center">
함수, 일급객체, 함수객체, arguments, <code>__proto__</code>
</td>
</tr>

<tr>
<td align="center">
13, 14, 15, 24
</td>
<td align="center">
<a href="https://github.com/agnes0304/modern-javascript-deepdive-docs/blob/main/13-14-15-24-scope-global-let-const-block-closure/README.md">스코프, 전역 변수, let/const, 블록레벨 스코프, 클로저</a>
</td>
<td align="center">
전역, 지역(local), <code>let</code>, <code>const</code>, <code>var</code>, 렉시컬(lexical) 스코프, 렉시컬 환경, 클로저
</td>
</tr>

<tr>
<td align="center">
16
</td>
<td align="center">
프로퍼티 어트리뷰트(Property Attribute)
</td>
<td align="center">
내부 슬롯, 내부 메서드
</td>
</tr>

<tr>
<td align="center">
17
</td>
<td align="center">
생성자 함수에 의한 객체 생성
</td>
<td align="center">
생성자함수, 객체
</td>
</tr>

<tr>
<td align="center">
19
</td>
<td align="center">
프로토타입
</td>
<td align="center">
<code>prototype</code>, <code>__proto__</code>
</td>
</tr>

<tr>
<td align="center">
20
</td>
<td align="center">
<a href="https://github.com/agnes0304/modern-javascript-deepdive-docs/tree/main/20-strictMode">"strict mode"</a>
</td>
<td align="center">
<code>'strict mode'</code>
</td>
</tr>

<tr>
<td align="center">
21
</td>
<td align="center">
<a href="https://github.com/agnes0304/modern-javascript-deepdive-docs/tree/main/21-builtInObject">빌트인 객체</a>
</td>
<td align="center">
표준빌트인객체, 래퍼객체, 전역객체, 빌트인전역함수, 빌트인전역프로퍼티
</td>
</tr>

<tr>
<td align="center">
22
</td>
<td align="center">
<a href="https://github.com/agnes0304/modern-javascript-deepdive-docs/tree/main/22-this">this</a>
</td>
<td align="center">
<code>this</code>
</td>
</tr>

<tr>
<td align="center">
23
</td>
<td align="center">
<a href="https://github.com/agnes0304/modern-javascript-deepdive-docs/tree/main/23-executionContext">실행 컨텍스트</a>
</td>
<td align="center">
소스코드, 실행 컨텍스트 스택(콜스택), 렉시컬 환경
</td>
</tr>

<tr>
<td align="center">
25
</td>
<td align="center">
<a href="https://github.com/agnes0304/modern-javascript-deepdive-docs/blob/main/25-class/README.md">새로운 객체 생성 메커니즘, 클래스</a>
</td>
<td align="center">
<code>class</code>, <code>constructor</code>, 메서드, 인스턴스, 상속
</td>
</tr>

<tr>
<td align="center">
27
</td>
<td align="center">
배열(Array)
</td>
<td align="center">
키워드
</td>
</tr>

<tr>
<td align="center">
28, 29, 30
</td>
<td align="center">
<a href="https://github.com/agnes0304/modern-javascript-deepdive-docs/blob/main/28-29-30-number-math-date/README.md">Number, Math, Date</a>
</td>
<td align="center">
<code>Number</code>, <code>Math</code>, <code>Date</code>
</td>
</tr>

<tr>
<td align="center">
31
</td>
<td align="center">
정규 표현식(RegExp)
</td>
<td align="center">
키워드
</td>
</tr>

<tr>
<td align="center">
32
</td>
<td align="center">
문자열(String)
</td>
<td align="center">
키워드
</td>
</tr>

<tr>
<td align="center">
33
</td>
<td align="center">
7번째 타입, Symbol
</td>
<td align="center">
키워드
</td>
</tr>

<tr>
<td align="center">
34, 46
</td>
<td align="center">
이터러블, 이터레이터, 제너레이터
</td>
<td align="center">
키워드
</td>
</tr>
<tr>
<td align="center">
35, 36
</td>
<td align="center">
스프레드 문법과 구조분해할당
</td>
<td align="center">
키워드
</td>
</tr>

<tr>
<td align="center">
37
</td>
<td align="center">
Set과 Map
</td>
<td align="center">
키워드
</td>
</tr>

<tr>
<td align="center">
38
</td>
<td align="center">
<a href="https://github.com/agnes0304/modern-javascript-deepdive-docs/blob/main/38-browser-rendering/README.md">브라우저는 어떻게 렌더링하는가</a>
</td>
<td align="center">
파싱, DOM, CSSOM, AST, 렌더트리, 리플로우(reflow), 리페인트(repaint), <code>async/defer</code>
</td>
</tr>

<tr>
<td align="center">
39
</td>
<td align="center">
<a href="https://github.com/agnes0304/modern-javascript-deepdive-docs/blob/main/39-dom/README.md">DOM(Document Object Model)</a>
</td>
<td align="center">
DOM, 노드, DOM api
</td>
</tr>

<tr>
<td align="center">
41, 42, 45, 46
</td>
<td align="center">
<a href="https://github.com/agnes0304/modern-javascript-deepdive-docs/blob/main/42-45-46-async-promise-generator-await/README.md">자바스크립트의 비동기 프로그래밍과 비동기 처리 방식</a>
</td>
<td align="center">
<code>setTimeout</code>, <code>setInterval</code>, 디바운스, 스로틀, 태스크큐, 이벤트루프, 콜백패턴, <code>Promise</code>, 제너레이터, <code>async/await</code>
</td>
</tr>


<tr>
<td align="center">
43, 44
</td>
<td align="center">
<a href="https://github.com/agnes0304/modern-javascript-deepdive-docs/blob/main/43-44-ajax-restApi/README.md">Ajax와 REST API</a>
</td>
<td align="center">
JSON, <code>JSON.stringify</code>, <code>JSON.parse</code>, XMLHttpRequest,<code>fetch</code>, URI(엔드포인트)
</td>
</tr>

<tr>
<td align="center">
47
</td>
<td align="center">
<a href="https://github.com/agnes0304/modern-javascript-deepdive-docs/blob/main/47-error/README.md">에러 발생과 적절한 핸들링</a>
</td>
<td align="center">
<code>try{...}catch(err){...}</code>, Error 생성자 함수, <code>throw</code>
</td>
</tr>

<tr>
<td align="center">
48
</td>
<td align="center">
<a href="https://github.com/agnes0304/modern-javascript-deepdive-docs/blob/main/48-module/README.md">ES6 모듈</a>
</td>
<td align="center">
<code>export</code>, <code>import</code>, <code>default</code>, 파일 스코프
</td>
</tr>

</table>







</br>
</br>

<div align="right">

[![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2Fagnes0304%2Fmodern-javascript-deepdive-docs&count_bg=%23232323&title_bg=%23232323&icon=javascript.svg&icon_color=%23F7DF1E&title=HI&edge_flat=false)](https://hits.seeyoufarm.com)
  
</div>

