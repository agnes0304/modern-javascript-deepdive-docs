# Set

>중복되지 않은 유일한 값들의 집합

#### 배열과 차이점

- 동일한 값 중복 포함 불가
- 요소 순서의 의미가 없음
- 인덱스로 접근 불가

</br>

### Set객체 생성자 함수

```jsx
const set = new Set(); // Set(0) {}
const setNum = new Set([1,2,3,3]); // Set(3) {1,2,3}
const setStr = new Set('hello'); // Set(4) {'h', 'e', 'l', 'o'}

const { size } = setNum;
console.log(size); // 3 
```

- iterable을 인수로 받아 Set 객체 생성 →  중복값 제거
- `for … of`로 순회가능, spread(`…`)문법, 구조분해할당 전부 가능
- `size`프로퍼티로 Set 요소 개수 확인
- getter만 존재하는 접근자 프로퍼티 → 변경 불가

</br>

### Set 메서드

- `.add(e)`
    - `e`을 추가하고 추가한 Set 객체 리턴 → 연속 호출 가능
    - 중복된 요소 추가는 무시
- `.has(e)`
    - `e` 존재 여부 확인 boolean 값 리턴
- `.delete(e)`
    - 삭제하려는 값 자체 전달, boolean 값 리턴
    - e가 Set에 없는 경우 무시
    - 연속 호출 불가
- `.clear()`
    - 일괄 삭제, undefined 리턴
- `.forEach(func(a,b,c))`
    - Array.prototype`.forEach`와 유사하게 콜백함수와 this로 사용될 객체를 인수 3개 전달
    - `a`, `b`는 값은 값: 현재 순회 중인 요소 값(Array의 forEach와 인터페이스 통일 위함)
    - `c`: 현재 순회중인 Set객체 자체
    
    ```jsx
    const set = new Set([1,2,3])
    
    set.forEach((a,a2,set)=> console.log(a,a2,set));
    /*
    1 1 Set(3) {1,2,3}
    2 2 Set(3) {1,2,3}
    3 3 Set(3) {1,2,3}
    */
    ```
    
</br>

## Set의 집합 연산

>수학적 집합을 구현하기 위한 자료구조 → 교, 합, 차집합 등을 구현할 수 있음

- 교집합
    
    ```jsx
    Set.prototype.intersection = function (set) {
    	const result = new Set(); // 교집합 결과 담을 세트 객체
    	for (const val of set) {
    		if(this.has(val)) result.add(val);
    	}
    	return result;
    }
    
    const setA = new Set([1,2,3]);
    const setB = new Set([1]);
    
    setA.intersection(setB); // Set(1) {1}
    ```
    
    - set1과 set2의 교집합의 세트 객체 리턴

- 합집합
    
    ```jsx
    Set.prototype.union = function (set) {
    	const result = new Set();
    	fot (const val if set){
    	result.add(val);
    	}
    	return resule
    }
    ```
    
- 차집합
    
    ```jsx
    Set.prototype.diff = function (set) {
    	const result = new Set(this); // 없는 거 리턴해야하니 일단 복사
    	for (const val of set){
    		result.delete(val);
    	}
    	return result;
    }
    ```
    
- 부분집합, 상위집합
    - boolean을 리턴하는 방식
    ```jsx
    Set.prototype.isSuperSet = function (set) {
    	for (const val of set) {
    		if (!this.has(val)) return false;
    	}
    	return true;
    }
    ```
    
</br></br>

# Map
>키와 값의 쌍으로 이루어진 컬렉션

#### 객체와의 차이점

- 키로 객체를 포함한 모든 값을 사용⭐
- iterable이다
- map.size로 확인한다(.length아님)


</br>


### Map 객체 생성자 함수

```jsx
const map = new Map(); // Map(0) {}
const map2 = new Map(['key', 'val'], ['key2', 'val2']); // Map(2) {"key1" => "val1", "key2"=>"val2"}
const map2 = new Map(['key', 'val'], ['key1', 'val2']); // Map(1) {"key1" => "val2"}

```

- iterable을 전달받아 Map객체 생성
    - 이때 전달되는 iterable은 키와 값의 쌍으로 이뤄진 요소여야 함.
    - 중복된 키가 들어오면 덮어쓰기
    - `for…of`문, spread, 구조분해할당 전부 사용가능
- `size`로 요소 개수 확인 가능(변경은 불가)

</br>

### Map 메서드

- `.set(k, v)`
    - `k`를 key, `v`를 value로 한 새로 추가된 Map 객체 리턴 → Set의 `add`과 같이 연속 호출 가능
    - 중복된 키 일 경우 덮어쓰기, 에러 없음

- `.get(k)`
    - `k`를 key로 갖는 값 리턴
    - 없으면 `undefined`

- `.has(k)`
    - 요소 존재 `boolean`값 리턴

- `.delete(k)`
    - 삭제 여부 `boolean` 리턴 → 연속 호출 불가
    - 존재하지 않는 key로 삭제 시도시 에러 없이 무시

- `.clear()`
    - 일괄 삭제 후 `undefined`리턴

- `.forEach(func(v,k,m))`
    - 요소 순회
    - 인수 `v`: 현재 순회 중인 요소 값
    - 인수 `k`: 현재 순회 중인 요소 키
    - 인수 `m`: 현재 순회중인 Map 객체 자체


</br>

### iterable이면서 iterator인 객체 리턴 메서드

- `.keys()` : 호출한 Map객체의 키를 값으로 갖는 객체 리턴

- `.values()`: 호출한 Map객체의 값를 값으로 갖는 객체 리턴

- `.entries()`:호출한 Map객체의 키와 값을 값으로 갖는 객체 리턴

</br>
