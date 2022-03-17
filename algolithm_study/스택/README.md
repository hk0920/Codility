# 스택(FILO)
한쪽 끝에서만 원소를 넣거나 뺄 수 있는 구조 (ex-프링글스 통)

## 성질
> 1. 원소의 추가가 O(1)
> 2. 원소의 제거가 O(1)
> 3. 제일 상단의 원소 확인이 O(1)
> 4. 제일 상단이 아닌 나머지 원소들의 확인/변경이 원칙적으로 불가능

## 구현
> 배열을 이용하여 구현한다.
```javascript
	class Stack {
		constructor(){
			this.arr = [];
		}
		push(data){
			this.arr.push(data);
		}
		pop(){
			return this.arr.pop();
		}
		peek(){
			return this.arr[this.arr.length-1];
		}
	}

	const stack = new Stack();
	stack.push(1);	// 결과값 : arr => [1];
	stack.push(2);	// 결과값 : arr => [1, 2];
	stack.push(3);	// 결과값 : arr => [1, 2, 3];
	stack.pop();		// 결과값 : arr => [1, 2];
```