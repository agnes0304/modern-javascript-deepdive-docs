# 프로토타입

>자바스크립트를 이루고 있는 거의 모든 것이 객체이다.

### 객체 지향 프로그래밍

- 속성을 통해 하나의 객체를 정의
- 추상화: 다양한 속성 중에서 필요한 속성만 간추려내어 표현하는 것
- 객체: 속성을 통해 여러 개의 값을 하나의 단위로 구성한 복합적인 자료구조
    - 프로퍼티: 객체의 상태
    - 메서드: 상태를 조작할 수 있는 동작
- 상속: 객체지향프로그래밍의 핵심개념
    - **자바스크립트는 프로토타입을 기반으로 상속을 받아 중복을 제거하고자 함**

</br>

# 프로토타입 객체

>그냥 프로토타입이라고 함

- 객체 간 상속을 구현하기 위해 사용.
- 어떤 객체의 상위 객체의 역할
- 다른 객체에 공유 프로퍼티를 제공.

</br>

### `[[Prototype]]`

- 모든 객체가 가지는 내부 슬롯(모든 객체는 하나의 프로토타입을 가짐)
- 그 객체가 상속받은 프로토타입의 참조이다.
- 그 객체 생성 방식에 따라 저장될 값이 결정
    - 예시: 객체 리터럴로 생성 →  Object.prototype / 사용자 정의 생성자 함수`Circle`로 생성 → Circle.prototype

<img width="946" alt="프로토타입" src="https://github.com/agnes0304/modern-javascript-deepdive-docs/assets/86249667/b516b1fe-5291-4afc-b874-b4b5139cab83">

- 생성자 함수는 자신의 prototype 프로퍼티로 프로토타입에 접근 가능
- 생성자 함수로 생성된 인스턴스 객체는 `__proto__`로 자신의 프로토타입(자신의 `[[Prototype]]`가 가리키는 프로토타입)에 간접적으로 접근 가능
- 프로토타입은 constructor 프로퍼티로 생성자 함수에 접근 가능

</br>

### `__proto__`

- 모든 객체는 이를 통해 자신의 프로토타입에 간접 접근 가능
- 상호 참조로 프로토타입 체인이 생성되는 것을 방지 하기 위함(singly liked list여야 하는데 circular linked list되는 것을 방지)
- 가능한 직접적으로 사용은 지양
    - `Object.getPrototypeOf()`로 프로토타입 참조 취득
    - `Object.setPrototypeOf()`로 프로토타입 교체

```jsx
const obj = {};
const parent = { x:1 }

obj.__proto__; // -> getter 함수인 get __proto__호출
obj.__proto__ = parent; // -> setter함수인 set __proto__호출
```

</br>

### 함수 객체의 prototype 프로퍼티

- 함수 객체가 소유하는 prototype 프로퍼티는 생성자 함수가 생성할 인스턴스의(인스턴스가 가지게 될) 프로토타입을 가리킴
    - 생성자 함수로 호출할 수 없는 함수(ES6메서드, 화살표함수)는 prototype 프로퍼티 없음

| 구분 | 소유 | 값 | 사용주체 | 사용목적 |
| --- | --- | --- | --- | --- |
| `__proto__` | 모든 객체 | 프로토타입 참조 | 모든 객체 | 자신의 프로토타입에 접근, 교체하기 위해 사용 |
| prototype | constructor | 프로토타입 참조 | 생성자 함수 | 자신이 생성할 인스턴스에게 프로토타입 할당하려고 사용 |

![프로토타입 예시](https://github.com/agnes0304/modern-javascript-deepdive-docs/assets/86249667/2e6aa03b-ebaa-444b-86ad-dde981e28859)

</br>

### 리터럴로 생성된 객체의 생성자함수와 프로토타입

- Object 생성자 함수에 인수를 전달하지 않거나, undefined, null을 전달하면서 호출하면 내부적으로 추상연산인 OrdinaryObjectCreate 호출 → Object.prototype을 프로토타입으로 가지는 객체를 생성
- 객체 리터럴 평가도 다음과 같이 정의 =/= Object 생성자 함수가 생성한 객체
    1. 내부적으로 추상연산 OrdinaryObjectCreate을 호출
    2. 빈 객체를 생성
    3. 프로퍼티 추가

| 리터럴 표기법 | 생성자 함수 | 프로토타입 |
| --- | --- | --- |
| 객체 리터럴 | Object | Object.prototype |
| 함수 리터럴 | Function | Function.prototype |
| 배열 리터럴 | Array | Array.prototype |
| 정규표현식 리터럴 | RegExp | RegExp.prototype |


</br>

### 프로토타입 생성 시점

- 생성자 함수가 생성되는 시점에 생성

#### 1) 사용자 정의 생성자 함수

- 함수 정의가 평가되어 함수 객체를 생성하는 시점에 프로토타입도 더불어 생성
- 함수 선언문으로 정의된 함수는 어떤 코드보다도 먼저 평가 → 함수 객체 생성
    - 이때 프로토타입도 생성
    - 생성자 함수의 prototype에 바인딩 된 객체

#### 2) 빌트인 생성자 함수

- 빌트인 생성자 함수가 생성되는 시점에 프로토타입 생성

</br>

>### 객체 생성 방식과 프로토타입의 결정
>
>- 객체 생성방식
>    - 객체 리터럴, Object 생성자 함수, 생성자 함수, Object.create 메서드, 클래스
>- 전부 추상 연산 OrdinaryObjectCreate에 의해서 생성
>    - 추상연산으로 빈 객체를 생성
>    - 객체에 추가할 프로퍼티 목록이 인수로 전달된 경우 프로퍼티를 객체에 추가
>    - **인수로 전달받은 프로토타입**을 생성한 객체의 프로토타입 슬롯에 할당
>    - 객체 리턴



</br></br>

# 프로토타입 체인

- 상속과 프로퍼티 검색을 위한 메커니즘
    
    >식별자 검색을 위한 메커니즘? 스코프 체인

- JS는 객체의 프로퍼티에 접근하고자 할 때 해당 객체에 프로퍼티가 없다면 `[[Prototype]]` 내부슬롯을 따라서 부모 역할의 프로퍼티를 순차 검색함
    
- `Object.prototype`
    - 프로토타입의 프로토타입
    - 프로토타입 체인 종점
    - `[[Prototype]]` 내부 슬롯은 null

- `instanceof` 연산자
	- 생성자 함수의 prototype에 바인딩된 객체가 좌변 객체의 프로토타입 체인 상에 존재하면 true, 아니면 false

	```jsx
	객체 instanceof 생성자함수
	```

	- 우변의 피연사자가 함수가 아니면 TypeError
	

![프로토타입 체인](https://github.com/agnes0304/modern-javascript-deepdive-docs/assets/86249667/62018d59-92cd-497b-8bec-7aef44eb557a)

### 오버라이딩과 프로퍼티 섀도잉

- 프로토타입 프로퍼티와 같은 이름의 프로퍼티를 인스턴스에 추가하면 덮어쓰기가 아닌, 인스턴스 프로퍼티로 추가

→ 인스턴스 메서드는 프로토타입 메서드를 **오버라이딩(overriding),** 프로토타입 메서드는 **가려진다(shadowing)**

>### Override vs Overloading
></br>오버라이딩
></br>- 상위 클래스의 메서드를 하위 클래스가 재정의하여 사용하는 방식
></br>오버로딩
></br>- 함수 이름은 동일하나, 파라미터 타입, 개수가 다른 메서드를 구현하고 파라미터에 의해 메서드를 구별, 호출하는 방식
></br>- JS는 지원하지 않음(arguments로 구현은 가능)

</br></br>

### 프로토타입의 교체

- 객체간의 상속관계를 동적으로 변경
- 프로토타입은 생성자 함수 혹은 인스턴스에 의해 교체할 수 있음

#### 1) 생성자함수에 의한 교체

```jsx
const Person = (function () {
	function Person(name){
		this.name = name;
	}
	
	// 여기서! 생성자 함수의 prototype프로퍼티를 통해서 프로토타입을 교체
	Person.prototype = {
		constructor:Person, // 이렇게 다시 constructor 프로퍼티와 생성자 함수를 연결할 수 있음
		sayHello(){
			console.log(`Hi! my name is ${this.name}`);
		}
	}
	
	return Person;
}());

const kim = new Person('Kim')
```

- `Person.prototype`에 객체 리터럴을 할당
- `Person` 생성자 함수가 생성할 객체의 프로토타입을 객체 리터럴로 교체
    - 객체 리터럴에는 constructor가 없음

#### 2) 인스턴스에 의한 교체

- 인스턴스의 `__proto__`로 접근가능한 점을 활용
    - `__proto__`는 사용을 지양하기로 → `setPrototypeOf()`활용
    
    → 이미 생성된 객체의 프로토타입을 결정하는 것
    

```jsx
function Person(name){
	this.name=name;
}

const lee = new Person('Lee'); // 객체를 생성했어

const changed = { // 객체 리터럴 -> constructor 연결 파괴됨 lee가 가리키는 changed는 constructor가 없게 됨.
	constructor: Person // constructor 다시 연결해줌
	sayHello(){
		console.log(`Hi, my name is ${this.name}`);
	}
}

Object.setPrototypeOf(lee, changed);
lee.sayHello();
```

→ 가능한 프로토타입 교체는 지양하자

</br></br>

# 상속

### 1. `Object.create(a,b*)` 메서드로 직접 상속

- 명시적으로 프로토타입을 지정, 새로운 객체 생성
- 추상 연산 호출
- `a`: 생성할 객체의 프로토타입으로 지정할 객체
- `b`: 생성할 객체의 프로퍼티 키와 프로퍼티 디스크립터 객체로 이뤄진 객체(선택)
- 장점
    - new 없이 객체 생성가능
    - 프로토타입을 지정해서 객체 생성가능
    - 객체 리터럴에 의해 생성된 객체도 상속 받을 수 있음
- 단점
    - 두번째 인자로 프로퍼티 정의하는 것 번거로움
 
</br>

### 2. 객체 리터럴 내부에서 `__proto__`에 의해 직접 상속

```jsx
const myPrototype = {
	a : 100;
}

const obj = {
	b : 50;
	// 객체 직접 상송
	// obj -> myPrototype -> Object.prototype -> null
	__proto__: myPrototype;
}

// 위 코드는 아래와 동일
const obj = Object.create(myPrototype, {
	b: {value:50, writable:true, enumerable:true, configurable:true}
})
```

</br></br>

# 정적 프로퍼티, 메서드

- 생성자 함수로 인스턴스를 생성하지 않아도 참조/호출할 수 있는 프로퍼티/메서드

```jsx
function User (name) {
	this.name = name;
}

User.prototype.method = function(){}

User.staticMethod = function(){}

User.staticProp = 'static prop';

const jiwoo = new User('Jiwoo');

const.method(); // 가능
User.staticMethod(); // 가능
jiwoo.staticMethod(); // 불가
```

- 정적 프로퍼티와 메서드는 인스턴스의 프로토타입 체인상에 존재하지 않음

</br></br>

# 프로퍼티 존재 확인

- `in` 연산자
    
    ```jsx
    key in obj
    ```
    
    - 상속받은 모든 프로토타입의 프로퍼티를 확인

- `Reflect.has( 객체참조, 프로퍼티키 )`
    - ES6에 도입
    - `in`연산자와 동일하게 동작(상속받은 모든 프로토타입의 프로퍼티 확인)

- `객체참조.hasOwnProperty( 프로퍼티 키 )`
    - 객체 고유 프로퍼티 키인 경우만 true


</br>

# 프로퍼티 열거

- `for ... in`문
    
    ```jsx
    for (변수선언문 in 객체){...}
    ```
    
    - 객체 프로퍼티 개수만큼 순회
    - 객체가 상속받은 모든 프로토타입의 프로퍼티 중 `[[enumerable]]` true 열거
        - 키가 Symbol인 프로퍼티는 열거 제외
        - 순서대로 나오겠지만 순서 보장하는 건 아님

- Object.keys/values/entries
    - 객체 고유의 프로퍼티만 열거
    - `Object.keys(객체참조)`: enumerable 프로퍼티 키를 배열로 리턴
    - `Object.values(객체참조)`: enumerable 프로퍼티 값을 배열로 리턴
    - `Object.entries(객체참조)`: enumerable 프로퍼티 키-값 쌍 배열로 리턴

