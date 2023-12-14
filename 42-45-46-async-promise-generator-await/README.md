>프로미스의 fetch 부분은 아래의 ajax로 이동함

# 타이머

---

# 비동기 프로그래밍

---

</br>

기존의 비동기 처리 방식은 콜백 패턴이었다. 
</br>콜백 헬과 에러 핸들링의 어려움이 있었다.

### 콜백 패턴

비동기 함수는 비동기 처리 결과를 외부에 반환할 수 없고 상위 스코프 변수에 할당할 수도 없음.
</br>즉, 비동기 함수의 후속처리는 비동기 함수 내부에서 수행해야 한다. → 이유는 바로 아래에
</br>따라서 처리 결과에 따른 콜백 함수를 같이 전달하는 것이 일반적이다. 
</br>이런 콜백 패턴은 에러 처리에 한계를 가진다. 
>에러는 caller방향으로 전달된다.
></br>즉, 에러를 발생시킨 콜백 함수는 자신을 넘겨받은 함수(A)가 실행컨텍스트에서 팝되어 사라진 뒤에 실행컨텍스트 스택에 푸쉬 되기 때문에 A의 try catch문으로 콜백함수의 에러를 잡을 수 없다. 

- 비동기 함수 후속처리는 함수 내부에서 수행해야 하는 이유

  아래와 같이 서버에 get요청을 보내는 코드가 있다고 가정하면,

  ```jsx
	 let data = {};

  const get = url => {
	  const xhr = new XHLHttpRequest();
	  xhr.open('GET',url);
	  xhr.send();

	  xhr.onload = () => {
	    if(xhr.status === 200){
	      data = JSON.parse(xhr.response);
	     } else {
	      console.error(${xhr.status});
	    }
	  }
  }

  get('https//something');
  console.log(data);
  ```

코드가 평가된다 → get 함수가 등록되고 전역 실행 컨텍스트가 콜스택에 push → 전역코드가 실행된다. get함수를 호출한다 
</br>→ get함수가 평가된다. → 실행된다. 
</br>http 통신은 비동기로 이뤄짐으로 onload 핸들러 프로퍼티에 바인딩 된 이벤트 핸들러는 이벤트가 발생하면 태스크큐로 들어간다. 
</br>→ get함수가 종료되면 함수 실행 컨텍스트는 pop되고 console.log()가 바로 실행된다. 
</br>서버로부터 데이터를 가지고 와서 data에 할당하는 것은 태스크큐에서 콜스택이 비어있게 되면 그제서야 발생하는데 
</br>**애초부터 전역 실행컨텍스트가 종료되어야 콜스택이 비어있게 되므로 절대 비동기 처리가 먼저 수행될 수 없다.** 

</br>

# Promise

- ES6에서 도입한 새로운 비동기 처리 패턴

### 생성

- new와 함께 Promise 생성자 함수 호출
- Promise 객체 생성
  ```jsx
  const p = new Promise((resolve, reject)=>{
    // 비동기 처리를 수행한다
    if( /*비동기 처리가 성공*/ ){
      resolve('result')
    } else {
      reject('failure')
    }
  })
  ```

### 상태정보

프로미스 콜백함수 내부에서 처리하는 비동기 처리의 상태에 관한 정보

- pending : 수행 전
- fulfilled : 수행 성공 (settled)
- rejected : 수행 실패 (settled)

pending에서 settled로 변경되면 그 역은 불가능하다

</br>

### 후속처리
- `then`, `catch`, `finally`
- 프로미스를 리턴하고, 비동기로 동작한다
- 상태정보가 변화하면 후속처리 메서드의 콜백함수에 프로미스 처리결과가 인수로 전달된다

  #### `then(func1, func2)`
  - func1 콜백함수는 프로미스가 fulfilled가 되면 호출, 비동기 처리 결과를 인수로 받는다.
  - func2 콜백함수는 프로미스가 rejected가 되면 호출, 에러를 인수로 받는다.

  #### `catch(func1)`
  - rejected인 경우만 호출
  - 모든 `then`메서드를 호출한 뒤에 호출하면 비동기 처리에서 발생한 모든 에러뿐만 아니라 `then`메서드 내부에서 발생한 에러까지 모두 캐치할 수 있다.

  #### `finally(func1)`
  - 프로미스 성공 여부와 상관없이 무조건 한번 호출된다.

</br>

### 프로미스 체이닝
- 콜백 헬을 해결할 수 있는 방법.
- `then`을 연속적으로 활용.
- 어찌됐든 프로미스도 콜백 패턴을 사용하긴 한다.
- 이를 위해 ES8에서 `async/await`가 등장했다. <a href="">바로 보기</a>

</br></br>

## 프로미스의 정적 메서드

- 생성자 함수로 사용되지만 정적 메서드를 갖고 있음.(인스턴스 없이 호출 가능)

  ### 1/2. `Promise.resolve/reject`
  - 이미 존재하는 값을 래핑해서 프로미스로 만든다.
    ```jsx
    const something = Promise.resolve([1,2,3]);
    something.then(console.log); // [1,2,3]이 출력된다. 
    ```
    

  ### 3. `Promise.all`
  - 여러 개의 비동기를 병렬 처리할때 사용
    ```jsx
    const reqData1 = () => new Promise(resolve => setTimeout(()=> resolve(1),3000));
    const reqData2 = () => new Promise(resolve => setTimeout(()=> resolve(2),2000));
    const reqData3 = () => new Promise(resolve => setTimeout(()=> resolve(3),1000));
    
    Promise.all([reqData1, reqData2, reqData2])
      .then(console.log) // [1,2,3]
      .catch(console.error)
    ```
    
  - 배열의 모든 프로미스가 fulfilled가 되면 종료
  - 하나라도 rejected가 나면 기다리지 않고 종료

  ### 4. `Promise.race`
  - `.all`처럼 프로미스 iterable을 인수로 받음.
  - 가장 먼저 fulfilled가 된 프로미스 처리 결과를 resolve하는 새로운 프로미스 반환
  - 하나라도 rejected되면 에러를 reject하는 프로미스 반환하고 종료

  ### 5. `Promise.allSettled`
  - 프로미스 iterable을 인수로 받음.
  - 모두 settled(fulfilled or rejected)상태가 되면 처리 결과를 배열로 리턴
    - fulfilled인 경우: `{ status, value }`
    - rejected인 경우: `{ status, reason }`

</br>

# 마이크로 태스크 큐

- 프로미스 후속 처리 메서드의 콜백함수가 일시 저장
- 태스크큐보다 우선순위가 높다
    - 마이크로 태스크큐가 비어있으면 태스크큐의 함수를 콜스택에 push

>비동기함수의 콜백함수, 이벤트 핸들러는 태스크큐에 일시 저장


</br></br>

---

</br>

# Generator
