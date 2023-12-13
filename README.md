# 모던 자바스크립트 딥다이브

👤 개인 / 2023.11 ~ 🚧이사 진행 중(노션에서 깃허브로)🚧

본 문서는 책 「모던 자바스크립트 딥다이브」를 공부하며 자바스크립트에 대한 레포 오너의 이해를 돕고, 어렴풋이 알고 있는 개념에 대한 환기를 위해 작성하였습니다.

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

꼬리물기를 좋아하는 지라, 책에 없더라도 궁금한 부분에 대한 공부와 정리가 들어가있음. 이 부분은 tail-questions 폴더에 별도로 정리함. 

</br>


## 목차
<table>
<tr>
  
<th align="center" width="160">
CHAPTER
</th>
  
<th align="center" width="410">
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
함수, 일급객체, ES6 함수의 추가 기능
</td>
<td align="center">

</td>
</tr>

<tr>
<td align="center">
13, 14, 15, 24
</td>
<td align="center">
스코프, 전역 변수, <code>let/const</code>, 블록레벨 스코프, 클로저
</td>
<td align="center">

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
클래스
</td>
<td align="center">
<code>class</code>, <code>constructor</code>, 메서드, 인스턴스, 상속
</td>
</tr>

</table>


</br>
</br>

<div align="right">

[![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2Fagnes0304%2Fmodern-javascript-deepdive-docs&count_bg=%23232323&title_bg=%23232323&icon=javascript.svg&icon_color=%23F7DF1E&title=HI&edge_flat=false)](https://hits.seeyoufarm.com)
  
</div>

