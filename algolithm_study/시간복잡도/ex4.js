// 문제 4. 
// N이하의 수 중에서 가장 큰 2의 거듭제곱수를 반환하는 함수를 작성하라. N은 10억 이하의 자연수이다.


// 시간복잡도 : O(lgN)
// N이 2ⁿ이상 2ⁿ＋¹미만일 경우 while문 안에서 doubleN은 최대 n번만 2배로 커지기때문에 시간복잡도는 O(n)이다. 
// n은 로그의 정의에 입각해서 생각해보면 n은 lgN이기때문에 시간복잡도는 O(lgN)이다.
function solution(N){
	let doubleN = 1;
	while(doubleN*2 <= N){	
		doubleN *= 2;
	}
	return doubleN;
}

console.log("result =>" + solution(5));
console.log("result =>" + solution(97615282));
console.log("result =>" + solution(1024));