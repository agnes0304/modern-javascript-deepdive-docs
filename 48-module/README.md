# 모듈
- 애플리케이션을 구성하는 개별 요소.
- 재사용한 코드 조각.
- 파일 스코프를 가져야 함.

### 특징
- 기능을 기준으로 파일 단위로 분리한다.
- 파일스코프를 갖는 모듈의 자산은 캡슐화되어 외부에서 직접 접근할 수 없다.
- 모듈은 공개가 필요한 자산에 한정하여 `export`한다.
- 그걸 `import`해서 모듈 사용자가 자신의 스코프 내로 불러들여 사용.

</br>

### 발전과정

#### Node.js의 파일 스코프

>- 원래 자바스크립트는 파일 스코프, `import`, `export` 지원하지 않음.
>- Node.js에서 CommonJS 채택하면서 모듈 시스템을 지원
>- Node.js 환경에서는 파일 별로 파일 스코프를 가진다.


#### ESM(ES6 모듈)

>- ES6부터 클라이언트 사이드에서 동작하는 모듈추가
>- `<script>` 태그에 `type=“module"`
>- 일반 자바스크립트 파일이 아니라 `esm`임을 명확히 하기 위해 `.mjs` 확장자명 사용을 권장

</br></br>

## <code>export</code> / <code>import</code>

- 선언문 앞에 사용
- 객체로 묶어 공유할 자산을 한번에 `export` 할 수 있음.
- 단 하나의 자산만 `export`할 경우 `default`키워드를 사용할 수 있음.
    - 이때 `var`, `let`, `const` 키워드 사용 불가
- `default`로 `export`한 자산을 `import`할 땐 `{}`없이 임의의 이름으로 `import`한다.

```jsx
// sampleModule.mjs
const user = { name: 'jiwoo' }
const course = { name: 'Javascript' }
const score = { A:100, B:80 }

export { user, course, score }

// sampleImport.js
import { user, course, score } from './sampleModule.mjs'

// defaultModule.mjs
export default function (a,b) {
  return a+b;
}

// defaultImport.js
import add from './defaultModule.mjs'

```

