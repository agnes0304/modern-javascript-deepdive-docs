# 원시타입과 객체타입의 차이

|원시타입| 객체타입|
|:---:|:---:|
|immutable|mutable|
|변수에 할당 시 값이 저장| 변수에 할당 시 참조값이 저장|
|다른 변수에 할당하면 원시값이 복사되어 전달|원본의 참조값이 복사되어 전달|

</br>

### 원시 값은 변경 불가능하다?

```jsx
let sample = 'string';
sample[0] = 'S'; // 대문자로 바꾼다고 해서 'String'이 되지 않는다. 
```

read only 속성을 의미하기도 함. 변수는 값을 저장하기 위해 확보한 메모리 공간에 붙인 이름이다.
</br>따라서 이 메모리에 할당된 값을 변경할 수 없다는 것을 의미할 뿐, 재할당을 통해 변수의 값을 교체할 수는 있다. 
</br>🚨 const로 선언한 상수는 변수 값을 교체할 수 없다. 

</br>

### 원시 값이 복사되어 전달된다?
변수에 원시값을 갖는 변수를 할당하면 값이 복사되어 전달되는 것. 

</br>

### 참조값은 그렇다면 메모리 주소인가?

쉽게 설명하기 위해 메모리 주소라고 하지만 엄밀히 말하자면 자바스크립트에서 참조는 메모리에 저장된 객체에 대한 추상적인 링크 또는 포인터로 생각할 수 있다. 이는 실제 메모리 주소 자체가 아니라 자바스크립트 엔진이 객체에 액세스하기 위해 이해하고 사용하는 방식이다.
C와 같은 lower-level 언어에서 포인터는 메모리의 특정 위치를 가리키는 메모리 주소를 직접 저장한다. 하여 자바스크립트에서는 할 수 없는 메모리 주소를 직접 조작할 수 있다.

비슷하게, 자바스크립트에서 참조를 전달한다는 것은 실제 메모리 주소가 아닌 **객체에 대한 추상적인 링크나 포인터를 전달하**는 것을 의미한다.

</br></br>

# 객체 리터럴(object)

객체는 0개 이상의 프로터피로 구성된 집합이고 프로퍼티는 키와 값으로 구성된다.

```jsx
const user = {
	name: 'someone',
	gender: 'female',
	greet: function () { 
		console.log ('Hi! ${this.name}');
	}
}
```

함수도 값이 될 수 있는데 그 이유는 일급 객체라서 가능하다. 일급객체에 대한 자세한 내용은 다음 글에서 계속된다. 
</br>만약에 함수가 값인 경우는 일반 함수와 구분하기 위해 이를 `메서드`라고 한다. 메서드는 객체 내의 프로퍼티를 참조해서 조작할 수 있음.

</br>

## 객체 생성 방법

1. 객체 리터럴(위의 예시처럼 object를 직접 만들어주는 방식)
2. object 생성자 함수
3. 생성자 함수
4. objectCreate() 메서드
5. 클래스

</br>

### 키(key)

- 키에 문자열이나 `symbol`값 이외를 사용하면 암묵적 타입변환으로 **문자열**이 된다.
- 키는 중복 선언을 할 수는 있는데 먼저 선언한 값을 덮어쓴다.
- 대괄호로 값에 접근하는 경우 키는 따옴표로 감싸야 인식한다. `['key']`

</br>

### 값(value)

- 자바스크립트에서 사용할 수 있는 모든 값

</br>

### 메서드

앞서, 객체의 프로퍼티 중 값이 함수인 경우 일반 함수와 구분하여 메서드라고 언급한 바 있다. 
</br>또한 객체 내부의 프로퍼티 값에 엑세스하여 조작할 수 있다고 했는데 이렇게 객체 내부의 프로퍼티를 참조할 경우 `this` 키워드를 활용할 수 있다.
</br>`this`에 대해서도 향후 자세히 다룰 예정이다.

메서드를 표현하는 방식에는 두 가지가 있다.  

1. 프로퍼티에 할당
2. function 생략하고 사용

우리가 프로퍼티 값으로 변수를 사용하는 경우, 이름과 키가 동일하면 키를 생략하는 방식으로 객체 리터럴을 쓸 수 있다. `{ name }`

</br></br>

## 얕은 복사 vs 깊은 복사

두 방식으로 복사된 object는 원본과는 다르다. 

- 얕복: depth 1까지만 복사. 즉, 객체 내에 중첩된 객체에서는 참조값을 복사해서 가져간다.
    - 뒤에서 살펴볼 spread 문법이 얕복에 해당한다.

- 깊복: depth 끝까지 다 복사.

</br></br>


# `pass by value`와 `pass by reference`에 대해서.

프로그래밍에서 `pass by value`는 실제 값의 복사본이 전달된다는 의미이며 `pass by reference`는 메모리에 있는 객체에 대한 참조가 전달되는 것을 의미한다.

자바스크립트에서 
- 원시값(숫자, 문자열 등)은 변수가 액세스하는 위치에 직접 저장되며 값으로 전달된다.
- 참조 값(객체, 배열, 함수)은 메모리에 저장되며 변수는 이 참조타입의 값에 대한 참조를 값으로 보유한다. 즉 이 참조가 복사되어 전달된다.

</br>

### 변수가 액세스하는 위치랑 메모리는 다른 건가? 

원시값이 저장되는 곳은 변수에 직접 할당된 저장소, 즉 스택이라는 영역에 저장된다. 매우 빠르고 구조화된 영역으로 프로그램이 실행될때 운영체제로부터 해당 프로그램이 할당받는 주소공간의 일부라고 할 수 있다. 참조값은 객체에 대한 참조를 의미하는데 이 객체는 힙 메모리에 저장된다. 마찬가지로 힙도 프로그램이 실행될때 할당 받는 공간인데 스택보다 덜 복잡하고 유연한(사용자의 동적 할당이 가능한) 공간이지만 데이터에 액세스하는 속도가 느리다. 

</br>

### 자바스크립트에는 참조에 의한 전달은 없고 값에 의한 전달만 있다

요약하자면, 자바스크립트에서는 모든 것이 값으로 전달되는데 객체의 경우에 전달되는 값은 객체에 대한 참조이다.
</br>그래서 자바스크립트에는 참조에 의한 전달은 없고 값에 의한 전달만 있다고 할 수 있음. 

</br>

> 그 전달되는 값이 원시값이냐, 참조이냐의 차이일 뿐이다.