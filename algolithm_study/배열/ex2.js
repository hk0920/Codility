// 문제 2.
// 주어진 배열에 N번째의 자리의 원소값을 삭제하시요.
// 주어진 배열 : 2,4,6,13,-2,1,1,0,5,6
// 삭제할 원소값 위치 : N:2

function solution(arr, N){
	// 해결 1) 시간복잡도 => O(1)
	// splice(idx, 갯수)
	// arr.splice(N-1, 1);

	
	// 해결 2) 시간복잡도 => O(N)
	// 	2-1. 배열의 N부터 오른쪽으로 이동.
	//  2-2. arr.length를 줄이기.
	for(let i=N-1; i<arr.length; i++){
		arr[i] = arr[i+1];
	}
	arr.length -= 1;

	return arr;
}

const testArr = [2,4,6,13,-2,1,1,0,5,6];
console.log(solution(testArr, 2));
