### 이벤트 드리븐(event-driven) 프로그래밍

>프로그램 흐름을 이벤트 중심으로 제어하는 프로그래밍 방식

- 브라우저는 특정 사건이 발생하면 이를 감지, 이벤트를 발생
- 이벤트 핸들러: 이벤트 발생 시 호출될 함수
- 이벤트 핸들러 등록: 브라우저에게 이벤트 발생 시 핸들러 호출을 위임

</br></br>

# 이벤트 타입

>이벤트 종류를 나타내는 문자열

- 약 200개 정도가 있음 → 자세한 사항은 MDN Event reference 확인

### 마우스 이벤트

- `click`: 클릭
- `dbclick`: 더블클릭
- `mousedown`: 눌렀을 때
- `mouseup`: 눌렀던 걸 놓았을 때
- `mousemove`: 움직인 때
- `mouseenter`: HTML요소 안으로 이동(버블링X)
- `mouseover`: HTML요소 안으로 이동(버블링O)
- `mouseleave`: HTML요소 밖으로 이동(버블링X)
- `mouseout`: HTML요소 밖으로 이동(버블링O)

### 키보드 이벤트

- `keydown`: 눌렀을 때(모든 키)
    - 문자, 숫자, 특수문자, enter키 눌렀을때는 연속, 그 외 키는 한번만 발생
- ~~`keypress`: 문자 키 눌렀을 때~~ → deprecated됨
    - 문자, 숫자, 특수문자, enter키만 대상
- `keyup`: 눌렀던 걸 놓았을 때(한 번)

### 포커스 이벤트

- `focus`: HTML요소가 포커스 받았을때(버블링X)
- `blur`: HTML요소가 포커스 잃은 때(버블링X)
- `focusin`: HTML요소가 포커스 받았을때(버블링O)
- `focusout`: HTML요소가 포커스 잃은 때(버블링O)

>focusin/out의 경우, addEventListner 메서드로 사용해야 등록됨

### 폼 이벤트

- `submit`
    - form요소 내의 input, select입력 필드에서 엔터키를 눌렀을때
    - form 요소 내의 submit 버튼을 클릭(`type=”submit”`)
- ~~`reset`~~: form 요소 내의 reset 버튼 클릭(최근 사용 안함)

### 값 변경 이벤트

- `input`: input, select, textarea 요소 값 입력
- `change`: input, select, textarea 요소 값 변경 → 포커스를 잃었을 때 사용자 입력이 종료되었다고 판단
- `readystatechange`: HTML문서의 파싱 상태 나타내는 document.readyState값의 변경

### DOM 뮤테이션 이벤트

- `DOMContentLoaded`: DOM생성 완료

### 뷰 이벤트

- `resize`: 브라우저 윈도우 크기 리사이즈 시 연속적으로 발생
- `scroll`: HTML요소, 웹페이지 스크롤 시에 연속적으로 발생

### 리소스 이벤트

- `load`: DOMContentLoaded발생 후 모든 리소스 로딩 완료 시(주로 window객체에서 발생)
- `unload`: 리소스 언로드(새 웹페이지 요청 시)
- `abort`: 리소스 로딩 중단
- `error`: 리소스 로딩 실패

</br></br>

# 이벤트 핸들러

>브라우저에 호출을 위임한 함수, 이벤트 발생 시 호출될 함수

### 1. 이벤트 핸들러 어트리뷰트 방식 등록

- on 접두사 + 이벤트 타입

- att값으로 함수 호출문을 할당 → 함수 몸체

- CBD(Component based development) 프레임워크에서 사용하는 이벤트 처리 방식

### 2. 이벤트 핸들러 프로퍼티 방식 등록

>결과적으로 이벤트 핸들러 att방식과 동일하나 HTML과 JS가 섞이는 문제 보완

- window객체, Document, HTMLElement 타입의 DOM 노드 객체는 이벤트에 대응하는 이벤트 핸들러 프로퍼티 가짐
- on 접두사 + 이벤트 타입
- 프로퍼티에 함수를 바인딩하면 이벤트 핸들러가 등록
- 하나의 이벤트 핸들러만 할당할 수 있음
    
    ```html
    <script>
    	const button = document.querySelector('button');
    	
    	// 이벤트 타깃: button, 이벤트 타입: click, 이벤트 핸들러: function(){ ... }
    	button.onclick = function(){
    		console.log('clicked!');
    	};
    </script>
    ```
    
- 반드시 이벤트 타깃에 핸들러를 등록할 필요는 없음.
    - 전파된 이벤트를 캐치할 DOM 노드 객체에 바인딩
 
### 3. addEventListener 메서드 방식 등록

- DOM level 2부터 제공된 `EventTarget.prototype.addEventListener`사용

```jsx
EventTarget.addEventListener('이벤트타입', 이벤트핸들러함수, 캡쳐사용여부*);
```

- 이벤트타입: on 접두사 없이 이벤트 타입 문자열 전달
- 캡쳐사용여부: false 혹은 생략하면 버블링 단계에서 이벤트를 캐치, true로 성정하면 캡쳐링 단계에서 이벤트 캐치

```html
<script>
	const button = document.querySelector('button');
	
	// 이벤트 타깃: button, 이벤트 타입: click, 이벤트 핸들러: function(){ ... }
	button.addEventListener('click', function(){
		console.log('clicked!');
	})
</script>
```

- 동일한 타겟에 하나 이상의 이벤트 핸들러 등록 가능 → 등록된 순서대로 호출됨

</br>

### 이벤트 핸들러 제거

- `EventTarget.prototype.removeEventListener`
- 전달 인수는 위와 동일 → 각 인수가 일치하지 않으면 이벤트 핸들러가 제거되지 않음
- addEventListener 이벤트 핸들러 내에서 호출할 수 있음
- 이벤트 핸들러 프로퍼티로 등록한 이벤트 핸들러 제거 : `null`할당

</br></br>

# 이벤트 객체

- 이벤트 발생 시에 생성됨
- 이벤트 핸들러의 첫번째 인수로 전달됨
- 전달받으려면 인수에 명시적으로 선언해야 함
- 이벤트 핸들러 어트리뷰트 방식의 경우 이벤트 객체 전달받으려면 핸들러 첫번째 파라미터 이름이 event여야 함

```jsx
function onClick(event){
	console.log(`${event} is occured!`);
}
```

### 이벤트 객체의 상속구조

![이벤트 객체 상속 구조](https://github.com/agnes0304/modern-javascript-deepdive-docs/assets/86249667/af5964d7-5073-4d62-98c0-ffb0de8b3f6e)
>책에서 가져옴

- 각각은 생성자 함수
- 공통 프로퍼티 → Event 인터페이스(Event.prototype)는 모든 파생 이벤트 객체에 상속
    
    | 공통 프로퍼티 | 설명 | 타입 |
    | --- | --- | --- |
    | type | 이벤트 타입 | string |
    | target | 발생시킨 요소 | DOM el node |
    | currentTarget | 이벤트 핸들러가 바인딩 된 DOM요소 | DOM el node |
    | eventPhase | 이벤트 전파단계</br>• 0: 이벤트 없음</br>• 1: 캡쳐링 단계</br>• 2: 타깃 단계</br>• 3: 버블링 단계 | number |
    | bubbles | 이벤트를 버블링으로 전파하는지 여부</br>• 포커스의 focus/blur, 리소스, 마우스의 enter/leave는 false | boolean |
    | cancelable | preventDefault 메서드를 호출하여 기본 동작 취소 가능 여부</br>• 포커스의 focus/blur, 리소스, 마우스의 enter/leave/dbclick는 false | boolean |
    | defaultPrevented | preventDefault 호출해서 취소했는지 여부 | boolean |
    | isTrusted | 사용자의 행위에 의해 발생한 이벤트인지 여부</br>• 인위적으로 메서드를 통해 발생시킨 경우 false | boolean |
    | timeStamp | 발생한 시각 | number |

### 마우스 정보 취득

>MouseEvent타입의 이벤트 객체는 아래 고유 프로퍼티를 가짐
></br>포인터 좌표정보: `screenX/screenY`, `clientX/clientY`, `pageX/pageY`, `offsetX/offsetY` 
></br>버튼정보: `altKey`, `ctrlKey`, `shiftKey`, `button`

#### DOM 요소 드래그하기

- mousedown 발생한 상태에서 mousemove 발생한 시점에 시작
    - mousedown 시 좌표를 기준으로
    - mousemove 발생할 때마다 포인터 좌표를 비교 → 드래그 대상의 이동거리 계산
    - clientX, Y는 뷰포트를 기준으로 마우스 포인터 좌표 나타냄
    
<img width="789" alt="드래그 예제" src="https://github.com/agnes0304/modern-javascript-deepdive-docs/assets/86249667/a848bebf-b14a-4f9c-a4b8-457b43d645c9">
    
- mouseup 발생한 시점에 종료
    - 드래그 대상 이동하는 이벤트 핸들러 제거

```html
<script>
	const box = document.querySelector('.box');
	const initPos = { x:0, y:0}; // 드래그 시작 포인터
	const offset = { x:0, y:0}; // 이동할 거리

	const move = event => {
		offset.x = event.clientX - initPos.x;
		offset.y = event.clientY - initPos.y;

		box.style.transform = `translate3d(${offset.x}px, ${offset.y}px, 0)`; 
		// translate3d는 GPU사용해서 absolute보다 빠름
		// top, left는 레이아웃에 영향을 줌

		document.addEventListener('mousemove',move);
	}
	
	document.addEventListener('mouseup', ()=>{
		document.removeEventListener('mousemove', move);
	});
</script>
```

### 키보드 이벤트 객체

>altKey, ctrlKey, shiftKey, metaKey, key, keyCode같은 고유 프로퍼티 가짐


</br></br>

# 이벤트 전파와 위임

### 이벤트 전파

- DOM 트리 상의 DOM 요소 노드에서 발생한 이벤트는 트리 타고 전파
- 이벤트 핸들러 att, 프로퍼티 방식으로 등록한 이벤트 핸들러는 2,3단계만 캐치
- addEventListener방식으로 등록한 이벤트 핸들러는 세번째 인수로 true를 넣는 경우 1단계도 선별적으로 캐치
1. Capturing phase
    1. 상위요소에서 하위 요소 방향으로 전파
2. Target phase
    1. 이벤트가 이벤트 타깃에 도달
3. Bubbling phase
    1. 하위요소에서 상위요소 방향으로 전파

![이벤트 전파](https://github.com/agnes0304/modern-javascript-deepdive-docs/assets/86249667/4f28d455-9e83-4d6e-af0f-c4c2ca729bf5)
>책에서 가져옴

</br>

### 이벤트 위임

- 여러개의 하위 DOM요소에 각각 이벤트 핸들러를 등록하는 대신 상위 DOM요소 하나에 이벤트 핸들러를 등록하는 방법

</br>

### DOM 요소의 기본 동작 조작

- 이벤트 객체의 preventDefault 메서드를 통해 DOM 요소 기본동작 조작
- 이벤트 객체의 stopPropagation 메서드를 통해 이벤트 전파 중지

</br></br>

# 이벤트 핸들러 내부의 this

### 이벤트 핸들러 att방식

- 인수로 전달한 this는 이벤트를 바인딩한 DOM 요소를 가리킴

### 이벤트 핸들러 프로퍼티, addEventListener

- 이벤트 핸들러 내부의 this는 바인딩한 DOM요소를 가리킨다(currentTarget)
- 이벤트 핸들러를 화살표함수로 정의하는 경우, this는 상위 스코프의 this.
- 유의: 클래스 내부의 메서드를 이벤트 핸들러로 등록하는 경우 메서드 내부의 this는 인스턴스가 아니라 바인딩된 DOM요소를 가리킴.

</br></br>

# 커스텀 이벤트

- 이벤트 생성자 함수로 호출하여 명시적으로 생성한 이벤트 객체는 임의의 이벤트 타입을 지정할 수 있음

- 버블링 되지 않음 : `bubbles: false`

- preventDefault로 취소 할 수 없음 : `cancelable:false`

- 객체 고유의 프로퍼티 값도 설정가능

- CustomEvent객체를 생성한 경우는 무조건 addEventListener로 등록
    - on + 이벤트 타입이 el 노드에 없기 때문

```jsx
const custom = new CustomEvent('이벤트타입', {
	// 전달해서 기본 설정을 바꿀 수 있음
	bubbles: false,
	cancelable:false
	detail: { message: '커스텀입니다.'} // 원하는 detail을 담을 수 있음. event.detail로 접근
});

const custom = new MouseEvent('이벤트타입', {
	// 전달해서 기본 설정을 바꿀 수 있음
	bubbles: false,
	cancelable:false,
	clientX: 100;
});
```

### 커스텀 이벤트 디스패치

- dispatchEvent로 커스텀 이벤트를 발생시킴.
- `target.dispatchEvent(customEvent);`
- 동기 처리 방식으로 호출 → 커스텀이벤트핸들러를 직접 호출하는 것과 동일
    
    >원래 이벤트 핸들러는 비동기 처리로 동작
