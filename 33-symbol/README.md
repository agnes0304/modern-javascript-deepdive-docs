# Symbol

>ES6에서 도입된 변경불가능한 원시 타입의 값

- 다른 값과 중복되지 않는 유일무이한 값
- 충돌위험이 없는 프로퍼티 키를 만들기 위해 사용

</br>

### Symbol 생성

- 함수 호출로만 생성
- new와 함께 호출하지 않음(객체가 아니라 원시값 생성이기 때문)
- 문자열을 인수로 전달할 수 있으나 symbol값 생성에 영향을 주지 않음
- 객체처럼 접근하면 암묵적 래퍼 객체 생성
- 문자열이나 숫자값으로 암묵적 타입변환 되지 않음
- 불리언 값으로는 변환가능

</br>

### Symbol 메서드

- `Symbol.for()`: 인수로 전달받은 문자열을 키로 하여 symbol값의 쌍이 저장되어있는 전역 심벌 레지스트리(global symbol registry)에서 해당 키와 일치하는 symbol값을 검색한다.
    - 성공하면 검색된 symbol 값 리턴
    - 실패하면 새로운 symbol 값 생성 후 메서드 인수를 키로하여 전역 심벌 레지스크리에 저장, 생성된 symbol 값 리턴
- `Symbol.keyFor()`: 전역 심벌 레지스트리에 저장된 symbol값의 키를 추출할 수 있음.

```jsx
const s1 = Symbol.for('jiwoo'); // 검색해서 있으면 symbol값 리턴, 없으면 생성하고 symbol값 리턴
Symbol.keyfor(s1); // jiwoo

const s2 = Symbol();
Symbol.keyFor(s2); // undefined -> Symbol함수를 호출해서 생성한 심벌값은 전역 심벌 레지스트리에 등록되어 관리되지 않음.
```

</br>

### Symbol과 상수

아래와 같이 변경되거나 중복될 위험이 있는 상수를 Symbol로 관리할 수 있다. 

```jsx
const Direction = {
	UP: 1,
	DOWN: 2,
	LEFT: 3,
	RIGHT: 4,
}

const Direction = {
	UP: Symbol('up'),
	DOWN: Symbol('down'),
	LEFT: Symbol('left'),
	RIGHT: Symbol('right'),
}
```

</br>

### Symbol과 프로퍼티 키

- 프로퍼티 키로 사용할 심벌값에 대괄호 사용

```jsx
const obj = {
	[Symbol.for('something')]:1
}
```

</br>

### Symbol과 프로퍼티 은닉

- 위의 방법으로 생성한 프로퍼티는 `for…in` 문, `Objects.keys`, `Object.getOwnPropertyNames`로 찾을 수 없음
- 예외: `Object.getOwnPropertySymbols`사용하면 찾을 수 있어짐

</br>

### Symbol과 표준 빌트인 객체 확장

- 표준 빌트인 객체에 사용자 정의 메서드를 추가하는 것은 권장하지 않으나
- Symbol값을 키로 생성하는 경우 어떤 키와도 충돌되지 않아 안전할 수 있다.
