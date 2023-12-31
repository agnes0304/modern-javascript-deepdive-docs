# 클래스

>프로토타입 기반 객체 지향언어이지만 ES6에서 클래스 개념이 도입되었다. 
></br>새로운 객체 생성 메커니즘

### 생성자 함수와의 차이점

1. `new` 없이 호출하면 에러
    - 기명 클래스의 경우 식별자가 아닌 클래스 이름으로 생성하면 `ReferenceError`
2. `extends`, `super`키워드 제공(상속)
3. 호이스팅 발생하지 않는 것처럼 동작
    - 클래스 선언 이후 참조가능(`let`, `const`와 동일하게 동작)
4. 클래스 내 모든 코드에 암묵적 `strict mode` 지정
5. 클래스의 `constructor`, 프로토타입 메서드, 정적 메서드는 모두 `[[Enumerable]]`이 `false`이다. (열거 불가)

### 클래스 정의

`class` 키워드로 정의
- 인스턴스를 생성하는 생성자 함수

### 메서드

>`function`키워드 생략한 메서드 축약표현(ES6)을 사용하여 정의하고 객체 리터럴과는 다르게 콤마(`,`) 필요 없다. 암묵적 strict mode로 실행되며 `for…in`, `Object.keys`등으로 열거 불가하다. *non-constructor이다

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

### 접근자 프로퍼티

- 앞서 인스턴스 프로퍼티는 constructor 내에 정의함.
- 접근자 프로퍼티는 자체적으로 값 슬롯을 갖지 않고 다른 데이터 프로퍼티의 값을 읽거나 저장하는 경우에 사용하는 함수. 
- 각 함수(getter, setter)이름은 인스턴스 프로퍼티처럼 참조하는 형식으로 사용

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

### 인스턴스 생성 과정

1. 생성과 `this` 바인딩
    
    - `new`와 함께 생성하면 클래스 내부 메서드 `[[Construct]]`가 호출된다. 
    - `constructor`내부 코드 실행에 앞서 빈 객체가 암묵적으로 생성되고
    - 이 인스턴스의 프로토타입으로 클래스의 prototype 프로퍼티가 가리키는 객체가 설정됨
    - 인스턴스는 `this`에 바인딩된다. 
    
2. `constructor` 내부 코드로 인스턴스 초기화
3. `this` 반환

</br></br>

# 클래스 필드

>클**래스 필드? 클래스가 생성할 인스턴스의 프로퍼티**
></br>자바와 유사하게 클래스 필드를 클래스 바디에 선언하면 에러가 나야 하는데 이제 클래스 기반 OOLang의 클래스 필드처럼 인스턴스 프로퍼티 정의할 수 있게 해둠(TC39 2021, stage 3제안

</br>

>**TC39?**
></br>- ECMA는 ECMASpcript말고도 다양한 기술 사양을 관리하는 기술 주체위원회(TC)가 여럿 존재하는데 그중에서 ECMA 사양관리담당이 TC39이다. 
></br>- 구글, 애플, MS, 모질라 등 브라우저 벤더와 트위터, 페북 등 기업으로 구성되어있다. 
></br>**TC39 process?**
></br>- 기존 ECMA 사양에 새로운 사양을 추가하기 위해 공식적으로 명문화 해둔 과정.
></br>- 0-4단계로 총 5단계이고 stage3: candidate까지 간 사양은 무리없이 4: finished로 가고 차기 ECMAScript 사양에 추가된다

- 클래스 바디에서 필드 정의하는 경우 `this`에 바인딩X (`this`는 클래스 `constructor`와 메서드 내에서만 유효)
- 함수는 일급 객체이기 때문에 필드에 할당할 수 있음(메서드 정의 가능)
    - 그러나 이 경우 클래스 메서드가 아닌 인스턴스 메서드가 됨(권장X)

</br>

## `private` 필드 정의

>사실 인스턴스 프로퍼티는 늘 `public`이다
></br>2021부터 tc39 stage3에 제안되어 있어서 `private`정의가능

- 필드 선두에 #을 붙인다(정의 시, 참조 시 모두)
- 클래스 내부에서만 참조가능
- 접근자 프로퍼티로 외부에서 접근 가능
- `constructor`가 아닌 클래스 바디에 정의해야함

## `static` 필드 정의

>2021부터 tc39 stage3에 제안되어있어서 `static` 정의가능

- `static`을 붙여서 정의

</br></br>

# 상속과 확장(`extends`와 `super`)

>프로토타입은 체인을 통해 자산을 상속받고 클래스는 기존 클래스를 상속받아 새로 확장 정의한다

![클래스 상속과 프로토타입 상속](https://github.com/agnes0304/modern-javascript-deepdive-docs/assets/86249667/2430f0f4-5f07-40c7-8e0c-f43e99a070bc)
>책에서 가져옴

- 프로토타입 상속과는 다른개념
- `extends`를 통해 상속받고 확장해갈 수 있음

```jsx
class Base {} //super 클래스
class Child extends Base {}
// 서브클래스
```

- 인스턴스의 프로토타입 체인과 클래스간 프로토타입 체인도 형성
- `[[Construct]]` 내부 메서드 가진 함수 객체로 평가되는 모든 표현식(생성자 함수)를 상속받을 수 있지만 `extends` 앞엔 무조건 클래스
- 서브클래스 constructor를 생략하면 암묵적으로 아래와 같이 정의

```jsx
constructor(...args){super(...args)
```

### super

- 호출하면 수퍼 클래스의 `constructor`를 호출
- 참조하면 수퍼클래스의 메서드를 호출할 수 있다

#### 수퍼 호출

- 서브 클래스에서 `constructor` 생략하지 않는 경우 무조건 수퍼 호출해야 함.
- 서브클래스 `constructor`에서 수퍼 호출 전까지 `this`참조 불가
- 수퍼는 서브클래스의 `constructor` 안에서만 호출한다

#### 수퍼 참조

- 메서드 내에서 참조허면 수퍼클래스 메서드를 호출할 수 있음
- `[[HomeObject]]` 를 가지는 함수만 수퍼를  참조할 수 있다(es6 메서드 축약표현으로 정의한 메서드만 가짐)

</br>

### 상속클래스의 인스턴스 생성과정

1. 자바스크립트 엔진은 클래스 평가할 때 서브랑 수퍼 구분하려고 `[[ConstructKind]]`라는 슬롯을 가짐, 여긴 `base`, `derived`를 값으로 함
	- **서브는 수퍼클래스에게 인스턴스 생성 위임 → 서브가 반드시 `constructor`에서 수퍼를 호출해야 하는 이유 ⭐**
	- 수퍼의 `constructor`가 호출됨(수퍼클래스가 평가되어 함수객체 코드 실행시작)
	- 수퍼 `constructor` 내부 `this`는 생성된 인스턴스를 가리킴
	- `new.target`은 이때 서브를 가리킴 인스턴스는 `new.target`이 가리키는 클래스가 생성한 것으로 처리

2. 수퍼클래스 인스턴스 초기화
   	- `constructor`가 실행 → `this`에 바인딩된 인스턴스 초기화

3. **서브클래스 `constructor`로 복귀 후 `this` 바인딩**

   	- 제어흐름이 서브클래스 `constructor`로 돌아와서 수퍼가 리턴한 인스턴스가 `this`에 바인딩
	</br>→ **수퍼가 호출되지 않으면 인스턴스 자체가 생성되지 않음** ⭐

5. 서브클래스 인스턴스 초기화

6. 인스턴스 리턴(암묵/ `this` 바인딩된 친구)
    
7. `constructor` 내부 코드로 인스턴스 초기화

8. this 반환
