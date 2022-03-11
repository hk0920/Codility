function solution(n){
	let sum = 0;
	let num1 = Math.floor(n/10);
	let num2 = n%10;
	sum = num1 + num2;

	if(sum < 10000){
		solution(sum);
	}
	console.log(num1, num2, sum);
}

solution(23);
