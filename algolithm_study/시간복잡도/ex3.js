// 문제3 . 
// N이 제곱수이면 1을 반환하고 제곱수가 아니면 0을 반환하는 함수를 작성하라. N은 10억 이하의 자연수이다.

function solution(num){
	// 해결 1 ) 시간복잡도 : O(√N)
	for(let i=0; i*i<=num; i++){
		if(i*i === num){
			return 1;
		}
	}
	return 0;

	// 해결 2 ) Math.sqrt()메소드는 제곱수를 구하기 좋은 메소드지만 sqrt자체 연산이 느려서 시간복잡도가 더 느리다.
	// let N = Math.sqrt(num);
	// if(Number.isInteger(N)){
	// 	return 1;
	// }else{
	// 	return 0;
	// }
}

console.log(solution(9));
console.log(solution(693953651));
console.log(solution(756580036));