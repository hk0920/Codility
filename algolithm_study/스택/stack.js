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
stack.push(1);	// arr => [1];
stack.push(2);	// arr => [1, 2];
stack.push(3);	// arr => [1, 2, 3];
stack.pop();		// arr => [1, 2];
console.log(stack)