// 문제1.
// 연결리스트의 insert, remove 함수를 구현하시오.
// insert 해결 순서>
// 1. 새로운 원소를 생성
// 2. 새 원소의 pre값에 삽입할 위치의 주소를 대입 
// 3. 새 원소의 nxt값을 대입 
// 4. 삽입할 위치의 nxt값과 삽입할 위치의 다음 원소의 pre값을 새 원소로 변경
// 5. unused 1증가

// remove 해결 순서>
// 1. 이전 위치의 nxt를 삭제할 위치의 nxt로 변경
// 2. 다음 위치의 pre를 삭제할 위치의 pre로 변경

class Node {
	constructor(data, next = null){
		this.data = data;
		this.next = next;
	}
}

class LinkedList {
	constructor(){
		this.head = null;
		this.size = 0;
	}

	insertFirst(data){
		this.head = new Node(data, this.head);
		this.size++;
	}

	insertLast(data){
		let node = new Node(data);
		let current;

		if(!this.head){
			this.head = node;
		}else{
			current = this.head;

			while(current.next){
				current = current.next;
			}

			current.next = node;
		}
		this.size++;
	}

	insertAt(data, idx){
		if(idx > 0 && idx > this.size){
			return;
		}

		if(idx === 0){
			this.head = new Node(data, this.head)
			this.size++;
			return;
		}

		const node = new Node(data);
		let current, previous;

		current = this.head;
		let count = 0;
		
		while(count < idx){
			previous = current;
			count++;
			current = current.next;
		}

		node.next = current;
		previous.next = node;

		this.size++;
	}

	getAt(idx){
		let current = this.head;
		let count = 0;

		while(current){
			if(count === idx){
				console.log(current.data);
			}
			count++;
			current = current.next;
		}
	}

	removeAt(idx){
		if(idx > 0 && idx > this.size){
			return;
		}

		let current = this.head;
		let previous;
		let count = 0;

		if(idx === 0){
			this.head = current.next;
		}else{
			while(count < idx){
				count++;
				previous = current;
				current = current.next;
			}
			previous.next = current.next;
		}

		this.size--;
	}

	clearList(){
		this.head = null;
		this.size = 0;
	}

	printListData(){
		let current = this.head;

		while(current){
			console.log(current.data);
			current = current.next;
		}
	}
}

const linkedList = new LinkedList();
linkedList.insertFirst(100);
linkedList.insertFirst(200);
linkedList.insertFirst(300);
linkedList.insertLast(400);
linkedList.insertAt(500, 1);
linkedList.removeAt(2);
linkedList.printListData();
linkedList.getAt(2);

console.log(linkedList)
// 참고 사이트
// https://velog.io/@kimkevin90/Javascript%EB%A5%BC-%EC%9D%B4%EC%9A%A9%ED%95%9C-Linked-List-%EA%B5%AC%ED%98%84

