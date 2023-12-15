>본 문서에서는 요소(element)는 `el`로, 텍스트(text)는 `txt`로, 어트리뷰트(attribute)는 `att`로 표기함

# DOM

- Document Object Model
- DOM tree : html 문서를 파싱하여 생성한 노드 객체를 트리구조로 표현한 것
    - html 문서의 계층적 구조와 정보를 표현
    - 노드 객체는 브라우저 환경에서 제공하는 호스트 객체
    - DOM API(프로퍼티, 메서드)를 통해 구조와 정보 접근 가능
- 현재 약 4개 버전이 있음

</br></br>

# 노드(node)

```html
<div class="something">Hi</div>
// el은 div
// att은 class
// contents는 Hi
```

- html `el`은 파싱되어 DOM을 구성하는 `el` 노드로 변환된다.
- html `el`의 `att`는 `att` 노드로, 텍스트 콘텐츠는 텍스트 노드로 변환된다.
- html `el`들은 중첩관계를 갖고, parent-child관계가 형성된다.

→ 이를 반영하여 트리 자료구조로 표현한다.

</br>

### 노드 종류

|종류|특징|
|:---:|:---|
|문서 노드(document node)|• DOM 트리 최상위 루트 노드</br>• document 객체 가리킴</br>• 전역 객체 window의 document 프로퍼티에 바인딩|
|요소 노드(element node)</br>"document의 구조 표현"|• HTML `el`</br>• 부모 노드와 연결|
|어트리뷰트 노드(attribute node)|• `el` 노드와 연결(부모 노드 X) but 형제관계는 아님</br>• `el` 노드에 먼저 접근해야 `att` 노드에 접근 가능|
|텍스트 노드(text node)</br>"document의 정보 표현"|• HTML 콘텐츠 중 텍스트</br>• `el` 노드의 자식노드이자 리프노드(자식노드 가질 수 X)</br>• `el` 노드에 먼저 접근해야 `txt`노드에 접근 가능</br>• 공백 텍스트 노드 존재*|

그 외 노드

- Comment 노드, Document Type노트, Document Fragment 노드 등 총 12개
- 공백 텍스트 노드
    - html 문서의 공백(탭, 줄바꿈 등)은 텍스트 노드 생성

</br>

### 상속 구조

- 노드 객체는 자신의 구조와 정보 제어할 수 있는 API 사용할 수 있다.

![DOM el prototype 상속](https://github.com/agnes0304/modern-javascript-deepdive-docs/assets/86249667/87e59842-0b0b-47dd-b13b-f3c4fc8f6fbf)

- 공통된 기능일수록 프로토타입 체인 상위, 고유 기능일수록 프로토타입 체인 하위에 구축
- 모든 객체는 Object, EventTarget, Node 인터페이스를 상속
    - 문서 노드: Document, HTMLDocument 인터페이스 상속
    - `att` 노드: Attr
    - `txt` 노드: CharacterData 인터페이스 상속
    - `el` 노드: Element, HTMLElement 인터페이스 상속
        - 추가적으로 태그를 세분화하여 종류별로 인터페이스를 상속

>노드 객체 상속구조는 개발자도구 Elements 우측 Properties에서 확인가능

</br></br>

# DOM API

>`el` 노드와 `txt` 노드에 한 하여 설명. <a href="https://github.com/agnes0304/modern-javascript-deepdive-docs/blob/main/39-dom/README.md#att-%EB%85%B8%EB%93%9C">att 노드 바로가기</a>

### 1. 노드 취득
| 프로퍼티 | 설명 |
| :--- | :--- |
| Document.prototype`.getElementById` | • id로 호출</br>• 반드시 document를 통해 호출</br>• att id 값은 유일해야 하지만 중복되어도 에러는 발생하지 않음</br>• 첫번째 el 노드만 리턴 / 없으면 null |
| Document/Element.prototype`.getElementsByTagName` | • 태그 이름으로 호출</br>• 유사배열, iterable인 HTMLCollection 객체 리턴/ 없으면 빈 HTMLCollection 객체</br>• `document.getElementsByTagName(*);` 모든 el노드 취득</br>• document.getElementsByTagName()인 경우, HTML 문서 전체에서 탐색</br>• element.getElementsByTagName()인 경우, 특정 el 노드의 자식노드 중에서 탐색 |
| Document/Element.prototype`.getElementsByClassName` | • 클래스 이름으로 호출</br>• 위와 동일 |
| Document/Element.prototype`.querySelector` | • css selector로 호출</br>• 하나의 el 노드만 리턴 / 없으면 null / selector가 문법에 맞지 않으면 DOMException에러 |
| Document/Element.prototype`.querySelectorAll` | • css selector로 호출</br>• 유사배열, iterable인 NodeList 객체 리턴 / 없으면 빈 NodeList 객체</br>• `document.querySelectorAll(*);` 모든 노드 취득 |
| Element.prototype`.matches` | • css selector로 취득 가능 여부 확인</br>• 이벤트 위임 시 유용 → 40장 이벤트에서 다룰 것 |

</br>

>### HTMLCollection vs NodeList?
></br>DOM API가 복수의 결과값 리턴을 위해 사용하는 컬렉션 객체
></br>주요 특징
></br> - 유사배열, iterable : `for - of` 사용가능, `spread` 문법 사용가능
></br>
></br>**HTMLCollection**
></br>- live 객체: 노드 객체 상태변화를 실시간으로 반영(HTMLCollection)
></br>- `for`문으로 돌면서 상태 변경 시에는 주의가 필요(상태 변경되어 더이상 취득 조건에 맞지 않게 되면 HTMLCollection에서 빠져버림)
></br>- 역방향 `for`, `while`문으로 회피 가능
></br>- 배열로 변환해서 사용하자
></br>
></br>**NodeList**
></br>- non-live 객체: 실시간으로 반영하지 않음
></br>- live 객체: childNodes 프로퍼티가 리턴하는 NodeList객체
></br>- `forEach()` 사용 가능: Array.protoype.forEach와 사용 방법 동일
></br>- 배열로 변환해서 사용하자

</br>

### 2. 노드 탐색

- 읽기 전용 접근자 프로퍼티(getter만 존재)
- Node, Element 인터페이스가 제공
    - Node.prototype → txt 노드 포함
        - parentNode, previousSibling, firstChild, childNodes 제공
    - Element.prototype → el 노드 우선(txt노드 미포함)
        - previous**Element**Sibiling, next**Element**Sibling, children 제공

#### 자식 노드 탐색 프로퍼티
|프로퍼티|설명|
| :--- | :--- |
| Node.prototype`.childNodes` | • NodeList에 담아 리턴</br>• txt 노드 있을 수 있음 |
| Node.prototype`.firstChild` | • 첫번째 자식노드 리턴</br>• txt 노드 혹은 el 노드 |
| Node.prototype`.lastChild` | • 마지막 자식노드 리턴</br>• txt 노드 혹은 el 노드 |

|프로퍼티|설명|
| :--- | :--- |
| Element.prototype`.children` | • HTMLCollection에 담아 리턴</br>• txt 노드 불포함 |
| Element.prototype`.firstElementChild` | • 첫번째 자식 el 노드 리턴 |
| Element.prototype`.lastElementChild` | • 마지막 자식 el 노드 리턴 |

#### 존재 여부 확인
|프로퍼티|설명|
| :--- | :--- |
| Node.prototype`.hasChildNodes` | txt노드 포함 자식여부 |
| `children.length`, Element.prototype`.childElementCount` | el 노드만 |

#### el 노드의 txt 노드(자식노드) 탐색

`.firstChild` → txt or el 노드 리턴

#### 부모 노드 탐색

Node.prototype`.parentNode`

#### 형제 노드 탐색
|프로퍼티|설명|
| :--- | :--- |
| Node.prototype`.previousSibling` | • 자신의 이전 형제 노드</br>• txt 노드 있을 수 있음 |
| Node.prototype`.nextSibling` | • 자신의 다음 형제 노드</br>• txt 노드 혹은 el 노드 |

|프로퍼티|설명|
| :--- | :--- |
| Element.prototype`.previousElementSibling` | • 자신의 이전 형제 el 노드 |
| Element.prototype`.nextElementSibling` | • 자신의 이후 형제 el 노드 |

#### 노드 정보 취득
|프로퍼티|설명|
| :--- | :--- |
| Node.prototype`.nodeType` | • 노드 타입을 나타내는 상수 리턴</br>• Node.ELEMENT_NODE: el 노드 타입, 1 리턴</br>• Node.TEXT_NODE: txt 노드 타입, 3 리턴</br>• Node.DOCUMENT_NODE: 문서 노드 타입, 9 리턴 |
| Node.prototype`.nodeName` | • 노드 이름을 문자열로 리턴</br>• el 노드: 대문자 (“UL”, “LI”)</br>• txt 노드: 문자열 “#text” </br>• 문서 노드: 문자열 “#document” |

### 3. 노드 조작

- setter, getter 모두 존재
    
|프로퍼티|설명|
| :--- | :--- |
| `nodeValue` | • txt 노드의 값을 리턴 / 없으면(다른 노드이면) null |
| `textContent` | • el 노드의 txt와 모든 자손 노도의 txt를 취득, 조작</br>• HTML 마크업 무시</br>• 할당한 문자열에 html마크업이 있어도 무시(파싱되지 않음) |

</br></br>

## DOM 조작

- 노드 객체를 생성하거나 교체, 조작하는 것을 의미
- 리플로우와 리페인트가 발생한다. → <a href=””>바로보기</a>

### HTML 마크업 파싱, 생성 및 반영
| innerHTML | insertAdjacentHTML( position, DOMSting ) |
| :--- | :--- |
| • HTML 마크업 취득 및 변경</br>• el 노드에 적용 시, 모든 마크업이 문자열로 변경(textContent와 차이)</br>• 문자열 할당 시, HTML 파싱되어 해당 el 노드의 자식노드로 DOM에 반영</br>&nbsp;&nbsp;&nbsp;&nbsp;•위치 지정 불가</br>&nbsp;&nbsp;&nbsp;&nbsp;•기존 el 노드 내 마크업 유지 불가</br></br>• XSS(Cross-Site Scripting Attacks)에 취약</br>&nbsp;&nbsp;&nbsp;&nbsp;•js코드도 스크립트 태그로 삽입하여 전달할 수 있음.</br>&nbsp;&nbsp;&nbsp;&nbsp;•악성 코드 담겨있으면 그대로 실행</br>&nbsp;&nbsp;&nbsp;&nbsp;•html5이후부터는 스크립트 요소 내의 js코드는 실행하진 않음</br>&nbsp;&nbsp;&nbsp;&nbsp;•HTML sanitization 해야 함. (DOM purify 라이브러리)|• 기존 요소 유지, 위치 지정 가능</br>• XSS 취약</br>• DOMString을 파싱해서 position에 반영</br>&nbsp;&nbsp;&nbsp;&nbsp;•position? beforebegin, afterbegin, beforeend, afterend |

```html
<body>

<!--beforebegin -->
  <div id="something">
  <!--afterbegin-->
	  text
  <!--beforeend-->
  </div>
<!--afterend-->

  <script>
    const $something = document.getElementById("something");
    $something.insertAdjacentHTML('beforebegin', '<div>beforebegin 위치</div>');
  </script>

</body>
```

### 노드 생성과 추가
|프로퍼티|설명|
| :--- | :--- |
| Document.prototype`.createElement(tagName)` | • el 노드 생성 리턴</br>• DOM에 추가하지 않음 |
| Document.prototype`.createTextNode(text)`</br>*`<elNode>.textContent(text)` | • txt 노드 생성 리턴</br>• el 노드에 추가하지 않음</br>* el 노드에 자식노드 없다면 해당 방법이 더욱 간편  |
| Node.prototype`.appendChild(childNode)` | • childNode를 호출한 노드의 마지막 자식노드로 추가</br>• 생성한 txt 노드를 el 노드의 자식노드로 추가</br>• 생성한 el 노드를 DOM에 추가 |
| Node.prototype`.insertBefore(newNode, childNode)` | • newNode를 childNode 앞에 삽입</br>• childNode 생략시, appendChild()와 동일하게 동작 |
| Node.prototype`.cloneNode([deep: true / false])` | • 노드 사본 생성 리턴</br>• true전달 시, deep copy → 모든 자손노드 포함 사본</br>• 생략 혹은 false 전달 시, shallow copy → 자신만(txt 노드도 없음) |
| Node.prototype`.replaceChild(newNode, oldChild)` | • newNode를 oldChild와 교체</br>• oldChild는 DOM에서 제거 |
| Node.prototype`.removeChild(child)` | • child는 DOM에서 제거 |
- 잦은 DOM요소 생성과 교체는 리플로우 리페인트를 반복적으로 유발
- 컨테이너 `el` 노드를 생성해서 해결할 수 있음(예시: `<div></div>`)
    
    → 불필요한 div 태그가 생성됨 → `DocumentFragment` 노드로 해결

- `DocumentFragment` 노드를 DOM에 추가하면 자신은 제거되고 자식노드만 DOM에 추가된다.

	|프로퍼티|설명|
	|:---|:---|
	|Document.prototype`.createDocumentFragement()`| • 빈 DocumentFragment 리턴|

	![documentFragment](https://github.com/agnes0304/modern-javascript-deepdive-docs/assets/86249667/947d03e6-315d-4ab8-8cdd-de4a4cb1dba0)

</br></br>

## `att` 노드

- 복수개일 수 있음.
- 특정 `el` 노드의 모든 `att` 노드 참조는 `NamedNodeMap` 객체(유사배열, iterable)로 `el` 노드의 attributes 프로퍼티에 저장

#### att 노드 취득 및 조작
|프로퍼티|설명|
| :--- | :--- |
| Element.prototype`.attributes` | • NamedNodeMap 객체 리턴</br>• getter 만 존재(읽기 전용) |
| Element.prototype`.getAttribute(attributeName)` | • att 이름으로 값 참조 |
| Element.prototype`.setAttributes(attributeName, attributeValue)` | • att 이름에 att 값 할당 (초기 상태 값에 해당한다) |
| Element.prototype`.hasAttributes(attributeName)` | • att 존재여부 확인 |
| Element.prototype`.removeAttributes(attributeName)` | • att 삭제 |

</br>

### HTML 어트리뷰트 vs DOM 프로퍼티

#### HTML 어트리뷰트

- html el의 초기 상태를 지정(변하는 값이 아님)

#### DOM 프로퍼티

- el 노드 객체에 존재하는 html att에 대응하는 프로퍼티
- 사용자 입력에 의한 상태변화가 있는 el 노드에서는 상태를 의미(live)
    - 최신 값
- setter, getter 존재
    - 예시: `input.value = 100;`

#### 대응관계

- att 이름은 대소문자 구문하지 않으나, 프로퍼티 키는 카멜 케이스를 따른다.
- getAtt~로 취득한 값은 문자열이나, DOM 프로퍼티로 취득한 값은 문자열이 아닐 수 있다(boolean, number etc)

#### data att과 dataset 프로퍼티

- 사용자 정의 att과 js간 데이터 교환을 가능케 함
- data att
    - data- 접두사 다음에 임의의 이름을 붙여 사용함(예시: data-role)
    - HTMLElement`.dataset` 프로퍼티로 취득
- HTMLElement`.dataset`
    - DOMStringMap 객체 리턴
    - el의 data att이름의 카멜케이스를 프로퍼티로 가짐

</br>

### 스타일 참조 및 조작
|프로퍼티|설명|
| :--- | :--- |
| HTMLElement.prototype`.style` | • getter, setter 존재</br>• el 노드의 인라인 스타일 조작</br>• CSSStyleDeclaration 객체 리턴 |
| window`.getComputedStyle(el, pseudo*)` | • style은 인라인만 반환하기때문에 모든 CSS참조 위해 사용</br>• el에 적용된 스타일을 CSSStyleDeclaration 객체로 리턴</br>*pseudo: 지정가능 |

```html
<body>
  <div style="color: blue">text</div>
  <script>
    const $div = document.querySelector('div');
    console.log($div.style); // CSSStyleDeclaration { 0: 'color', ... }
  
    $div.style.color = 'blue';
    $div.style.width = '100px';
    $div.style.backgroudColor = 'red';
    // $div.style['backgroud-color'] = 'red';
  </script>
</body>
```

</br>

### 클래스 조작
|프로퍼티|설명|
| :--- | :--- |
| Element.prototype`.className` | • getter, setter 존재</br>• el 노드의 클래스 |
| Element.prototype`.classList`| • class att 정보를 담은 DOMTokenList 객체 리턴</br>• 유사배열객체, iterable</br>• 다음 메서드 지원: `.add()`, `.remove()`, `.item(index)`, `.contains(className)`, `.replace(old, new)`, `toggle(className)`</br>*`toggle`; 있으면 제거, 없으면 추가  |
