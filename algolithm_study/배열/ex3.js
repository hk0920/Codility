// 문제3.
// 알파벳 소문자로만 이루어진 단어 S가 주어진다. 각 알파벳이 단어에 몇 개가 포함되어 있는지 구하는 프로그램을 작성하시오.

function solution(word){
	const wordArr = word.split(""); 

	// 해결1. 시간복잡도 O(N²)
	// let result = "";
	// const aCode = "a".charCodeAt(0);
	// const zCode = "z".charCodeAt(0)+1;

	// for(let i=aCode; i<zCode; i++){
	// 	let cnt = 0;
	// 	for(let j=0; j<wordArr.length; j++){
	// 		if(i === wordArr[j].charCodeAt(0)){
	// 			cnt++;
	// 		}
	// 	}	
	// 	result += cnt + " ";
	// }

	// 해결2. 시간복잡도 O(N)
	const result = new Array(26).fill(0);
	for(let i=0; i<wordArr.length; i++){
		const idx = wordArr[i].charCodeAt(0) - 97;
		result[idx] += 1;
	}
	return result;
}


console.log(solution("baekjoon"));