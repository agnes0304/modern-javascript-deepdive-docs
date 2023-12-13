앞서 객체란 상태(property) + 동작(method)을 하나의 논리적인 단위로 묶은 복합적 자료구조라고 말한 바 있다. 
</br>메서드는 자신이 속한 객체의 프로퍼티를 참조하기 위해 자신이 속한 객체를 가리키는 식별자를 참조할 수 있어야 함. 
</br>이때 사용하는 것이 `this`키워드이다. 

# this

자기참조변수(self-referencing variable)로, 메서드 자신이 속한 객체, 자신이 생성할 인스턴스를 가리킨다.

- JS엔진에 의해 암묵적으로 생성
- 코드 어디서든 참조가능
- 함수 호출시 arguments객체와 this가 함수 내부에 전달된다.
- this 바인딩(this가 가리키는 값)은 함수 호출 방식에 의해 dynamic하게 결정된다.
    
    >JAVA, C++같은 클래스 기반 언어는 this는 무조건 클래스를 통해 생성되는 인스턴스를 가리킨다. 
    </br>JS에서는 1) 객체 리터럴 메서드 내부에서는 <code>메서드를 호출한 객체</code>를, 2) 생성자 함수 내부에서는 <code>함수가 생성할 인스턴스</code>를 가리킨다. 
    
</br>
</br>

# this 바인딩

아까 함수가 어떻게 호출되었는가에 따라 동적으로 결정된다고 설명한 바 있다. 

동일한 함수라도 다양한 방식으로 호출할 수 있다. 

```javascript
const sample() {
  console.log(this);
}

// 일반 함수 호출
sample() // window

const test = { sample }; // sample함수가 test의 메서드가 된다. 
// method 호출
test.sample(); // test 

// 생성자 함수 호출
new sample(); // sample {}

// 간접 호출
const test2 = { name: 'test2' };
sample.call(test2); // test2
sample.apply(test2); // test2
sample.bind(test2)(); // test2
```

하나씩 천천히 살펴보자

### 1. 일반함수 호출
- 기본적으로 window(전역 객체)바인딩
- strict mode인 경우 undefined
- 어떠한 함수(중첩, 콜백)라도 일반함수로 호출되면 동일하게 window 바인딩.
</br>🔗 <a href="https://github.com/agnes0304/modern-javascript-deepdive-docs/blob/main/22-this/README.md#this-%EB%B0%94%EC%9D%B8%EB%94%A9%EC%9D%84-%EC%9D%BC%EC%B9%98%EC%8B%9C%ED%82%AC-%EC%88%98-%EC%9E%88%EB%8A%94-%EB%B0%A9%EB%B2%95">내부 this 바인딩을 메서드 this와 일치하기 위한 방법</a>
    
</br>

### 2. 메서드 호출 
- 가리키는 객체와 관계없이 `호출한` 객체에 바인딩!
- 메서드 내부 this: 메서드를 “호출한” 객체에 바인딩
        
```javascript
const person = {
  name: 'Choi'
  getName() {
    return this.name;
  }
}
        
const user = {
  name: 'Kim'
};
        
// person 객체가 호출
conssole.log(person.getName()); // 'Choi'
        
// user 객체가 호출
user.getName = person.getName;
console.log(user.getName()); // 'Kim'
        
// 일반 함수 호출 = window.name
const getName = person.getName;
console.log(getName()); // '' 

```
        
- 프로토타입 메서드 내부 this (위와 동일)
        
```jsx
function Person(name){
  this.name = name;
}
        
Person.prototype.getName = function () {
  return this.name;
}
        
const me = new Person('jiwoo')
console.log(me.getName()) // 'jiwoo'
        
Person.prototype.name = 'Kim'
console.log(Person.protoype.getName()); // 'Kim'
```
        
### 3. 생성자 함수 호출

</br>

### 4. `Function.prototype.apply/call/bind` 메서드에 의한 간접 호출
- 모든 함수가 상속받아 사용할 수 있다.

  #### `apply`, `call`
  - 함수 호출이 본질적인 기능! this로 사용할 객체와 인수 리스트를 인수로 전달받아 함수를 호출
  - arguments 객체와 같은 유사 배열 객체에 배열 메서드를 사용하기 위해서 주로 사용
        
  ```jsx
  function getThisBinding(){
    console.log(arguments);
    return this;
  }
  const thisArg = { a: 1};
        
  console.log(getThisBinding.apply(thisArg, [1,2,3]));
  console.log(getThisBinding.call(thisArg, 1, 2, 3));
  // Arguments(3)[1,2,3,callee: f, Symbol(Stmbol.iterator):f] -> console.log(arguments); 값
  // { a:1} -> 리턴된 this
          
  function argToArray(){
    console.log(arguments);
    const arr = Array.prototype.slice.call(arguments);
    return arr;
  }
  console.log(artToArray(1,2,3)); // [1,2,3]
  ```
        
  #### `bind`
  - 첫번째 인수로 전달하는 값이 this바인딩이 되어 함수를 새롭게 생성해서 리턴한다.
  - 앞서 일반함수로 호출되는 내부 중첩, 콜백함수의 this 바인딩이 메서드의 this 바인딩과 달라지는 문제를 해결할때 유용하게 쓰인다.
            
  ```jsx
  const person ={
    name: 'jiwoo'
    callBack(callbackfn){
      setTimeout(callbackfn.bind(this), 100);
    }
  }
              
  person.callBack(function (){
    console.log('Hi! ${this.name}'); // 'Hi! jiwoo'
  })
  ```
            
</br></br>

## this 바인딩을 일치시킬 수 있는 방법

1. 메서드 내부 중첩 함수, 콜백함수의 this를 메서드 this와 일치하기 위해서는 각 함수 내부에서 this를 받는 변수를 할당해야 한다. 
    
```jsx
let val = 0;
    
const obj = {
  val: 100;
  print() {
    const that = this; // this 바인딩을 임의의 변수 that에 할당
    setTimeout(function(){
      console.log(that.value); 
    }, 100);
  }
};
    
obj.print(); // 100
```
    
2. `Function.prototype.apply/call/bind`를 활용할 수 있음. 바로가기
3. 화살표 함수를 통해 바인딩 일치시킬 수 있음. 
    
```jsx
let val = 0;
    
const obj = {
  val: 100;
  print() {
    // 화살표 함수 내부 this는 상위 스코프의 this를 가리킨다. 
    setTimeout(() => 
    console.log(this.value), 100);
  }
};
    
obj.print(); // 100
```
