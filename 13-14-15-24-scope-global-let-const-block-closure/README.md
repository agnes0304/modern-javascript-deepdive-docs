>여기 나오는 내용은 <a href="https://github.com/agnes0304/modern-javascript-deepdive-docs/tree/main/23-executionContext#%EC%8B%A4%ED%96%89-%EC%BB%A8%ED%85%8D%EC%8A%A4%ED%8A%B8">실행 컨텍스트</a>를 먼저 공부하면 이해가 훨씬 수월합니다.

# 스코프(Scope)

모든 식별자는 자신이 선언된 위치에 의해, 다른 코드가 자신을 참조할 수 있는 유효 범위가 결정되고 이를 `스코프`라고 한다. 

- 식별자가 유효한 범위
- 네임 스페이스: 스코프 내에서 식별자는 유일해야 하나, 다른 스코프에는 중복일 수 있음.
- 스코프 체인
    - 스코프의 계층 구조
    - 변수 참조 시에 JS엔진은 스코프 체인을 통해 변수를 참조하는 코드의 스코프에서 시작해서 상위 스코프로 이동하며 식별자를 검색한다.
    - 렉시컬 환경이라는 자료구조로 실재한다. (<a href="https://github.com/agnes0304/modern-javascript-deepdive-docs/tree/main/23-executionContext#%EB%A0%89%EC%8B%9C%EC%BB%AC-%ED%99%98%EA%B2%BDlexical-environment">렉시컬 환경 바로가기</a>)
 
</br>

### 전역(global) vs 지역(local)

- 전역 변수는 어디서든 참조 가능
- 로컬은 함수 바디 내부를 의미
- 로컬 변수는 자신의 로컬 스코프와 하위 로컬 스코프에서 유효

</br>

### 함수 레벨 스코프

- `var`키워드 변수는 함수 코드 블록만을 로컬 스코프로 인정

</br>

### 렉시컬 스코프

- 정적 스코프(static)
- 함수의 호출 위치가 아니라 함수의 정의 위치에 따라서 함수의 상위 스코프를 결정한다.
- 대부분의 프로그래밍 언어에 해당.

>함수 호출 위치에 따라서 바뀌는 것은 동적 스코프


</br></br>

# 전역 변수(global variable)

### 변수의 라이프 사이클

- 선언으로 생성되고 할당으로 값을 얻는다.
- 전역변수의 라이프 사이클은 애플리케이션의 라이프 사이클과 일치
- 로컬변수의 라이프 사이클은 함수의 라이프 사이클과 일치
- 스코프가 메모리에서 해제될 때까지 변수가 유효함.
    - 메모리 해제는 그 누구도 참조하지 않을 때 발생함
 
</br>

## 전역 변수의 문제점

- `var`로 선언한 전역변수는 전역객체의 프로퍼티
- 전역객체는 코드 실행 이전에 어떤 객체보다 먼저 생성되고 (브라우저의 경우) 웹페이지 종료 직전까지 유효.
1. 메모리 리소스 소비 기간이 길다.
2. 암묵적 결합 인정
    1. 의도치 않은 변경 위험 인정
    2. 가독성 떨어짐
3. 스코프 체인 종점에 위치, 검색 속도 느림
4. 네임 스페이스 오염
    1. 파일 구분과 관계없이 단 하나의 전역객체 공유
    2. 식별자 충돌 발생 가능

</br>

## 전역 변수 남용 방지

1. 모든 함수를 즉시 실행 함수로 감싸면 전부 지역변수가 된다.
2. 전역에서 네임스페이스 객체를 생성하고 변수를 프로퍼티로 추가한다
    1. 결국 네임스페이스 객체를 전역으로 사용하는 방법이기에 좋아보이지 않음
3. 모듈 패턴
    1. 클로저를 기반으로 동작하며 전역 변수 남용을 방지하고 캡슐화 가능
    2. 클래스를 모방해서 관련변수 및 함수를 즉시 실행함수로 모듈화한 것
4. ES6 모듈
    1. 파일 자체에 독자적인 모듈 스코프를 제공하는 것. 
    2. 해당 모듈 내에서 `var`로 변수 선언해도 더이상 전역 변수가 되지 않는다. 


</br></br>

# let과 const

## 간단하게 다시 보는 `var`특징

- 재할당, 재선언 가능
    - 초기화문이 있으면 `var`가 없는 것처럼 동작(재할당)
    - 초기화문이 없으면 무시(에러 발생하지 않음)
    
    ```jsx
    var a = 1;
    var b = 10;
    
    var a = 100;
    var b;
    
    console.log(a); // 100
    console.log(b); // 10
    ```
    
- 할당문 이후 참조하면 선언문이 어디에 있든 참조가능(변수 호이스팅)
- var로 전역 변수 선언 시 전역 객체의 프로퍼티로 등록

</br>

## `let`

- 블록 레벨 스코프를 따른다.
- 변수 호이스팅이 발생하지 않는 것처럼 동작한다. (선언문 이전에 참조 시에 `Reference Error`)
    - 런타임 이전에 선언만 진행하고 초기화(`undefined`)는 변수 선언문에 도달하면 진행 = 일시적 사각지대
    
    ```javascript
    // ▶️ var 변수 호이스팅
    console.log(test); // undefined
    var test;
    console.log(test); // undefined
    test = 1;
    console.log(test); // 1

    // ▶️ let 변수 호이스팅
    console.log(sample); // ReferenceError = 일시적 사각지대
    let sample;
    console.log(sample); // undefined
    sample = 1;
    console.log(sample); // 1
    ```
    
- `let`으로 선언한 전역변수는 전역 객체 프로퍼티가 아니다. (실행 컨텍스트-렉시컬 환경 레코드에서 더 자세히 나옴)

</br>

>### 블록레벨 스코프
>- 모든 코드 블록을 로컬 스코프로 인정한다.
>- 반복문, 조건문, `try-catch`문 등이 해당

</br>

## `const`

- `let`과 상당부분 동일
- `const`로 선언한 변수는 선언과 초기화를 동시에 해야 한다.
    - 선언만 할 경우 `SyntaxError`
    ```jsx
    const test; // SyntaxError
    const test = 1;
    ```
- 재할당 금지


</br></br>

# 클로저

클로저란? 함수와 그 함수가 선언된 렉시컬 환경과의 조합이라고 한다. 
</br>함수를 일급 객체로 취급하는 함수형 프로그래밍 언어에서 사용되는 중요한 특성이다.
</br>하지만 정의만 가지고는 굉장히 당황스럽다.

## 함수가 선언된 렉시컬 환경?

```jsx
// 001
const a=1;

function outer(){
  const a=10;

  function inner(){
    console.log(a);
  }
  inner();
}
outer();

// 002
const a=1;

function outer(){
  const a=10;
  inner();
}

function inner(){
  console.log(a);
}

outer();

```

001코드는 10을 출력한다. inner 함수의 상위 스코프는 outer의 스코프이기 때문이다. 
</br>002코드에서는 1을 출력한다. inner가 정의된 시점의 상위 스코프는 전역이기 때문이다. 
</br>자바스크립트는 렉시컬 스코프를 다르기 때문에 호출되는 위치가 아니라 정의된 위치로 상위 스코프를 결정한다. 

</br>

## 렉시컬 스코프

함수는 자신이 정의된 환경(상위 스코프 참조)를 내부 슬롯 `[[Environment]]`에 저장한다.
이때 저장되는 상위 스코프 참조는 실행 중인 실행 컨텍스트의 렉시컬 환경을 가리킨다. 
>왜? 함수 정의가 평가되어 객체 생성하는 시점은 상위 함수가 평가되고 실행되고 있는 시점이기 때문.

그렇다면 어떻게 구현되어있는가? 
함수 코드 평가를 할 때 외부 렉시컬 환경에 대한 참조에 함수 객체의 내부 슬롯`[[Environment]]`에 저장된 렉시컬 환경의 참조가 할당된다.



🚧 작성 중... 🚧