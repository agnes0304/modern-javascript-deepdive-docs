# 정규 표현식

>일정한 패턴을 가진 문자열의 집합을 표현하기 위해 사용하는 형식 언어(formal language)

- 패턴 매칭 기능 제공
    - 특정 패턴과 일치하는 문자열 검색, 추출, 치환
    - 반복문, 조건문 없이 패턴 정의, 테스트로 체크 가능
- 주석, 공백 허용하지 않고 여러 기호 사용
- Pearl의 정규표현식 문법을 ES3때 도입

</br>

## 정규 표현식 생성

>패턴과 플래그로 구성

1. 정규 표현식 리터럴
2. `RegExp` 생성자 함수 사용

```jsx
const target = "Hi! My name is Jiwoo"

// RegExp 리터럴
const firstRegexp = /name/i;
// / ~ / 시작과 종료 기호
// name는 패턴
// i는 플래그: 대소문자 구분 없이 검색

// RegExp 생성자함수
const secondRegexp = new RegExp(/name/i); // ES6 버전

firstRegexp.test(target); // true
secondRegexp.test(target); // true
```

### 플래그
    
  | 종류 | 의미 | 설명 |
  | --- | --- | --- |
  | i | ignore case | 대소문자 구분 없이 패턴 검색 |
  | g | global | 타겟 내에서 패턴과 일치하는 모든 문자열 전역 검색 |
  | m | multi line | 문자열 행이 바뀌어도 패턴 검색을 계속 |
  - 이 밖에도 s, u, y가 있음 (잘 사용하지 않음)

</br>

### 패턴
- 문자열 검색: 패턴에 문자열, 문자를 지정

- 임의의 문자열 검색: `.`은 임의의 문자 한개를 의미
        
  ```jsx
  const target = "hello, hi"
  const regExp = /.../g;
  target.match(regExp); // ["hel", "lo,", " hi"]
  ```
        
- `P{m,n}` 반복 검색: 패턴P가 최소 m, 최대 n번 반복되는 문자열 의미 / , 뒤에 공백있어서는 안 됨.
        
  ```jsx
  const target = "A AA B BB Aa Bb AAA";
  const regExp  = /A{1,2}/g;
  const secondRegExp  = /A{2,}/g; // 최소 2번이상 반복되는 문자열
  const thirdRegExp  = /A+/g; // 최소 한 번 이상 반복되는 문자열
        
  target.match(regExp); // ["A","AA","A","AA","A"]
  target.match(secondRegExp); // ["AA","AAA"]
        
  const secondTarget = "color colour";
  const reg = /colou?r/g; // colo다음 u가 0번포함 최대 한번 이상 반복되고 r이 이어지는
  ```
        
- OR 검색: `|`는 or를 의미함
        
  ```jsx
  const target = "A AA B BB Aa Bb AAA";
  const regExp  = /A|B/g; // A 혹은 B
  const regExp  = /A+|B+/g; // A 혹은 B가 한번이상 반복되는 문자열
  const regExp  = /[AB]+/g; // 위와 동일
  const regExp  = /[A-Z]+/g; // A에서 Z까지 한번이상 반복되는 문자열
  const regExp  = /[A-Za-z]+/g; // 대소문자 구분 없이
        
  const regExp  = /[0-9]+/g; // 0-9까지 한번이상 반복되는 문자열
  const regExp  = /[\d]+/g; // \d는 0-9까지의 숫자를 의미한다. \D는 문자를 의미한다. \w는 알파벳, 숫자, 언더스코어를 의미한다. \W는 
  ```
        
  | \d | \D | \w | \W | \s |
  | :---: | :---: | :---: | :---: | :---: |
  | 0 ~ 9까지의 숫자 | 문자 | 알파벳, 숫자, 언더스코어 | 알파벳, 숫자, 언더스코어가 아닌 문자 | 여러가지 공백 |
  | [0-9] | [^0-9] | [A-Za-z0-9_] | [^A-Za-z0-9_] | [\t\r\n\v\f] |
      
- NOT 검색: `[...]` 내의 ^은 not을 의미한다.

- 시작 위치로 검색: `[...]` 밖의 ^은 문자열의 시작을 의미한다.

- 마지막 위치로 검색: $는 문자열 마지막을 의미한다.
        
  ```jsx
  const url = "https://google.com";
        
  const reg = /^http/;
  const exp = /com$/;
        
  reg.test(url); // true
  exp.test(url); // true
  ```
        
</br>

### RegExp.prototype 메서드

- `exec()`
    - 인수로 전달받은 문자열에 정규표현식 패턴을 검색하여 매칭 결과를 배열로 리턴
    - 첫번째 매칭 결과만 리턴(`g` 플래그 여부와 상관없음)
        
        ```jsx
        const target = "Hi! My name is Jiwoo"
        const regexp = /**name**/i;
        
        regexp.exec(target); // ["name", index:7, input:"Hi! My name is Jiwoo", groups:undefined]
        ```
        
- `test()`
    - 인수로 전달받은 문자열에 정규표현식 패턴을 검색하여 매칭 결과를 boolean 리턴

- String.prototype`.match()`
    - 대상 문자열과 인수로 전달받은 정규표현식과의 매칭결과를 배열로 리턴
    - `g` 플래스 지정시, 모든 매칭 결과 배열로 리턴
        
        ```jsx
        const target = "Hi! My name is Jiwoo"
        const regexp = /**name**/i;
        
        target.match(regexp); // ["name", index:7, input:"Hi! My name is Jiwoo", groups:undefined]
        ```
        
</br>

### 자주 사용하는 정규표현식

>유효성 검사에서 사용할 수 있다.

- 숫자로만 이뤄진 문자열인가?
- 아이디로 사용 가능한가?(알파벳 대소문자, 숫자로 시작하고 끝나면서 4-10자리인지)
- 메일 형식에 맞는가?
- 특수문자 포함여부?
    
    ```jsx
    const target = "agnes0304"
    const regExp = /[^A-Za-z0-9]/gi;
    regExp.test(target); // false
    ```
    
    - 제거할 때는 `replace()` 사용 가능
 
</br></br>

---

# String
