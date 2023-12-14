# Ajax

- Asynchronous Javascript and XML
- 자바스크립트를 사용하여 브라우저가 서버에 비동기 방식으로 데이터를 요청하고 리스폰스 수신하여 웹 페이지를 동적으로 갱신하는 프로그래밍 방식
- Web api인 `XMLHttpRequest`를 기반으로 동작

### 왜 획기적인가?

깜빡임을 줄일 수 있게 되었다!

>이전 웹페이지 동작 방식은 html을 처음부터 끝까지 갈아끼우는 방식이어서 필요가 없는 부분까지 전체 리렌더링이 발생해야 했다. 
></br>ajax 등장으로 변경할 데이터만 비동기 방식으로 전송받아 웹페이지 변경할 부분만 변경.

</br>

# JSON

- javascript object notation
- 클라이언트와 서버 간 http 통신에 사용되는 텍스트 데이터 포맷
- JS에 종속되지 않는 언어 독립형 데이터 포맷. 대부분의 언어에서 사용
- 표기방식: 키는 “큰따옴표”, 값은 객체리터럴과 같은 표기법 그대로. 

</br>

## `JSON.stringify(obj, replacer func., space)`

- 객체를 JSON 포맷 문자열로 변환
- `serializing`: 클라이언트가 서버로 객체 전송 시에 문자열화 할 때 사용
- `replacer func`?
    - JSON으로 인코딩 하길 원하는 프로퍼티가 담긴 배열 혹은 매핑 함수 `function (key, value)`
    - obj에서 특정 프로퍼티만을 JSON 문자열화 하고 싶을때 사용할 수 있다(필터 역할)
- `space`: 서식 변경 용 공백 문자

```jsx
const user = {
	name: 'jiwoo',
	hobby: [ traveling, swimming, scubadiving ]
}

const jsonData = JSON.stringify(user) // {"name":"jiwoo","hobby":["traveling","swimming","scubadiving:"]}
const prettierJsonData = JSON.stringify(user, null, 2) 
// 들여쓰기 함.
/* 
{
	"name": "jiwoo",
	"hobby": [
		"traveling",
		"swimming",
		"scubadiving"
	]
}
*/
```

## `JSON.parse( jsonData )`

- 서버로부터 전달받은 JSON을 클라이언트에서 객체로 사용하기 위해 사용.
- deserializing

</br>

# XMLHttpRequest

- js를 통해서 http 요청을 전달하기 위해 사용
- web api 일종
- `XMLHttpRequest()` 생성자 함수로 객체를 생성해서 사용

## XMLHttpRequest 객체

*교재에서 볼드체만 별도로 정리함

- 프로토타입 프로퍼티

|이름| 설명|
|:---:|:---:|
|readyState|http 요청의 현재 상태를 나태나는 정수 </br>-unsent: 0 opened:1, headers_received:2, loading:3, done:4|
|status|http status code|
|statusText|response message 문자열|
|responseType|document, json, blob 등의 응답 타입|
|response|response body|

</br>

- 이벤트 핸들러 프로퍼티

|이름|설명|
|:---:|:---:|
|onreadystatechange|readyState 값이 변경된 경우|
|onerror|요청에 에러가 발생한 경우|
|onload|요청이 성공적으로 완료한 경우|

</br>

- 메서드

|이름| 설명| 예시
|:---:|:---:|:---:|
|open|http 요청 초기화|`xhr.open(method, url, async*)`|
|send|http 요청 전송|`xhr.send( JSON.stringify({ … })` |
|abort| 이미 전송된 거 중단||
|serRequestHeader|특정 http 요청 헤더 값을 설정| `xhr.setRequestHeader(’content-type’,’application/json’)`|

- `open`에서의 `async`는 기본값 `true`
- `send`에서 payload는 JSON 포맷 문자열로 전달해야 함. 메서드가 get인 경우 인수 전달해도 무시하고 `null`
  - http post, put, patch만 바디 설정할 수 있음

</br>

### http request 과정

1. http 요청을 초기화하고 → `open()`
2. http 요청의 헤더값을 설정하고 → `setRequestHeader()`
3. http 요청을 전송한다. → `send()`

</br>

### http request method 종류

- get : 읽어오기
- post : 생성하기
- put : 전체 수정
- patch : 일부 수정
- delete : 삭제

</br>

### http request header 종류

#### content-type

- 바디에 담아서 전달하는 데이터 MIME타입 정보

|구분|종류|
|:---:|:---:|
|text|text/plain, -/html, -/css, -/javascript|
|application| application/json, -/x-www-form-urlencode|
|multipart|multipart/formed-data|

#### accept

- 서버가 리스폰스로 보낼 데이터 타입을 지정함.

</br></br>

---

</br>

# REST

- **RE**presentational **S**tate **T**ransfer
- 2000년 http 장점을 최대활용 할 수 있는 REST 아키텍쳐가 소개
- 클라이언트가 서버의 리소스에 접근하는 방식을 규정한 아키텍처

## REST API
- REST를 기반으로 서비스 API를 구현한 것
- 구성(3요소)
  - resource = URI(엔드포인트)
  - verb = http 메서드
  - representation = 페이로드

>🚨 URI는 resource를 표현하는데 집중해야 하고 http 요청 메소드를 활용하여 그 요청 행위에 대한 정의를 한다.
- URI에 가능하면 명사 사용을 지향하라
