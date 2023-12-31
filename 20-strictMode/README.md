일반적인 자바스크립트 작동 방식은 암묵적 전역이다. </br>이는 개발자의 의도와 관계없이 오류를 발생시키는 원인이 될 수 있다. 

이를 방지하기 위해서 `var`대신에 `let`과 `const`를 통해 변수를 선언하고 사용을 장려하기도 했는데 그럼에도 불구하고 초래되는 다양한 오류의 방지를 위해 `strict mode`가 등장했다. 

# 'use strict'

- es5부터 추가
- es6에서 도입된 클래스와 모듈은 기본적으로 적용됨
- 글로벌 선두나 함수 선두에 `"use strict"`으로 작성

</br>

# 즉시 실행 함수로 감싼 스크립트 단위로 사용하자

- 전역 strict mode는 피하자.
    - 🤔 _왜?_ strict mode는 스크립트 단위로 적용된다.
    - 만약 외부 라이브러리를 많이 사용한 경우 일부 외부 라이브러리가 이 모드가 아닐 수 있음. 혼용으로 오류가 발생할 수 있음.
- 함수 단위 strict mode도 피하자
    - 🤔 _왜?_ 모든 함수에 적용할거야? 어떤 건 적용하고 잊어먹고 있다가 다른 건 적용 안하고 그럴거잖아.
 
</br>

## strict mode가 감지하는 에러

- 키워드 없이 선언한 변수(선언없이 참조한 변수) → `ReferenceError`
- delete로 변수, 함수 삭제 시 → `SyntaxError`
- 매개변수 이름 중복 → `SyntaxError`
- with문 사용 → `SyntaxError`

</br>

## strict mode사용 시 변화

- 일반 함수에 this 쓰면 undefined 바인딩됨. → 에러는 안남
- 파라미터에 인수를 재할당해도 arguments 객체가 업데이트 되지 않음.
