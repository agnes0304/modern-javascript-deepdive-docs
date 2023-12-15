# Number

### Number 생성자함수

- default: 0
- 숫자 아닌 값 전달 시 숫자로 강제변환 / 변환 불가 시 `NaN`
- `new` 없이 호출하여 명시적 타입변환 가능

```jsx
let num = new Number(); // 내부 슬롯 NumberData에 0
let num = new Number('10'); // 내부 슬롯 NumberData에 10
Number('0'); // 0
```

</br>

### Number 프로퍼티

- `Number.EPSILON`
    - 1과 1보다 큰 수 중에서 가장 작은 숫자와의 차이
    - 부동소수점으로 인해 발생하는 오차를 해결하고자 사용
        
        ```jsx
        	function isEqual(a,b){
        	return Math.abs(a-b) < Number.EPSILON; // 얘보다 작으면 같은 값으로 치자
        }
        ```
        
- `Number.MAX_VALUE` / `MIN_VALUE`
    - JS에서 표현할 수 있는 가장 큰/작은 양수 값
    - `MAX_VALUE`보다 큰 값은 `Infinity`/ `MIN_VALUE`보다 작은 값은 0

- `Number.MAX_SAFE_INTEGER` / `MIN_SAFE_INTEGER`
    - 안전하게 표현할 수 있는 가장 큰/작은 정수값(9007199254740991)

- `Number.POSITIVE_INFINITY` = `Infinity`

- `Number.NEGATIVE_INFINITY` = `-Infinity`

- `Number.NaN`: 숫자 아님

</br>

### Number 메서드

>검사 전 암묵적 타입변환 없음

- `Number.isFinite`
    - ES6에서 도입
    - 유한수 여부 검사 후 `boolean` 리턴 `Number.isFinite(null); // false`
        
- `Number.isInteger`
    - 정수 여부 검사 후 `boolean`

- `Number.isNaN`
    - 숫자아니지? 응(숫자 아님) → `true`

- `Number.isSafeInteger`
    - 안전한 정수 값 범위 내에 있는지 여부

</br>

### Number.prototype 메서드

- `toExponential(n)`
    - 숫자를 지수표기법으로 변환 후 문자열로 리턴
    - 인수로 소수점 이하로 표현할 자릿수 전달  
        ```jsx
        (77.1234).toExponential(); // "7.71234e+1"
        77.1234.toExponential(); // "7.71234e+1" -> 77이후 .뒤에 숫자1234가 오기때문에 부동소수점으로 인지
        77.toExponential(); // SyntaxError
        ```
        
- `toFixed(n)`
    - 숫자를 반올림, 문자열로 리턴
    - 인수로 나타낼 소수점 이하 자릿수를 남겨둔다.

- `toPrecision(n)`
    - 인수로 전달받은 전체 자릿수까지 유효하도록 나머지 자릿수 반올림, 문자열 리턴(소수점 기준이 아님)
    ```jsx
    (12345.6789).toPrecision(); // "12345.6789"
    (12345.6789).toPrecision(2); // "1.2e+4"
    (12345.6789).toPrecision(6); // "12345.7"
    ```
    
- `toString(n)`
    - 숫자를 문자열로 변환 리턴.
    - 인수로 진법을 나타내는 2-36사이의 정수값을 전달할 수 있음

</br></br>

---

# Math

>생성자 함수가 아니며 정적 프로퍼티와 정적 메서드만 제공

</br>

### Math 프로퍼티

- `Math.PI` : 원주율 `PI`값 리턴

</br>

### Math 메서드

- `Math.abs(n)`: n의 절대값 리턴

- `Math.round(n)`: n의 소수점 이하 반올림한 정수 리턴

- `Math.ceil(n)`: n의 소수점 이하 올림한 정수 리턴

- `Math.floor(n)`: n의 소수점 이하 내림한 정수 리턴

- `Math.sqrt(n)`: n의 제곱근 리턴(루트씌운 값)

- `Math.random()`: 0~1사이 임의의 난수 리턴

- `Math.pow(n, m)`: n을 밑으로 m을 지수로 거듭 제곱한 결과 리턴(지수 연산자 사용 권장)

- `Math.max(n,m,…)`: 가장 큰 수 리턴 / 인수 없으면 `-Infinity`
    - 배열로 전달받기 위해서는 `spread` 혹은 `apply()`사용

- `Math.min(n,m,…)`: 가장 작은 수 리턴 / 인수 없으면 `Infinity`

</br></br>

---

# Date

- 표준빌트인 객체이며 생성자 함수이다.
- UTC(Coordinated universal time)은 국제 표준시를 의미
    - GMT(Greenwich Mean Time)은 그리니치 평균시로 불리기도 함
- KST(한국 표준시)는 UTC+9이다.

</br>

### Date 생성자 함수

```jsx
new Date(); // 현재 날짜와 시간을 갖는 Date 객체 리턴
new Date(now); // 현재 날짜와 시간을 갖는 Date 객체 리턴
Date(); // 현재 날짜와 시간을 나타내는 문자열 리턴
```

- Date객체는 내부적으로 날짜와 시간을 나타내는 정수값을 가짐
    - 0: 1970년 1월 1일 00:00:00(UTC) → 앞으로 ‘기준시’라고 표현
- `new Date(ms)`: 1970년 1월 1일 00:00:00에서 ms만큼 경과한 날짜와 시간을 나타내는 Date객체 리턴

- `new Date(dateString:d)`
    - 지정된 dateString을 나타내는 Date 객체 리턴
    - dateString은 `Date.parse()`에 의해 해석 가능한 형식어야

- `new Date(year, month[, day, hour, minute, second, ms])`
    - 각 인수를 의미하는 숫자를 전달하면 지정된 날짜를 나타내는 Date객체를 리턴
    - 지정하지 않으면 1 혹은 0(시간)으로 초기화
    - 🚨주의🚨월(0-11)은 0부터 시작

</br>

### Date 메서드

- `Date.now()`: 0에서부터 현재까지 경과한 밀리초를 숫자로 리턴

- `parse(d)`: `d`까지의 밀리초를 숫자로 리턴
    - `d`는 `new Date(dateString:d)`의 형식 사용

- `UTC(d)`: `d`까지의 밀리초를 숫자로 리턴
    - `d`는 `new Date(year, month[, day, hour, minute, second, ms])`의 형식 사용

</br>

### Date.prototype 메서드

#### 날짜 취득 및 설정

- `getFullYear()`: Date 객체의 연도를 나타내는 정수 리턴

- `setFullYear(y, m*, d*)`: 연도 설정 (월:`m`, 일:`d`는 옵션)

- `getMonth()`: 월을 나타내는 정수 리턴
    - 0부터 시작 (1월은 0, 12월은 11)

- `setMonth(m, d*)`: 월 설정 (일: `d`은 옵션)

- `getDate()`: 일(date)을 나타내는 정수 리턴

- `setDate(d)`: 일(date) 설정

- `getDay()`: 요일 나타내는 정수 리턴

| 일 | 월 | 화 | 수 | 목 | 금 | 토 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| 0 | 1 | 2 | 3 | 4 | 5 | 6 |

</br>

#### 시간 취득 및 설정

- `getHours()`: 시간을 나타내는 정수 리턴

- `setHours(h, m*, s*, ms*)`: 시간 설정(분, 초, 밀리초 선택)

- `getMinutes(m, s*, ms*)`: 분을 나타내는 정수 리턴

- `setMinutes(m, s*, ms*)`: 분 설정(초, 밀리초 선택)

- `getSeconds(s, ms*)`: 초 나타내는 정수 리턴

- `setSeconds(s, ms*)`: 초 설정(밀리초 선택)

- `getMilliseconds(ms)`: 밀리초 정수 리턴(0-999)

- `setMilliseconds(ms)`: 밀리초 설정(0-999)

</br>

#### 경과

- `getTime()`: 기준시 기점 Date객체까지 경과된 밀리초 리턴

- `setTime(ms)`: 기준시 기점 경과된 밀리초 설정
    - 86400000ms = 1day

- `getTimezoneOffset()`: UTC와 Date객체에 지정된 locale시간과의 차이를 분 단위로 리턴
    - KST = UTC - 9h(540m) 
        ```jsx
        const today = new Date(); // locale: KST
        today.getTimezoneOffset() / 60; // 9리턴
        ```
           
</br>

#### 문자열 표현

- `toDateString()`: 날짜를, 읽을 수 있는 문자열로 리턴

- `toTimeString()`: 시간을, 읽을 수 있는 문자열로 리턴

- `toISOString()`: ISO 8601 형식으로 Date 객체의 날짜와 시간을 표현한 문자열을 리턴

- `toLocaleString()`: 인수로 전달한 locale을 기준으로 date객체의 날짜와 시간을 표현한 문자열을 리턴

- `toLocaleTimeString()`: 인수로 전달한 Locale 기준, date객체의 시간을 표현한 문자열 리턴
    ```jsx
    const today = new Date('2023/12/15/20:30');
    
    today.toString(); // Fri Dec 15 2023 20:30:00 GMT+0900 (대한민국 표준시)
    today.toLocaleString(); // 2023. 12. 15. 오후 8:30:00
    today.toLocaleString('ko-KR'); // 2023. 12. 15. 오후 8:30:00 
    today.toLocaleString('en-US'); // 15/12/2023, 8:30:00 PM
    
    today.toLocaleTimeString('ko-KR'); // 오후 8:30:00 
    today.toLocaleTimeString('en-US'); // 8:30:00 PM
    ```
