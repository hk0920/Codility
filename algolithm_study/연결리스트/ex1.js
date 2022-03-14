// 문제1.
// 연결리스트의 insert 함수를 구현하시오.

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

	insertFisrt(data){
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
}

// 참고 사이트
// https://velog.io/@kimkevin90/Javascript%EB%A5%BC-%EC%9D%B4%EC%9A%A9%ED%95%9C-Linked-List-%EA%B5%AC%ED%98%84

