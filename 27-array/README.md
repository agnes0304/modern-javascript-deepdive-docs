>### 유사배열 객체와 이터러블 객체
>**유사배열 객체**
>- 배열처럼 `인덱스`로 프로퍼티 값에 접근할 수 있고
>- `length` 프로퍼티를 갖는 객체
>- `for`문 순회도 가능
>
></br>**이터러블 객체**
>- Symbol.iterator를 구현하여 `for-of`로 순회할 수 있고
>- `스프레드`와 `구조분해할당`이 가능
>- 빌트인 이터러블은 Array, String, Map, Set, DOM 컬렉션, arguments가 있다

</br>

# 배열

>여러 개의 값을 순차적으로 나열한 자료구조

### 특징

- 값은 요소(element)
    → 모든 JS의 값은 요소가 될 수 있다.   
- ⭐0부터 시작하는 인덱스와 length 프로퍼티를 가짐(객체와의 차이)
    → for문으로 순차적으로 요소에 접근 가능
- Array타입은 존재하지 않음.(Object이다)

</br></br>

>### 사실 배열은 배열이 아니다?
>자료구조에서 배열은 동일한 크기의 메모리 공간이 연속적으로 나열된 자료구조를 의미(dense array)
>- 인덱스를 통해 단 한번의 연산으로 임의의 요소에 접근(`O(1)`)
>- 정렬되지 않은 경우 탐색연산(`O(n)`)
>
></br>**자바스크립트의 배열은 sparse array(희소 배열)**
>- 배열의 메모리 공간은 동일하지 않아도 됨
>- 연속적이지 않을 수 있음
>- 즉, **배열을 흉내낸 특수한 객체**
```jsx
console.log(Object.getOwnPropertyDescriptors([1,2,3]));
/* 
{
  '0': {value: 1, writable: true, enumerable: true, configurable: true}
  '1': {value: 2, writable: true, enumerable: true, configurable: true}
  '2': {value: 3, writable: true, enumerable: true, configurable: true}
}
*/
```

>- 인덱스를 프로퍼티 키로 가지고 요소를 프로퍼티 값으로 가짐.
>
></br>**일반배열 VS 자바스크립트 배열**
>- 일반 배열은 인덱스로 요소에 빠르게 접근 가능하나, 요소의 삽입, 삭제는 비효율적이다.
>- 자바스크립트의 배열은 해시 테이블로 구현된 객체로 인덱스 접근은 느릴 수 있으나 삽입, 삭제에서 유리하다

</br></br>

### 배열 생성

- 리터럴과 생성자 함수
    
    ```jsx
    const test = [1,2] // [1,2]
    const sample = new Array(5); // length 프로퍼티 값이 5인 배열 생성(인수 < 4,294,967,295). 음수면 에러
    const empty = new Array(); // []
    const arr = new Array(1,2,3) // [1,2,3]
    const notNewArr = Array(1,2,3,4); // [1,2,3,4]
    ```
    
- Array.of, Array.from 메서드
    
    ```jsx
    Array.of(1); // [1]
    Array.of(1,2); // [1,2]
    Array.of('hi'); // ['hi']
    
    // Array.from은 iterable, 유사배열 객체를 인수로 전달한다
    Array.from({length:3}0 // [undefined,undefined,undefined]
    Array.from({ length:2, 0:'a', 1:'b'}); // ['a','b']
    Array.from('hello'); // ['h','e','l','l','o']
    // 두번째 인수로 콜백 함수 전달 시, 첫번째 인수에 의해 생성된 배열의 요소와 인덱스를 순차적으로 전달하면서 호출하고 콜백함수 리턴값으로 배열을 리턴
    Array.from({length:3}, (_, i)=>i ) // [0,1,2]
    ```
</br>

### length 프로퍼티

- 배열의 값을 갱신하면 자동 갱신
- 명시적으로 할당하여 배열의 길이를 조정할 수 있음
- 실제 배열보다 큰 값을 할당한다고 배열의 길이가 늘어나진 않음
    - 메모리 공간 확보하지도 않고
    - 빈 요소를 생성하지도 않음
- 희소배열의 length는 실제 배열의 요소 개수보다 언제나 크다
    
    ```jsx
    const sparseArr = [, 2,,4];
    console.log(Object.getOwnPropertyDescriptors(sparseArr));
    /*
    {
    	'1':{value:2, wrtiable: true ~}
    	'3':{value:4, wrtiable: true ~}
    	length:{value:4, wrtiable: true, enumerable:f alse, configurable: false }
    }
    */
    ```
    
    → 가능한 사용하지 말자

</br>

### 배열 요소의 참조, 추가, 갱신, 삭제

- `arr[i]`
    - 대괄호를 사용, i는 인덱스
    - JS 배열은 인덱스를 문자열로 나타낸 것을 프로퍼티 키로 가짐
        - 존재하지 않는 요소 참조 시 `undefined`
- 존재하지 않는 인덱스로 값 할당 가능
- 존재하는 인덱스에 값 할당 시 값 업데이트 → length 영향 없음
- `delete arr[i]`
    - 객체이기 때문에 `delete`로 삭제 가능 → ⭐length 영향 없음(희소배열 됨) / 사용 지양
- `arr.splice(a,b)`
    - 배열의 특정 요소 삭제
    - a인덱스부터 b개 삭제
    - length 영향 받음(희소배열 X)

</br>

### 배열 메서드

- Array 생성자 함수는 정적 메서드, Array.prototype은 프로토타입 메서드 제공
- 리턴 패턴 2가지⭐
    - 원본 배열(메서드 호출한 배열, this 객체)을 직접 변경하는 메서드(mutator method)
        - 주로 ES5이전 초창기 메서드
    - 새로운 배열을 생성하여 리턴하는 메서드(accessor method) → ✂️ 있는 메서드

</br>

#### 정적 메서드

- `.isArray()`
    - 인수의 배열 여부 boolean 리턴

</br>

#### Array.prototype 메서드

- `.indexOf(a,b*)`
    - 원본 배열에서 인수로 전달된 요소`a` 검색, 인덱스 리턴
    - `b`는 선택, 검색을 시작할 인덱스
    - 특정 요소 존재 확인시 유용
    - `.includes()` 사용이 유용(ES7도입)
- `.push(a)`✂️
    - 인수로 전달받은 모든 값 마지막 요소로 추가 후 length 리턴
    - spread사용 권장
        
        ```jsx
        const arr = [1,2]
        
        arr.push(3);
        arr[arr.length] = 3; 
        // 위의 두 방법은 동일한 결과를 초래하지만 아래 직접 마지막 요소에 추가하는 것이 push()보다 빠름
        
        const newArr = [ ...arr, 3];
        ```
        
- `.pop()`✂️
    - 마지막 요소 제거, 제거된 요소 리턴
    - 원본이 빈 배열인 경우 `undefined`리턴
    - spread사용 권장
- `.unshift(a)`✂️
    - 전달받은 모든 값을 원본의 선두에 추가, 변경된 length 리턴
    - spread사용 권장
- `.shift()`✂️ ↔ pop
    - 첫번째 요소 제거 후 제거한 요소 리턴
    - 빈 배열인 경우 undefined
- `.concat(a)`
    - 인수로 전달된 값을 마지막 요소로 추가한 새로운 배열 리턴
    - 인수가 배열인 경우 알아서 해체해서 추가
- `.splice(a, b, c*)` ✂️
    - a: 원본 배열에서 제거하기 시작할 인덱스, 음수인 경우 배열의 끝에서부터 인덱스
    - b: 제거할 개수
    - c: 제거한 위치에 삽입할 요소 목록(생략)
    - 특정 요소 제거 위해 `indexOf`로 요소의 인덱스 취득 후 걔부터 1개 삭제하면 제거할 수 있다.
- `slice(a,b)`
    - a: 복사를 시작할 인덱스, 음수의 경우 배열 끝에서부터 인덱스
    - b: 복사 종료할 인덱스(복사에 포함되지 않음)
    - 인수 전부 생략할 시 복사본 생성 → 얕은 복사
- `.join(s)`
    - 원본 배열의 모든 요소를 문자열로 변환 후 인수로 전달받은 문자열s로 연결한 문자열 리턴
        
        ```jsx
        const arr = [1,2];
        arr.join();     // '1,2'
        arr.join("");   // '12'
        arr.join(":");  // '1:2'
        ```
        
- `.reverse()` ✂️
    - 원본 배열 순서 뒤집기
- `.fill( a, b*, c*)` ✂️
    - a로 배열을 채운다
    - b에 채우기 시작할 인덱스 전달가능
    - c에 채우기 멈출 인덱스 전달가능(직전까지 채움)
- `.includes(a, b)` → ES7부터 도입
    - `a` 포함 여부 boolean 리턴
    - `b`: 검색을 시작할 인덱스. 음수 전달 시 length 프로퍼티 값과 음수 인덱스를 합하여 검색 시작 인덱스를 결정
    - `NaN`포함 여부 확인 가능(`indexOf`는 불가)
- `.flat(d)` → ES10(2019)도입
    - 인수로 전달한 깊이 `d`만큼 재귀적으로 배열을 평탄화
        
        ```jsx
        [1,[2,3]].flat(); // [1,2,3] -> 기본값 1
        [1,[2,3,[4,5,[6]]].flat(1); // [1,2,3,[4,5,[6]]]
        [1,[2,3,[4,5,[6]]].flat(2); // [1,2,3,4,5,[6]]
        [1,[2,3,[4,5,[6]]].flat().flat(); // [1,2,3,4,5,[6]]
        [1,[2,3,[4,5,[6]]].flat(Infinity); // [1,2,3,4,5,6]
        ```
        

### 원본 배열 변경 여부 정리

| ✂️원본 배열 변경 | ✂️원본 배열 변경 고차함수 | 원본 배열 변경 없음 | 원본 배열 변경 없는 고차함수 |
| --- | --- | --- | --- |
| .push() | .sort() | .concat() | .filter() | 
| .pop() | | .slice() | .reduce() |
| .shift() || .includes() | .map() |
| .unshift() || .join() | .forEach() |
| .splice() | |.indexOf() | .every() |
| .reverse() || .flat() | .some() |
| .fill() || .lastIndexOf() | .find() |
| .copyWithin() ||  | .findIndex() |


</br></br>

# Higher-Order function(고차함수)

>함수를 인수로 전달받거나 함수를 리턴하는 함수

</br>

### 특징

- 불변성 지향하는 함수형 프로그래밍 기반

>**함수형 프로그래밍?**
>순수함수와 보조함수와 조합을 통해 
>로직 내에 존재하는 조건문과 반복문을 제거하여 복잡성 해결하고 
>변수 사용을 억제하여 상태변경을 피하려는 프로그래밍 기법

## 종류

- `.sort(callBackFn)` ✂️
    - 배열 요소 정렬(기본 오름차순; asc)
    - 내림차순 하려면 `sort` → `reverse`
    - 퀵소트 알고리즘을 사용했었음 → 이후 ES10(2019)에서는 timsort 알고리즘 사용하게 바뀜
    - 숫자 정렬은 특이하게 동작
        - 유니코드 코드 포인트 순서를 따름
        - 일시적으로 문자열 변경 후 유니코드 코드 포인트 순서로 정렬
        
        → 정렬 순서 정의 비교 함수를 인수로 전달해야 함
        
        ```jsx
        const score = [40,100,1,5,2]
        
        score.sort((a,b)=> a-b); // 숫자 오름차순: 비교함수 리턴값이 0보다 작으면 a우선 정렬
        score.sort((a,b)=> b-a); // 숫자 내림차순: 비교함수 리턴값이 0보다 작으면 b우선 정렬
        
        const todos = [
        	{ id: 4, content:'JS'}
        	{ id: 2, content:'TS'}
        	{ id: 1, content:'Project'}
        ]
        
        function compare(key){
        	return (a,b)=>(a[key] > b[key] ? 1 : (a[key]<b[key]? -1: 0));
        }
        
        todos.sort(compare('id'));// id를 기준으로 오름 차순 정렬
        ```

</br>

### “배열 모든 요소 순회하면서 콜백함수 반복 호출하면서 … ”

- `.forEach(callBackFn(val, index, arr), this)`
    - for 문을 대체할 수 있는 고차함수. 리턴값은 늘 `undefined`
    - `val`: 배열의 요소 값
    - `index`: 인덱스
    - `arr`: 배열 자체(this)
    - `forEach`메서드 콜백함수 내부의 `this`는 `undefined`임. 일반 함수로 호출되니까. 근데 메서드 정의 시, `forEach`를 사용하는 상황에서 상위 스코프(메서드 내부)의 this와 일치시키기 위해서는 `forEach`의 두번째 인수로 `this`를 넘겨줘야 `forEach` 내부의 `this`와 바인딩이 된다.
        
        → 화살표 함수 사용하자(화살표 함수 내부에서 this 참조하면 그대로 참조가능)
        
    
    ```jsx
    const num = [1,2,3]
    const pows = [];
    
    num.forEach(item => pows.push(item**2));
    ```
    
- `.map(callBackFn(val, index, arr), this)`
    - ⭐콜백함수 리턴값으로 새 배열 리턴(forEach와 차이)
    - map 두번째 인수로 this 넘길 수 있음 → 화살표 함수 쓰자…
- `.filter(callBackFn(val, index, arr), this)`
    - 리턴값이 `true`인 애들로만 구성된 새 배열 리턴
- `.reduce(callBackFn(initVal, val, index, arr), initVal)`
    - 콜백함수 리턴값을 다음 순회 시에 콜백함수 첫번째 인수로 전달하면서 호출 하나의 결과값을 만들어 반환
    - initVal은 선택사항이지만 전달하는 편이 안전하다
        - 누적한다
        
        ```jsx
        const arr = [1,2,3,4]
        
        const sum = arr.reduce((acc, val, i, arr) => acc + val, 0); // 10
        ```
        
    - 평균구하기, 최대값구하기(`Math.max`쓰자), 중복값 구하기
- `.some(callBackFn(val, index, arr), this)`
    - 콜백함수의 리턴값이 단 한번이라도 참이면 true, 모두 거짓이면 false를 리턴
    - 호출한 배열이 빈 배열이라면 false
- `.every(callBackFn(val, index, arr), this)`
    - 콜백함수의 리턴값이 모두 참이면 true, 하나라도 거짓이면 false
    - 호출한 배열이 빈 배열이라면 true
- `.find(callBackFn(val, index, arr), this)`
    - 콜백함수의 리턴값이 true인 첫번째 **요소**(처음 만나는 true)
    - true없으면 `undefined`리턴
    - 배열을 리턴하는 filter와 다르게 요소값 하나를 리턴
- `.findIndex(callBackFn(val, index, arr), this)`
    - 콜백함수의 리턴값이 true인 첫번째 요소의 **인덱스 값**
    - true없으면 `-1` 리턴
- `.flatMap()`
    - `map`과 `flat`을 순차적으로 실행하는 효과
    - depth 1만 flat한다
