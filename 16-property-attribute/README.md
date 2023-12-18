> 개인적으로 17,18장을 먼저 공부하며 맛보기를 한 다음에 다시 돌아오니 읽기가 수월했다.


# Property Attribute

- 내부 슬롯, 내부 메서드?
    - 엔진의 구현 알고리즘 설명을 위해 ECMAScript사양에서 사용하는 슈도 프로퍼티, 슈도 메서드이다. 이중 대괄호로 감싸 표현한 것들
    - ‘내부’ → 자바스크립트 내부 로직이기때문에 접근, 호출 방법을 별도로 제공하진 않음.
        - 예외: `__proto__` 로 프로토타입 슬롯 접근

- JS엔진은 프로퍼티를 생성할 때 엔진이 관리하는 프로퍼티 상태(내부 슬롯)을 나타내는 프로퍼티 어트뷰트를 기본값으로 자동 정의
    - 상태에는 뭐가 있나? 값`[[Value]]`, 갱신가능`[[Writable]]`, 열거가능`[[Enumerable]]`, 재정의가능`[[Configurable]]`
    - `Object.getOwnPropertyDescriptor(객체참조, 프로퍼티키)`로 간접확인가능 → 프로퍼티 디스크립터 객체 리턴
      `Object.getOwnPropertyDescriptors(객체 참조)`를 하면 객체들 전부 리턴
        
        ```jsx
        const person = {
        	name: 'jiwoo'
        }
        
        console.log(Object.getOwnPropertyDescriptor(person, 'name')); 
        // { value: 'jiwoo', writable:true, enumerable:true, configurable:true } -> 프로퍼티 디스크립터 객체
        
        console.log(Object.getOwnPropertyDescriptor(person));
        // { name:{ value: 'jiwoo', writable:true, enumerable:true, configurable:true } }
        ```
        

### 데이터 프로퍼티

- 키-값으로 구성된 프로퍼티

| 프로퍼티 어트리뷰트 | 프로퍼티 디스크립터 객체의 프로퍼티 | 설명 |
| --- | --- | --- |
| [[Value]] | value | • 프로퍼티 키로 값에 접근하는 경우 리턴</br>• 프로퍼티 키로 값을 변경하는 경우 재할당됨. 이때 프로퍼티 없으면 동적 생성 후 값을 저장 |
| [[Writable]] | writable | • 프로퍼티 값 변경 여부 |
| [[Enumerable]] | enumerable | • 프로퍼티 열거 여부</br>• false인 경우, for - in, Object.keys 사용 불가 |
| [[Configurable]] | configurable | • 프로퍼티 재정의 가능 여부 </br>• false인 경우 프로퍼티 삭제, 값 변경 금지 |

### 접근자 프로퍼티

- 다른 프로퍼티 값을 읽거나 저장할 때 호출되는 접근자 함수로 구성된 프로퍼티
- get, set, enumerable, configurable을 가짐
- getter, setter라고도 부름

| 프로퍼티 어트리뷰트 | 프로퍼티 디스크립터 객체의 프로퍼티 | 설명 |
| --- | --- | --- |
| [[Get]] | get | • 접근자 프로퍼티를 통해 데이터 프로퍼티 값을 읽을때 호출되는 접근자 함수 |
| [[Set]] | set | • 접근자 프로퍼티를 통해 데이터 프로퍼티 값을 저장할 때 호출되는 접근자 함수 |
| [[Enumerable]] | enumerable | • 데이터 프로퍼티와 동일 |
| [[Configurable]] | configurable | • 데이터 프로퍼티와 동일 |

```jsx
const person = {
	firstName: 'jiwoo'
	lastName:'choi'

	get fullName(){
		return `${this.firstName} ${this.lastName}`;
	}

	set fullName(name){
		[this.firstName, this.lastName] = name.split(' ');
	}
}

// 데이터 프로퍼티를 통한 참조
console.log(person.firstName + ' ' + person.lastName);

// 접근자 프로퍼티를 통한 참고
console.log(person.fullName);
```

</br>

### 프로퍼티 정의

>새 프로퍼티를 추가하면서 프로퍼티 어트리뷰트를 명시적으로 정의하거나 기존의 것을 재정의하는 것을 의미

- `Object.defineProperty(객체 참조, 데이터프로퍼티키 문자열, 프로퍼티 디스크립터 객체)`를 통해서 한번에 하나
- `Object.defineProperties()`를 통해서 한번에 여러개

```jsx
const person = {};

Object.defineProperty(person, 'firstName', {
	value: 'jiwoo',
	writable: true,
	enumerable: true,
	configurable: true
})

// 디스크립터 객체 프로퍼티 누락시키는 경우 undefined, false가 기본
```

</br>

### 객체 변경 방지

- 얕은 변경 방지 → 중첩된 객체까지 동결할 수 없음

| 구분 | 메서드 | 프로퍼티 추가 | 프로퍼티 삭제 | 프로퍼티 값 읽기 | 프로퍼티 값 쓰기 | 프로퍼티 어트리뷰트 재정의 |
| --- | --- | --- | --- | --- | --- | --- |
| 객체 확장금지 | Object.preventExtensions | X | O | O | O | O |
| 객체 밀봉 | Object.seal | X | X | O | O | X |
| 객체 동결 | Object.freeze | X | X | O | X | X |

- 확장 가능한 객체 여부는 `Object.isExtensible()` → true / false
- 밀봉된 객체 여부는 `Object.isSealed()` → true / false
- 동결된 객체 여부는 `Object.isFrozen()` → true / false
