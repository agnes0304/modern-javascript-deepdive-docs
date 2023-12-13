# 클래스

프로토타입 기반 객체 지향언어이지만 ES6에서 클래스 개념이 도입되었다. 
</br>새로운 객체 생성 메커니즘

## 생성자 함수와의 차이점

1. `new` 없이 호출하면 에러
    - 기명 클래스의 경우 식별자가 아닌 클래스 이름으로 생성하면 `ReferenceError`
2. `extends`, `super`키워드 제공(상속)
3. 호이스팅 발생하지 않는 것처럼 동작
    - 클래스 선언 이후 참조가능(`let`, `const`와 동일하게 동작)
4. 클래스 내 모든 코드에 암묵적 `strict mode` 지정
5. 클래스의 `constructor`, 프로토타입 메서드, 정적 메서드는 모두 `[[Enumerable]]`이 `false`이다. (열거 불가)

</br>

## 클래스 정의

`class` 키워드로 정의

### 메서드

`function`키워드 생략한 축약표현 사용하여 정의하고 객체 리터럴과는 다르게 콤마(`,`) 필요 없다.

- `constructor` : 인스턴스 생성 후 초기화하기 위한 메서드
    - 인스턴스 프로퍼티를 정의한다
    - “constructor” 이름 변경 불가
    - 생략(빈 객체)하거나 단 하나만 정의 가능
    - 별도 리턴문 없어야 함 → 암묵적 `this` 리턴
    - 정의가능한 메서드라고 했지만 메서드로 해석되진 않고 클래스 정의가 평가되면 `constructor`에 적힌 동작을 하는 함수 객체가 생성된다.
- prototype method
    - 여기서 정의한 메서드는 별도로 프로토타입 프로퍼티에 메서드로 추가하지 않아도 기본적으로 설정됨.
- `static` method
    - 인스턴스 생성 없이 호출할 수 있는 메서드 → 그래서 클래스로 호출
    - `static` 키워드를 메서드에 붙이면 정적 메서드가 된다.

```jsx
class Person {

	constructor(name){
		this.name = name;
	}

	greet(){
		console.log("Hi, my name is ${this.name}")
	}

	static reply(){
		console.log('Hi');
	}
}

const me = new Person('jiwoo');
me.greet();
Person.reply();
```
</br>

### 접근자 프로퍼티

앞서 인스턴스 프로퍼티는 constructor 내에 정의함.
</br>접근자 프로퍼티는 자체적으로 값 슬롯을 갖지 않고 다른 데이터 프로퍼티의 값을 읽거나 저장하는 경우에 사용하는 함수. 
</br>각 함수(getter, setter)이름은 인스턴스 프로퍼티처럼 참조하는 형식으로 사용

- `get` : getter 함수 정의 시, 키워드로 사용
- `set`: setter 함수 정의 시, 키워드로 사용

```jsx
...
	get fullName {
		return `${this.firstName} ${this.lastName}`;
	}
	set fullName(name) {
		[ this.firstName, this.lastName ] = name.split(' ');
	}
...

me.fullName('Jiwoo Choi');
console.log(me.fullName); // 'Jiwoo Choi'
```

</br>

## 인스턴스 생성 과정

1. 생성과 this 바인딩
    
    >- new와 함께 생성하면 클래스 내부 메서드 [[Construct]]가 호출된다.
    >- constructor내부 코드 실행에 앞서 빈 객체가 암묵적으로 생성되고
    >- 이 인스턴스의 프로토타입으로 클래스의 prototype 프로퍼티가 가리키는 객체가 설정됨
    >- 인스턴스는 this에 바인딩된다. 
    
2. constructor 내부 코드로 인스턴스 초기화
3. this 반환


🚧 작성 중 🚧
