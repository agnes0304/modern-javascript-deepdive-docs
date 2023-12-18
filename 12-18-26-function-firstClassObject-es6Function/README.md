# 함수

- 함수는 왜 사용하나? `코드 재사용` `유지보수 편리` `가독성 향상`
- 함수는 객체(일급객체)
- 함수 이름은 생략 가능(선언문에서는 생략불가)

</br>

### 함수 호출과 동작

- 함수 이름은 함수 바디 내에서만 참조할 수 있음.
- JS 엔진은 함수 선언문을 해석해 함수 객체를 생성.
    - `암묵적으로 함수 이름으로 함수 식별자를 생성`하고 함수 객체를 할당한다.
- 결론적으로 자바스크립트 엔진은 `선언문을 표현식으로 바꿔서` 함수 객체를 생성

- **함수 호이스팅**
  >- 선언문으로 정의한 함수는 이전에 호출 가능
  >- 표현식으로 정의한 함수는 이전에 호출이 불가
  >- 왜? 함수 생성 시점이 달라지기 때문이다.
  >- 표현식으로 함수를 정의하면 `함수 객체`로 초기화되는 함수 호이스팅이 아니라, 변수 호이스팅으로 동작, 즉 `undefined`로 초기화.


</br></br>

## 함수 정의

1. 함수 선언문
    
    ```jsx
    function hi(){
    	console.log("hi");
    }
    ```
    
2. 함수 표현식
    
    ```jsx
    const greetFn = function (){
    	console.log("hi");
    }
    ```
    
3. 화살표 함수
    
    ```jsx
    const greetFn = () => {
    	console.log("hi");
    }
    
    const add = (x,y) => x+y;
    ```
    
4. Function 생성자 함수
    
    ```jsx
    const add = new Function('x','y','return x+ y');
    ```
    
</br>

## `call by value` vs. `call by reference`

- `값에 의한 호출`: 파라미터에 원시값을 전달
    - 값 자체가 복사되어 파라미터에 전달
    - 원본 훼손되지 않는다. (`side effect` 없음 = 순수 함수 속성)
- `참조에 의한 호출`: 파라미터에 객체 전달
    - 참조값이 복사되어 파라미터로 전달된다.
    - 원본 훼손 (`side effect` 발생)

→ 깊은 복사(`deep copy`)로 사본 참조값을 전달


</br>


## 함수의 다양한 형태

- 즉시실행함수(`IIFE`, immediately invoked func. expression)
    - 익명이 일반적
    
    ```jsx
    (function () {
    	// 함수 동작
    })
    ```
    
- 재귀함수(recursive func.)
- 중첩함수(nested func.)
- 콜백 함수(call back함수): 함수의 파라미터로 다른 함수 내부에 전달되는 함수이다. 헬퍼함수 역할을 한다.
- 고차(Higher-order) 함수(`HOF`): 파라미터로 콜백을 전달받은 함수
- 순수함수
    - side-effect 없음. 동일한 인수에 대해서 동일한 값을 리턴한다.
    - 어떠한 외부상태에도 의존하지 않고 parameter를 통해 전달된 argument에 의존해서 값을 리턴한다.

>외부 상태? 전역변수, 서버 데이터, 파일, 콘솔, 돔 등이 있다.

- 비순수 함수: side-effect가 있음

</br></br>

---

# 일급 객체

자바스크립트 함수는 아래 조건을 모두 만족하는 일급 객체이다.

- 런타임에 생성이 가능하다(무명의 리터럴 생성)
- 변수나 자료구조에 저장할 수 있다.
- 함수의 파라미터에 전달할 수 있다.
- 함수의 리턴값으로 사용 가능하다

</br>

### 일반 객체와의 차이?

- 호출가능하다(`callable`)
- 함수 객체의 프로퍼티를 갖는다.

</br></br>

## 함수 객체의 프로퍼티

### arguments 프로퍼티

- 함수 호출 시 전달된 인수(argument)정보를 담은 순회가능한(iterable) 유사배열객체
- 함수 내부 로컬 변수로 사용
- 초과 전달된 인수도 전부 보관.
- `length` 프로퍼티 지원.

</br>

### length 프로퍼티

- 함수 정의 시 선언한 파라미터의 개수
- arguments.length와 다르다

</br>

### name 프로퍼티

- 함수 이름
- 익명 함수의 경우
    - ES5 → `‘ ‘`
    - ES6 → 함수 객체를 가리키는 식별자

</br>

### `__proto__`접근자 프로퍼티

- 모든 객체는 `[[ Prototype ]]` 내부 슬롯을 갖는다. 얘는 `Prototype` 객체를 가리킴
- `__proto__`이 친구는 `[[ Prototype ]]` 내부 슬롯이 가리키는 프로토타입 객체에 접근할 수 있는 접근자 프로퍼티이다.

>`obj.__proto__`를 실행하면 obj가 상속받은 프로토타입을 확인할 수 있다. 근데 `Object.getPrototypeOf(obj);` 사용을 더 지향한다.

### prototype 프로퍼티

- `constructor`만 소유하는 프로퍼티이다.
- 일반 객체, non-constructor에는 이 프로퍼티가 없다.


</br></br>

---

# ES6 함수의 추가 기능

>ES6이전의 모든 함수는 일반 함수로서, 생성자 함수로서 호출할 수 있다 (callable, constructor)

- 근데 메서드도 callable, constructor이고 콜백함수도 constructor → 불필요한 프로토타입 객체를 생성
- 그래서 명확하게 구분함
    
    
    | ES6 함수의 구분 | constructor | prototype | super | arguments |
    | --- | --- | --- | --- | --- |
    | 일반 함수 | O | O | X | O |
    | 메서드 | X | X | O | O |
    | 화살표 함수 | X | X | X | X |

</br>

# 메서드

>ES6 이전: 객체에 바인딩된 함수 / ES6 이후: 메서드 축약표현으로 정의된 함수

- non-constructor : 생성자 함수가 아니며, 인스턴스 생성할 수 없다 → prototype 프로퍼티가 없고 프로토타입도 생성하지 않음

- 자신을 바인딩한 객체를 가리키는 내부 슬롯 `[[HomeObject]]` 가짐 → `super` 키워드 사용가능

```jsx
const obj = {
	x:1
	foo () { // ES6 기준 메서드
		return this.x;
	}

	bar: function(){ // ES6 기준 메서드 아님
		return this.x
	}
}
```

</br>

# 화살표 함수

- 정의
    - 함수 표현식으로 정의
    - 파라미터가 복수개인 경우, 소괄호 안에 선언(1개인 경우 생략 가능, 없는 경우 소괄호만)
    - 함수 바디의 중괄호{}를 생략한 경우, 표현식이 아니면 에러 발생
    - 객체 리터럴을 리턴하는 경우 객체 리터럴을 소괄호()로 감싸줘야 함
    - 즉시 실행 함수로 사용 가능
- 특징
    - 표현이 간략
    - 고차함수 인수로 전달 유용
    - 콜백함수 내부에서 this가 전역 객체 가리키는 문제 해결

```jsx
const add = (a,b) => a+b;
const test = () => { return const x = 1;}
const createObj = (id, content) => ({id, content});
const createObj = (id, content) => { return {id, content} };
const person = (name => {
	sayHi(){
		return `Hi! My name is ${name}`;
	}
})('jiwoo');

console.log(person.sayHi()); // Hi! My name is jiwoo
```

- 일반함수와 차이
    - non-constructor: 인스턴스 생성불가
    - prototype 프로퍼티가 없고 프로토타입 생성하지 않음
    - 중복된 파라미터 이름 사용 불가
    - 함수 자체의 this, arguments, super, new.target 바인딩을 갖지 않음 → 화살표 함수 내에서 참조하면 상위 스코프의 각각을 참조
        - lexical this

### super

- 내부슬롯`[[HomeObject]]`을 갖는 ES6 메서드 내에서만 사용할 수 있음

</br>

# Rest 파라미터

- 파라미터 이름 앞에 `...`을 붙여 정의한 파라미터
- 함수에 전달된 인수들의 목록을 배열로 받음
- 일반 파라미터와 함께 사용할 수 있음.
    - Rest 파라미터는 마지막에 위치해야 함.
    - Rest 파라미터는 단 하나만 선언 가능
- 함수 객체 length(함수 정의 시 선언한 파라미터 개수)에 영향을 주지 않음
- 유사 배열 객체인 arguments 객체를 배열로 변환해야 하는 번거로움 없앰

```jsx
function test (...rest){
	console.log(rest); 
}

test(1,2,3,4); // [1,2,3,4]
console.log(test.length); // 0
```

</br>

# 매개변수 기본값

- JS엔진은 매개변수와 인수의 개수를 체크하지 않음
- 인수가 전달되지 않은 매개변수 값은 undefined
- ES6부터 기본값 사용가능
- Rest 파라미터에는 기본값 사용 불가

```jsx
const test(x=0, y=0){
	return x + y;
}
```
