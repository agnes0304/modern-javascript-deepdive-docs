# `try {...} catch (error) {...} finally {...}`

```javascript

console.log("시작");
test();
console.log("끝");

// 실행하면 다음과 같다.
// '시작'

```
'끝'을 프린트 하지 못하고 프로그램은 종료된다. 
</br>아래와 같이 `error`가 발생할 경우 `catch`문의 `err` 변수로 에러 객체를 전달받아 출력하면 어떤 에러가 발생했는지 확인할 수 있다. 

```javascript

console.log("시작");

try {
  test();
} catch (err) {
  console.error(`에러: ${err}`);
}

console.log("끝");

// 실행하면 다음과 같다.
// '시작'
// '에러: ReferenceError: test is not defined'
// '끝'

```

- try
    - 실행할 코드
    - 에러 발생 시 catch문으로 이동한다.
- catch
    - try에서 에러 발생 시 실행할 코드
    - error 객체가 전달된다.
- finally
    - 에러발생과 상관없이 한번은 실행되는 코드
    - 생략가능

</br></br>

# Error

```jsx
const err = new Error();
```

- Error 생성자함수는 에러 객체를 생성.
- Error 객체는 메세지(message) 프로퍼티와 스택(stack) 프로퍼티를 갖는다.
    - 스택은 에러 발생시킨 콜스택의 호출정보이다
- 7가지 Error 생성자함수를 제공한다.

|Error 생성자 함수| 에러 내용 |
|:---:|:---:|
|Error| 일반적인 에러 객체|
|SyntaxError| 자바스크립트 문법에 맞지 않는 문을 해석할때 발생|
|ReferenceError| 참조할 수 없는 식별자 참조 시에|
|TypeError|피연산자 혹은 인수의 데이터 타입이 유효하지 않음|
|RangeError| 숫자값의 허용 범위 초과|
|URIError| encodeURI, decodeURI에 부적적한 인수 전달 시|
|EvalError| eval함수에서 발생|

</br>

# throw

- 생성자함수로 에러를 만드는 것과 에러가 발생하는 것은 다르다.
- 에러를 발생시키려면 `try`문에서 `throw`로 에러를 던져야 한다.
- 그 던져진 error 객체를 `catch`문에서 생성된 에러변수가 받고 `catch`문이 실행된다

```jsx
try {
  throw new Error("🫠");
} catch (err) {
  console.log("에러!", err); // 에러! Error: 🫠
}
```

### 에러의 전파

- 호출자 방향으로 전파된다: 콜스택 하향
- 즉 `throw`된 에러를 캐치하지 않으면 전역에서 캐치되고, 아무도 캐치하지 않으면 전체 애플리케이션이 에러로 종료된다.
