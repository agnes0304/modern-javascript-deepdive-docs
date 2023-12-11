> 코드의 흐름을 인위적으로 제어

### switch 문

```javascript
var inputNumber = parseInt(window.prompt("number: "), 10);

if(isNaN(inputNumber)){
	console.log("it's not a number");
} else {

switch (inputNumber % 2) {
	case 1:
				console.log("Odd");
				break;
	case 0:
				console.log("Even");
				break;
	}
}
```

</br>

### 반복문

for문과 while문이 대표적이다. 

- for문: for, for -in, for -of
    
    ```javascript
    // for문
    for (let i = 0; i < 5; i++) {
        console.log(i); // prints 0, 1, 2, 3, 4
    }
    // for - in 문: 객체의 속성이나 배열의 요소를 임의의 순서로 반복. 특히 객체 속성을 반복할 때 유용.
    const person = {firstName:"John", lastName:"Doe"};
    for (let key in person) {
        console.log(key, person[key]); // prints "firstName John" and then "lastName Doe"
    }
    // for - of 문: 배열,문자열,Map,Set 등 이터러블 객체의 값을 반복하여 각 값에 대한 코드 블록을 실행하는 데 사용.
    const numbers = [1, 2, 3, 4, 5];
    for (let number of numbers) {
        console.log(number); // prints 1, 2, 3, 4, 5
    }
    ```
    
- while문: while, do - while
    - do...while는 조건이 참인지 확인하기 전에 항상 코드 블록을 한 번 실행한 다음 조건이 참이면 루프를 반복한다는 점에서 while과 다름.
 
</br>

### break

코드블록을 탈출하는 키워드이다. (앞서 switch문에서 사용되었다.) 레이블문, 반복문, 스위치문에서 사용된다. 

> 🤔 레이블 문? 식별자가 붙은 문을 의미한다. 스위치문에서 사용한 case, default도 사실 레이블 문에 해당한다. 

```javascript
hi: console.log("hi");

hello: {
  console.log('hello');
  break hello;
  console.log('hello2');
}
```

</br>

### continue

코드블록 반복을 현 지점에서 중단하고 반복문의 증감식으로 실행 흐름을 이동한다.
