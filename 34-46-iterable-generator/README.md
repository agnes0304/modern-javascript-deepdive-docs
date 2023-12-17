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
