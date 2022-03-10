// 문제 1. 
// N 이하의 자연수 중에서 3의 배수이거나 5의 배수인 수를 모두 합한 값을 반환하는 함수를 작성하라. N은 10만 이하의 자연수이다.

function solution(num){
	let sum = 0;
	for(let i=1; i<num+1; i++){
		if(i%3 === 0 || i%5 === 0){	// 시간복잡도 O(N)
			sum += i;	
		}
	}

	return sum;
}

console.log(solution(16));
console.log(solution(34567));
console.log(solution(27639));