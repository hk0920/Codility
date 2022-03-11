// 문제 4. 
// 주어진 길이 N의 number배열 arr에서 합이 100인 서로 다른 위치의 두 원소가 존재하면 1을, 존재하지 않으면 0을 반환하는 함수를 작성하라.
// arr의 각 수는 0 이상 100 이하이고 N은 1000 이하이다.

// 백준 10808_알파벳 개수 -> 시간복잡도 O(N)으로 변경해서 풀어보시오.
// javascript > BeackJoon > 10808_알파벳 개수 > index.js (참고- 시간복잡도 : O(N²))
function solution(arr, N){
	let result = 0;
	const numArr = new Array(100).fill(0);
	for(let i=0; i<N; i++){
		let restN = 100 - arr[i];
		if(numArr[restN] === 1){
			result = 1;
		}
		numArr[arr[i]]++;
	}

	return result;
}

console.log("result=>" + solution([1, 52, 48], 3));
console.log("result=>" + solution([50, 42], 2));
console.log("result=>" + solution([4, 13, 63, 87], 4));