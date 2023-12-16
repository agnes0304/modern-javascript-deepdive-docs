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

>표준 빌트인 객체

</br>

### 생성자 함수 String

- `new`와 함께 호출, String 인스턴스 생성

```jsx
const str = new String(); // String { [[StringData]] : "" }
const test = new String('test'); // String { 0: 't', 1:'e', 2:'s', 3:'t', length:4, [[StringData]] : 'test'}
```

- 유사 배열 객체이자 iterable : 인덱스로 접근 가능
- 원시타입의 값(primitive value) : 변경 불가(immutable)
- 문자열 아닌 값 전달 시 문자열로 변환
- `new` 없이는 명시적 타입 변환으로 사용
- `.length` : 문자열의 문자 개수

</br>

### String.prototype 메서드

- String은 원시타입 값이므로 String 래퍼 객체도 read only 객체로 제공됨

- `.indexOf(s, i)`
    - 문자열`s` 검색하여 첫번째 인덱스 리턴
    - 실패 시 `-1`리턴
    - `i`: 검색을 시작할 인덱스 전달 (선택)

- `.search(r)`
    - 정규표현식 `r`과 매치하는 문자열 검색하여 인덱스 리턴
    - 실패 시 `-1` 리턴

- `.includes(s, i)`
    - ES6에서 도입
    - `s`여부 확인 후 boolean리턴
    - `i`: 검색을 시작할 인덱스(선택)

- `.startsWith(s, i)`
    - ES6에서 도입
    - `s`로 시작하는지 확인하여 boolean 리턴
    - `i`: 검색을 시작할 인덱스(선택)

- `.endsEith(s, l)`
    - ES6에서 도입
    - `s`로 끝나는지 확인하여 boolean 리턴
    - `l`: 처음부터 검색할 문자열 길이(선택)

- `.charAt(i)`
    - `i`에 위치한 문자열 검색하여 리턴
    - `i`가 범위 밖일 경우 빈 문자열 리턴
    - `charCodeAt()`, `codePointAt()`이 유사하다

- `subString(i, j)`
    - 인덱스 `i`부터  ~ 인덱스 `j` 직전까지 문자열 리턴(`j`는 선택)
    - `i > j`인 경우 교환되어 리턴된다
    - `i < 0` / `NaN`인 경우 0으로 취급
    - `i > 문자열 길이`인 경우 `str.length`로 취급
    
    >💡 파이썬 슬라이스 문법처럼 사용해 볼 수 있겠다
    
- `.slice(i, j)`
    - `substring()`과 동일
    - `i` 에 음수 전달 시 가장 뒤에서 부터 시작하여 문자열 잘라서 리턴

- `.toUpperCase()` / `.toLowerCase()` : 각각 대문자, 소문자로 리턴

- `.trim()` : 앞 뒤 공백 제거 후 리턴
    - `trimStart()`, `trimEnd()`각각 앞, 뒤 공백만 제거후 리턴

- `.repeat(n)`
    - `n`만큼 반복해 연결한 문자열 리턴
    - `n = 0` 이면 빈 문자열 리턴
    - `n < 0` 이면 RangeError

- `.replace(s, t)`
    - 대상 문자열에서 `s`를 검색하여 `t`로 치환한 문자열 리턴
    - 첫번째 결과만 치환
    - `$&` : 검색된 문자열 → 특수한 교체 패턴 사용가능
    - `s`에 정규 표현식 사용가능
    - `t`에 치환 함수 전달가능: `s`를 매치한 결과를 `t`의 인수로 전달하여 호출하고 치환함수가 리턴한 결과와 매치결과를 치환(즉 매치한 결과를 치환함수에 넣고 그 결과값을 리턴)

- `.split(s, l)`
    - `s`(문자열/정규표현식)을 검색해서 구분하고 분리된 각 문자열로 이뤄진 배열 리턴
    - 빈 문자 전달 시 문자 단위 구분한 배열 리턴
    - 인수 생략 시 문자열 전체를 단일 요소 하는 배열 리턴
    - `l`: 배열의 길이를 지정할 수 있다
    
    ```jsx
    const str = "Hello, Hi"
    str.split(', '); // ["Hello", "hi"]
    str.split(); // ["Hello, Hi"]
    str.split("") // ["H", "e", "l", "l", "o", ",", " ", "H", "i"]
    ```
    
    *Array.prototype`.reverse`, `join`으로 문자열 뒤집을 수 있다
