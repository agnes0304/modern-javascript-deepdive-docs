# iteration protocol

- 순회가능한 데이터 컬렉션을 만들기 위해 미리 정의한 규칙
- 규약 이전
    - 순회 가능한 데이터 컬렉션(배열, 문자열, 유사배열 객체, DOM컬렉션 등) 나름의 구조로 for문, forEach메서드 등의 다양한 방법으로 순회 가능했음.
    - “순회 가능한 애들을 위한 규칙 = 통일된 프로토콜”을 만들어서 준수하게 하자 for문, 스프레드, 구조분해할당을 하게끔 한 것

<table>
  <tr>
    <th width='150'> . </th>
    <th width='400'>Iterable Protocol</th>
    <th width='400'>Iteration Protocol</th>
  </tr>
  <tr>
    <td>프로토콜 정의</td>
    <td>Well-known Symbol인 Symbol.iterator를 프로퍼티 키로 사용한 메서드를 직접 구현하거나 프로토타입 체인 상속을 통해 상속받은 Symbol.iterator 메서드를 호출하면 이터레이터 리턴</td>
    <td>이터러블의 Symbol.iterator 메서드를 호출하면 이터레이터 프로토콜을 준수한 이터레이터 리턴하고 얘는 next 메서드 소유하는데 next 메서드 호출 시 이터러블을 순회하면서 value, done 프로퍼티를 갖는 이터레이터 리절트(iterator result)객체를 리턴</td>
  </tr>
  <tr>
    <td>프로토콜 준수 객체</td>
    <td>이터러블(iterable) = 자료구조</td>
    <td>이터레이터(iterator)</td>
  </tr>
  <tr>
    <td>특징</td>
    <td>• for-of 문 순회 가능</br>• 스프레드 문법, 구조분해할당 대상으로 사용 가능</td>
    <td>• 이터러블 요소를 탐색하기 위한 포인터 역할</td>
  </tr>
</table>

</br></br>

# iterable(이터러블)

- 이터러블 프로토콜을 준수한 객체(일반 객체 X)
- 순회가능한 **자료구조**
    - `for - of`문, 스프레드, 구조분해할당 가능
    - 2021년부터 일반 객체에 대한 스프레드는 허용
- 이터러블 확인하는 함수
    
    ```jsx
    const isIterable = v => v!==null && typeof v[Symbol.iterator] === 'function';
    
    isIterable([]); // true
    isIterable(''); // true
    isIterable(new Map()); // true
    isIterable(new Set()); // true
    isIterable({}); // false
    ```
</br>

### 빌트인 이터러블

- Array, String, Map, Set, arguments, DOM 컬렉션, TypedArray

</br>

### 이터러블과 유사배열객체

- 유사배열 객체
    - `length`프로퍼티 가짐
    - 인덱스 접근 가능
    - `for`문 순회 가능
    - Symbol.iterator 없음(이터러블 아님)
    - 예외: arguments, NodeList, HTMLCollection은 유사배열객체이자 이터러블

### 사용자 정의 이터러블

- 일반 객체도 이터러블로 만들어보자
    - Symbol.iterator 메서드 구현
        - next메서드를 갖는 이터레이터를 리턴
            - 이터레이터 리절트 객체를 리턴
                - value와 done의 프로퍼티를 가짐

>→ 코드 작성해보면서 좀더 공부해보기(lazy evaluation에 대해서)

</br></br>

# iterator(이터레이터)

- 이터러블 Symbol.iterator 메서드 호출하면 리턴되는 것
- `next` 메서드 가짐
    - `value`: 순회중인 객체, `done`: 순회 완료 여부
    - 이터러블 리절트 객체를 리턴
    - `iterable result object`: 이터러블을 순회한 결과

    
    ```jsx
    const arr = [1,2,3]
    
    const it = arr[Symbol.iterator]();
    
    console.log(it.next()); // { value: 1, done: false }
    console.log(it.next()); // { value: 2, done: false }
    console.log(it.next()); // { value: 3, done: false }
    console.log(it.next()); // { value: undefined, done: true }
    ```
</br>

### for … of문

- 이터레이터의 next를 호출하면서 iterator result object의 value를 for … of 문의 변수에 할당해줌
- done이 false이면 순회를 계속하고 true면 for문을 빠져나옴

</br></br></br>

---

# Generator

>코드블록 실행을 일시 중지 했다가 필요한 시점에 재개

- 제너레이터 함수는 함수 콜러에게 함수 실행의 제어권을 양도할 수 있다.
    - 함수의 제어권을 함수가 독점하는게 아니라 콜러에게 양도(yield)할 수 있다
- 제너레이터 함수는 함수 콜러와 함수 상태를 주고 받을 수 있다.
    - 함수 콜러와 양방향으로 함수의 상태를 주고받을 수 있다
- 제너레이터 함수를 호출하면 제너레이터 객체를 리턴한다.
    - 이터러블이자 이터레이터인 제너레이터 객체

</br>

### 제너레이터 함수 정의

- `function*`로 정의
- 하나 이상의 `yield` 표현식
- 화살표 함수로는 정의할 수 없음
- `new` 연산자를 통해 생성자 함수로 호출 불가

```jsx
function* genDecFunc(){
	yield 1;
}
```

</br>

### 제너레이터 객체

- `Symbol.iterator`를 상속받는 이터러블(자료구조)이면서 `next`메서드를 소유하는 이터레이터(포인터)
    - 즉, `Symbol.iterator` 메서드호출해서 이터레이터 생성할 이유 없음
- return, throw 메서드를 가진다.
    - `next`를 호출하면 `yield` 표현식까지 코드블록 실행하고 `yield`된 값을 `value` 프로퍼티값으로, `done`을 `false`로 하는 이터레이터 리절트 객체를 리턴
    - `return` 호출하면 인수를 `value`로, `done`을 `true`로 하는 이터레이터 리절트 객체 리턴
    - `throw` 호출하면 인수로받은 에러를 발생시키고 `undefined`를 `value`로 `done`을 `true`로 하는 이터레이터 리절트 객체 리턴
    
    ```jsx
    function* genFunc() {
    	try {
    		yield 1;
    		yield 2;
    		yield 3;
    	} catch(e){
    		console.log(e)
    	}
    }
    
    const gen = genFunc();
    console.log(gen.next()); // { value:1, done:false}
    console.log(gen.return('End')); // { value: 'End', done:true} -> return을 호출하면 done이 true로 변경된다
    console.log(gen.throw('Err')); // { value: undefined, done:true}
    ```
    
</br>

### 일시중지와 재개

>위의 코드를 예시로 함

- 호출자는 제너레이터 함수를 호출한 `gen`
- 처음 next를 호출하면 첫번째 yield까지 실행되고 일시 중지, `gen`에게 제어권이 양도
    - next는 { value: 1, done:false } 리턴
- 다시 next를 호출하면 두번째 yield까지 실행되고 일시 중시, `gen`에게 제어권이 양도
    - next는 { value: 2, done:false }
- 네번째 호출에서 { value: undefined, done:true }
- 제너레이터의 next에는 인수가 할당될 수 있음
    - 제너레이터 함수 yield 표현식을 할당받는 변수에 할당


</br>

### 사용 

>🫠 비동기 부분은 다시 코드 작성해봐야 함

- 이터러블 구현
    
    ```jsx
    const infiniteFib = (function*(){
    	let [prev, curr] = [0,1];
    
    	while(true){
    		[prev, curr] = [curr, prev+curr];
    		yield curr
    	}
    
    }());
    
    // infiniteFib는 무한 이터러블
    for(const num of infiniteFib){
    	if(num > 10000) break;
    	console.log(num);
    }
    ```
    
- 비동기 처리
    - then, catch, finally 없이 비동기 처리를 구현할 수 있다
    
    ```jsx
    const fetch = require('node-fetch');
    
    const async = generatorFunc => { 
    	const gen = generatorFunc(); // 2) 제너레이터 객체를 생성하고 
    
    	const onResolved = arg => {
    		const result = generator.next(arg); // 5) 2에서 생성한 gen을 처음 호출한다
    
    		return result.done ? result.value : result.value.then(res => onResolved(res)); // 7) done이 아니니 재귀호출하겠지
    	};
    return onResolved; // 3) onResolved 함수를 리턴(상위 스코프의 generator 변수를 기억하는 클로저)
    }
    
    (async(function* fetchTodo() { // 1) 이 함수가 호출되면 제너레이터 함수 fetchTodo를 호출해서 
    	const url = 'http';
    
    	const res = yield fetch(url); // 6) 여기까지 실행되겠지 
    	const todo = yield res.json();
    	console.log(todo);
    })()); // 4) onResolved를 즉시 호출해서 
    
    ```

</br></br>
