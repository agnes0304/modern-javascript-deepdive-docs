# Spread(전개 문법)

>여러 값들의 집합을 전개하여 개별적인 값들의 목록으로 만든다

- for … of로 순회할 수 있는 이터러블에 한정

- `...`은 연산자가 아님 → 즉 스프레드 문법의 결과를 변수에 할당할 수 없음

- `쉼표`로 구분한 값의 목록을 사용하는 문맥에서 사용 가능

- rest 파라미터와 혼동 주의
    - 인수들의 목록을 배열로 전달받기 위해 파라미터 이름 앞에 `...`을 붙임
    - spread와 반대 개념

</br>

### 배열에서의 사용

- 배열을 펼쳐서 개별 값의 목록으로 전달해야 하는 경우

- 배열 리터럴 내부에서 사용하는 경우
    - 배열끼리의 결합
    - splice 세번째 인수로 배열 요소 개별값 전달

- 배열 복사 = 얕은 복사

- 이터러블을 배열로 변환
    - 이터러블이 아닌 유사배열 객체의 경우, 스프레드 사용 못함 주의

```jsx
const arr = [1,2,4,6];
const max = Math.max(...arr);

const arr1 = [1,4];
const arr2 = [2,3];

arr1.splice(1,0, ...arr2);

const copyArr = [...arr];

```

</br>

### 객체에서의 사용

- 일반 객체를 대상으로 스프레드 문법을 허용(TC39 process stage4)

- 객체 병합
    - 키 중복의 경우 뒤의 프로퍼티 값이 우선권을 가짐

- 특정 프로퍼티 변경

- 프로퍼티 추가

```jsx
const merged = { ...{x:1, y:2}, ...{y:100,z:0}}; // {x:1, y:100, z:0}
const changed = {...{x:1, y:5}, ...{y:10}}; // {x:1, y:10}
const added = {...{x:1,y:2}, ...{z:3}}; // {x:1, y:2, z:3}
```

</br></br>

# Destructuring assignment(구조분해할당)

>구조화된 배열같은 이터러블, 객체의 구조를 분해해서 1개 이상의 변수에 개별적으로 할당

- 필요한 값만 추출하여 할당할 때 유용

</br>

### 배열 구조분해할당

- 구조분해할당의 대상(할당문 우변)은 이터러블이어야 하고 할당 기준은 인덱스
- 변수는 배열 리터럴로 선언
- 이터러블 미할당 시 에러 발생함. 이터러블 요소의 개수가 일치하진 않아도 됨.
- 변수에 Rest element사용 가능(가장 마지막에)
    
    ```jsx
    const arr = [1,2,3]
    const [one, two, three] = arr; // one, two, three에 각각 1 2 3 
    const [four] = arr; // four -> 1 할당
    
    // 기본값 설정 가능
    const [a,b,c,d = 4] = arr; // 1 2 3 4
    
    const [x, ...y] = arr; // 1 [2,3]
    ```
    
</br>

### 객체 구조분해할당

- 구조분해할당의 대상(할당문 우변)은 이터러블이어야 하고 할당 기준은 프로퍼티 키!
- 변수는 객체 리터럴로 선언
- 순서 의미 없음(변수 이름과 키가 일치하면 할당)
    - 프로퍼티 키와 다른 변수 이름으로 값을 할당받기 위해서는 001번 코드를 따른다
    
    ```jsx
    const user = { fisrtName: 'jiwoo', lastName:'choi'}
    const { lastName, fisrtName } = user;
    console.log(firstName, lastName); // jiwoo choi
    
    // 001
    const { lastName: lN, firstName: fN } = user;
    console.log(lN, fN); // choi jiwoo
    
    // 기본값 설정
    const { nickName ='bbae', firstName:fN} = user; 
    
    ```
    
- 객체를 파라미터로 사용하는 경우에 구조분해할당을 사용할 수 있음
- 배열의 요소가 객체인 경우 혼용할 수 있음
    
    ```jsx
    const todos = [
    	{id:0, content:'JS', completed: true}
    	{id:1, content:'CSS', completed: true}
    ]
    
    const [,{id}] = todos; // 배열 두번째 요소의 id 프로퍼티
    ```
    
- 변수에 Rest element사용 가능(가장 마지막에)
