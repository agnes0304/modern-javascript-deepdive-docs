# 모던 자바스크립트 딥다이브
>Modern Javascript DeepDive

👤 개인 / 2023.11 ~ 12

본 문서는 책 「모던 자바스크립트 딥다이브」를 공부하며 자바스크립트에 대한 레포 오너의 이해를 돕고, 
</br>어렴풋이 알고 있는 개념에 대한 환기를 위해 작성하였습니다.

</br>



### 📁 폴더 규칙

- 폴더명 숫자는 책에서 해당하는 챕터
- tail-questions: 추가 정리 자료

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
함수, 일급객체, 함수객체, arguments, <code>__proto__</code>, ES6 메서드, 화살표 함수, Rest 파라미터(<code>...</code>), 파라미터 기본값
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
<a href="https://github.com/agnes0304/modern-javascript-deepdive-docs/blob/main/16-property-attribute/README.md">프로퍼티 어트리뷰트(Property Attribute)</a>
</td>
<td align="center">
내부 슬롯, 내부 메서드, 데이터 프로퍼티, 접근자 프로퍼티, 프로퍼티 디스크립터
</td>
</tr>

<tr>
<td align="center">
17
</td>
<td align="center">
<a href="https://github.com/agnes0304/modern-javascript-deepdive-docs/blob/main/17-constructor/README.md">생성자 함수에 의한 객체 생성</a>
</td>
<td align="center">
생성자함수, <code>Object();</code>, constructor, non-constructor, <code>new</code>, <code>new.target</code>
</td>
</tr>

<tr>
<td align="center">
19
</td>
<td align="center">
<a href="https://github.com/agnes0304/modern-javascript-deepdive-docs/blob/main/19-prototype/README.md">프로토타입</a>
</td>
<td align="center">
<code>prototype</code>, <code>__proto__</code>, 프로토타입 체인, <code>instanceof</code>, <code>in</code>, 오버라이딩(overriding), 섀도잉(shadowing), 오버로딩(overloading)
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
<code>class</code>, <code>constructor</code>, 메서드, 인스턴스, 상속, <code>extends</code>, <code>super</code>, 클래스 필드, static 필드, <code>private</code>, <code>static</code>, 
</td>
</tr>

<tr>
<td align="center">
27
</td>
<td align="center">
<a href="https://github.com/agnes0304/modern-javascript-deepdive-docs/blob/main/27-array/README.md">배열(Array)과 고차함수</a>
</td>
<td align="center">
배열은 배열이 아니다, 고차함수
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
31, 32
</td>
<td align="center">
<a href="https://github.com/agnes0304/modern-javascript-deepdive-docs/blob/main/31-32-regExp-string/README.md">정규 표현식과 문자열</a>
</td>
<td align="center">
<code>RegExp</code>, 플래그, 패턴, String
</td>
</tr>

<tr>
<td align="center">
33
</td>
<td align="center">
<a href="https://github.com/agnes0304/modern-javascript-deepdive-docs/blob/main/33-symbol/README.md">7번째 타입 Symbol</a>
</td>
<td align="center">
Symbol
</td>
</tr>

<tr>
<td align="center">
34, 46
</td>
<td align="center">
<a href="https://github.com/agnes0304/modern-javascript-deepdive-docs/blob/main/34-46-iterable-generator/README.md">이터러블, 이터레이터, 제너레이터</a>
</td>
<td align="center">
iterable, iterator, <code>Symbol.iterator</code>, <code>next()</code> 
</td>
</tr>
<tr>
<td align="center">
35, 36
</td>
<td align="center">
<a href="https://github.com/agnes0304/modern-javascript-deepdive-docs/blob/main/35-36-spread-destructuring/README.md">스프레드 문법과 구조분해할당</a>
</td>
<td align="center">
전개문법, <code>...</code>, 얕은 복사, Rest element 사용
</td>
</tr>

<tr>
<td align="center">
37
</td>
<td align="center">
<a href="https://github.com/agnes0304/modern-javascript-deepdive-docs/blob/main/37-set-map/README.md">Set과 Map</a>
</td>
<td align="center">
Set, 집합연산, Map
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
40
</td>
<td align="center">
<a href="https://github.com/agnes0304/modern-javascript-deepdive-docs/blob/main/40-event/README.md">이벤트</a>
</td>
<td align="center">
이벤트 타입, 이벤트 핸들러, <code>addEventListener</code>, 이벤트 객체, 커스텀 이벤트, <code>dispatchEvent</code>, 이벤트 전파와 위임, <code>preventDefault</code>, <code>stopPropagation</code>
</td>
</tr>

<tr>
<td align="center">
41, 42, 45, 46
</td>
<td align="center">
<a href="https://github.com/agnes0304/modern-javascript-deepdive-docs/blob/main/41-42-45-46-timer-async-promise-generator-await/README.md">자바스크립트의 비동기 프로그래밍과 비동기 처리 방식</a>
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

<tr>
<td align="center">
49
</td>
<td align="center">
바벨, 웹팩
</td>
<td align="center">
babel, webpack
</td>
</tr>

</table>







</br>
</br>

<div align="right">

[![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2Fagnes0304%2Fmodern-javascript-deepdive-docs&count_bg=%23232323&title_bg=%23232323&icon=javascript.svg&icon_color=%23F7DF1E&title=HI&edge_flat=false)](https://hits.seeyoufarm.com)
  
</div>

