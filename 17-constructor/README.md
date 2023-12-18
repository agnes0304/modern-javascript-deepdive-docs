# 생성자 함수를 통한 객체 생성

- 생성자 함수는 일반 함수와 동일한 방법으로 정의 → `new`로 호출하면 생성자 함수로 동작함
- `new` 연산자와 생성자 함수 호출 → 인스턴스 생성
    
    ```jsx
    // Object() 빌트인 생성자 함수
    const person = new Object();
    ```
    
- 프로퍼티, 메서드 추가로 객체 완성
- 객체 리터럴은 단일 객체만 생성 ↔ 객체 생성자 함수는 프로퍼티 구조가 동일한 객체 여러개 생성가능(클래스)
    
    ```jsx
    function Circle(radius){
    	this.radius = radius;
    	this.getDiameter = function(){
    		return 2 * this.radius;
    	}
    }
    
    const c1 = new Circle(10);
    const c2 = new Circle(50);
    ```
</br> 

### 인스턴스 생성과정

- 암묵적으로 빈 객체가 생성, this에 바인딩. → 런타임 이전에 실행된다.
- 인스턴스 초기화.
    - 함수 내 코드 실행 → 인스턴스 초기화
    - 초기화된 인스턴스가 바인딩되어있는 this를 암묵적으로 리턴
        → 명시적으로 리턴문에 객체를 반환하면 암묵적으로 리턴되는 this가 무시된다. 
          만약 원시값을 리턴하면 원시값은 무시되고 this가 리턴
    
    → 그니까 **생성자함수 내의 리턴은 생략하자**
    
</br>

### 내부 메서드 [[Call]], [[Construct]]

- 함수는 객체 → 일반 객체의 내부 슬롯, 내부 메서드 전부 가짐
- 함수는 일반 객체와는 다름 “호출할 수 있다”
    - `[[Environment]]`, `[[FormalParameters]]`등의 내부 슬롯과 `[[Call]]`, `[[Construct]]` 내부 메서드 가짐
    - 일반 함수로 호출되면 `[[Call]]`가 호출
    - new 연산자로 호출되면 `[[Construct]]`가 호출

>[[Call]]을 가지면 callable하다
>[[Construct]]를 가지면 constructor, 생성자 함수로 호출할 수 있는 함수

</br>

### constructor vs non-constructor

- JS엔진은 함수 정의를 평가하여 객체 생성할 때 **정의 방식**에 따라 구분한다.
    
    | constructor | non-constructor |
    | --- | --- |
    | • 함수선언문</br>• 함수 표현식</br>• 클래스 | • 메서드(ES6 메서드 축약표현)</br>• 화살표 함수 |

</br>

### new 연산자

- 일반 함수, 생성자 함수에 특별한 형식적 차이 없음
- new랑 같이 호출하면 생성자 함수로 동작. 이때 생성자 함수 내부의 this는 생성자 함수가 생성할 인스턴스
    - 일반 함수로 호출하면 this는 window를 가리킴

### new.target

- ES6에서 지원
- 생성자함수가 new 없이 호출되는 것을 방지
- constructor인 모든 함수 내부에서 암묵적인 로컬 변수로 사용(메타 프로퍼티)
- new로 생성자 함수로 호출하면 new.target은 함수 자신이 되고 그렇지 않으면 undefined

```jsx
function Circle(radius){
	//...

	if(!new.target){
		return new Circle(radius)
	}
}
```
