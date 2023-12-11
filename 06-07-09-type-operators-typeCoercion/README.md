# 데이터 타입

자바스크립트는 선언이 아닌 할당에 의해 타입이 결정되며 재할당을 통해 변수의 타입이 바뀔 수 있는 동적 타입 언어이다.
</br>원시타입과 객체타입이 있다. 

</br>

## 원시타입(primitive type)

`number`, `string`, `boolean`, `undefined`, `null`, `symbol`

🚨 `undefined`는 변수 선언 시 초기화값으로 할당됨. 개발자가 의도적으로 변수에 할당하면 X. `null` 사용할 것. 

</br>

### Symbol 타입

ES6에서 새로 도입된 타입으로, 변경 불가능한 타입. 다른 값과 중복되지 않는 값. 
</br>함수를 호출해서 생성하는 특징이 있으며 절대 외부에 노출되지 않는다. 

```jsx
// Symbol 타입
var key = Symbol('key');
console.log(typeof key);  // symbol
```

</br>

## 참조타입(reference type)

객체타입(Object type)이라고 하기도 한다. 
</br>자바스크립트를 이루고 있는 거의 모든 것이 객체이다.
- 객체 리터럴에서 자세히 다룰 예정 : <a href="">바로가기</a>


</br></br>

# 연산자와 타입변환

</br>


### 문자열 연결 연산자

`+` 연산자는 하나 이상이 문자열인 경우 문자열 연결 연산자로 동작함. 그 외는 산술로 동작함.

</br>

### 일치비교 연산자

`===` 연산자에서 `NaN`는 유일하게 자기자신과 일치하지 않는 값이다. 그래서 숫자가 `NaN`인지 확인하려면 `Number.isNaN`써야 확인이 가능하다.
```javascript
isNaN(NaN); // true
isNaN(1); // false
```
    
0과 -0을 일치비교/동등비교(`==`)하면 `true`가 리턴된다.
    
```js
Object.is(0, -0);` // false
```
    
</br>

### `**` - 지수 연산자

ES7(2016)에서 도입되었음. 

```js
2**2 === Math.pow(2, 2);
```

</br>

### typeof 연산자의 리턴 type과 data type은 온전히 일치하지 않는다.

```
`string`, `number`, `boolean`, `function`, `object`, `undefined`, `symbol`로 리턴된다. 
```

- `null`은 `object`로 리턴된다.
- 선언하지 않은 식별자를 `typeof`하면 `reference error`가 아니라 `undefined`가 리턴된다.

</br></br>

## 연산자를 통한 타입변환

`explicit coercion`(명시적 타입변환)과 `type casting`(타입 캐스팅)은 개발자가 의도적으로 값의 타입을 변환하는 것이다.</br> 
`implicit coercion`(암묵적 타입변환)과 `type coercion`(타입 강제 변환)은 표현식을 evaluate하는 과정에서 JS엔진에 의해 타입이 변환되는 것이다. 

</br>

### 왜 연산자와 묶었냐? `+`연산자와 더불어 타입변환이 가능하기 때문.

- `+` 단항 연산자는 숫자 타입의 값으로 암묵적 타입변환을 한다. 
- `+ ''`은 문자열로 타입변환한다.

```javascript
// ▶️ to Number type
+""; // 0
+"0"; // 0
+"1"; // 1
true; // 1
+false; // 0
+null; // 0

+[]; // 0

+"string" + // NaN
+undefined; // NaN
+Symbol(); // TypeError: Cannot convert a Symbol value to a number
+{}; // NaN
+[10, 20]; // NaN
+function () {}; // NaN


// ▶️ to String type
NaN + '';             // "NaN"
Infinity + ''         // "Infinity"
null + '';            // "null"
undefined + '';       // "undefined"
({}) + '';            // "[object Object]"
Math + '';            // "[object Math]"
[] + '';              // ""
[10, 20] + '';        // "10,20"
(function(){}) + '';  // "function(){}"
Array + '';           // "function Array() { [native code] }"

(Symbol()) + '';      // TypeError: Cannot convert a Symbol value to a string
```

</br>

### boolean 타입변환

자바스크립트의 boolean에는 truthy(참으로 평가하는 값)과 falsy(거짓으로 판단하는 값)이 존재한다.</br>falsy를 제외한 값은 전부 truthy이다.

falsy로 판단하는 값은 아래와 같다. 

`false`, `undefined`, `null`, `0`,`-0`, `NaN`, `''`

</br>

### 명시적 타입 변환(explicit coercion)

1. 빌트인 생성자 함수를 통해서 할 수 있다. 
  - `String()`, `Number()`, `Boolean()` 을 new 키워드 없이
2. 타입변환 하고자 하는 값에 `toString()`, `parseInt()`과 같은 빌트인 메서드
3. 암묵 타입변환 방법 중, 빈 문자열을 더하는 방식으로 string 타입으로 변환하거나 +를 통해 number 타입으로 변환이 가능.

```javascript
// ▶️ to String
String(1);              // "1"
String(NaN);            // "NaN"
(Infinity).toString();  // "Infinity"
(true).toString();      // "true"
1 + '';                 // "1"

// ▶️ to Number
Number("0"); // 0
Number("10.53"); // 10.53
Number(false); // 0
parseInt("10.53"); // 10
parseFloat("10.53"); // 10.53
+"0"; // 0

// 🚨 to true or false
!!'a'; // true
!'a'; // false
```

</br></br>

# 단축평가

논리 연산의 결과를 결정짓는 피연산자를 반환한다. 단축평가는 표현식을 평가하는 도중에 평가결과가 확정된 경우엔 나머지 평가과정을 생략한다. 
</br>이를 통해 불필요한 연산을 피할 수 있다는 장점이 있다. 

</br>

### 논리연산자 `&&`, `||`

- `A && B`

첫 번째 피연산자(A)가 `falsy`이면 JavaScript는 두 번째 피연산자(B)에 관계없이 전체 표현식이 참일 수 없다는 것을 알고 있다. 
</br>따라서 B를 평가하지 않고 A을 리턴한다.
</br>😲우리가 프레임워크에서 조건부로 렌더링을 할 때 `(A && B)` 이렇게 쓰는 방식은 논리 연산자를 통한 단축평가 방법이다. 

- `A || B`

A가 `truthy`이면 JavaScript는 두 번째 피연산자에 관계없이 전체 표현식이 참이라는 걸 안다. 
</br>따라서 두 번째 피연산자를 평가하지 않고 A를 리턴한다. 만약 A가 거짓이면 B가 리턴된다. 

</br>

### 옵셔널 체이닝 연산자 `?.`

왼쪽 피연산자가 `null`이나 `undefined`인 경우 `undefined`을 리턴하고 그렇지 않으면 오른쪽 프로퍼티 참조를 이어간다. 그러니까 `A?.B`라고 되어있으면 ‘만약에 A가 null, undefined이 아니면 B에 대한 참조 계속 이어가라’ 라고 사용할 수 있다. 

이 친구는 왼쪽의 피연산자(예시에서 A)가 `falsy`여도 참조를 이어가는 특징이 있다.

```jsx
var a = "";
var length = a?.length; // 0
```

</br>

### `null` 병합 연산자 `??`

왼쪽 피연산자가 `null`이나 `undefined`인 경우 오른쪽 피연산자를 리턴한다. 이 연산자는 변수 기본값 설정에 유용하다. 

여기서는 왼쪽 피연산자가 `falsy`라도 걔를 반환한다. 그 값 그대로를 반영함.

```jsx
var a = '' ?? "default" // ''
```
