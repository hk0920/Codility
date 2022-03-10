// 문제 2. 
// 주어진 길이 N의 number배열 arr에서 합이 100인 서로 다른 위치의 두 원소가 존재하면 1을, 존재하지 않으면 0을 반환하는 함수를 작성하라.
// arr의 각 수는 0 이상 100 이하이고 N은 1000 이하이다.

function solution(arr, N){
	let result = 0;
	for(let i=0; i<N; i++){
		let sum = 0;
		for(let j=0; j<i; j++){ 	// 시간복잡도 : (N-1) + (N-2) + ... +3+2+1 = (N²-N)/2, O(N²)
			sum = arr[i] + arr[j];

			if(sum === 100){
				result = 1;
			}
		}
	}

	return result;
}

console.log("result=>" + solution([1, 52, 48], 3));
console.log("result=>" + solution([50, 42], 2));
console.log("result=>" + solution([4, 13, 63, 87], 4));