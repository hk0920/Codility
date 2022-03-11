const fs = require('fs');
const inputData = fs.readFileSync('javascript/BaeckJoon/Silver_level/3273_두 수의 합/example.txt').toString().split("\n");

function solution(N, arr, X){
	let result = 0;
	// 해결1 )  시간초과 : 시간복잡도 O(N²) 
	// for(let i=0; i<N; i++){
	// 	const restN = X - arr[i];
		
	// 	for(let j=0; j<i; j++){
	// 		if(Number(arr[j]) === restN){
	// 			result++;
	// 		}
	// 	}
	// }
	

	// 해결 2 ) 투 포인터 알고리즘 : 시간복잡도 : O(N)
	// 2-1. 문자열 배열을 map으로 숫자열 배열로 변경
	// 2-2. 시작점(start), 끝점(end)의 원소값의 합 비교
	// 2-3. 합이 X보다 같다면 카운트, start++ 한다.
	// 2-4. 합이 X보다 작거나 같으면 start++ 
	// 2-5. 합이 X보다 크면 end--
	let sum = 0;
	let start = 0;
	let end = N-1;

	while(start != end){
		sum = arr[start] + arr[end];

		if(sum === X){
			result++;
			start++;
		}else if(sum > X){
			end--;
		}else{
			start++;
		}
		// console.log("start:" + start + " end:" + end +  " sum:" + sum);
	}

	return result;
}

const testN = Number(inputData[0]);
const testArr = inputData[1].split(" ").map(i=>Number(i)).sort((a, b) => a-b);
// 	- 배열 정렬
//	sort(); => 오류 : ASCII 문자 순서대로 정렬되어 숫자크기대로 나오지 않음.
// 	sort(function(a,b){		=> 오름차순
//		return a-b;
// })
// 	sort(function(a,b){		=> 내림차순
//		return b-a;
// })
const testSum = Number(inputData[2]);
console.log(solution(testN, testArr, testSum));