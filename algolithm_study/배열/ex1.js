// 문제 1.
// 주어진 배열에 N번째의 자리에 원소값을 추가하시요.
// 주어진 배열 : 2,4,6,13,-2,1,1,0,5,6
// 추가할 원소 : N:5 , 원소값:15

function solution(arr, N, Nval){
	// 해결 1) 시간복잡도 => O(1)
	// splice(idx, 삭제갯수, [값1, 값2 ...])
	// arr.splice(N,0, Nval);


	// 해결 2) 시간복잡도 => O(N)
	// 	2-1. arr.length를 늘리기.
	//  2-2. 배열의 끝 부터 값을 이동.
	//  2-3. 추가할 원소를 추가
	arr.length += 1;
	for(let i=arr.length; i>N; i--){
		arr[i] = arr[i-2];
	}
	arr[N]=Nval;

	return arr;
}

const testArr = [2,4,6,13,-2,1,1,0,5,6];
console.log(solution(testArr, 5, 15));
