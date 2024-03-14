# 백준 가이드
백준 코딩테스트 사이트(https://www.acmicpc.net/)에서 node.js로 테스트 볼 때 잊지 않으려고 정리 해둔 가이드

### 세팅
> * **1. Node.js 다운로드**   
> 다운로드 사이트 : https://nodejs.org/
>
> * **2. Vscode 세팅**   
> -<span style="color:blue;">Code Runner</span> 확장 플러그인 다운로드  
> -실행 단축키 (윈도우): ctrl + alt + n    
> -실행 단축키 (맥북): control + option + n 
      
### 백준 문제의 예제 입력받기
두가지 방법이 있는데 문제마다 fs모듈을 사용했을때 '런타임 에러'가 나올 수 있다.
>
> * **fs 모듈**   
> 설치 : npm install fs

```javascript
	const fs = require('fs');
	const inputData = fs.readFileSync(0, "UTF-8").toString().split(" ");   

	// 백준 한줄    
	const inputData = fs.readFileSync('dev/stdin').toString().split('');    

	// 백준 여러줄    
	const inputData = fs.readFileSync('dev/stdin').toString().split('\n');     

	// vscode 테스트 시
	const inputData2 = fs.readFileSync('경로').toString().split('\n');   

	// vscode 테스트 시 (2024년) 
	const filePath = process.platform === "linux" ? "/dev/stdin" : `${__dirname}/경로 파일`;
	const inputData = fs.readFileSync(filePath).toString().trim().split("\n");

	//logic
```

> * **readline 모듈**
```javascript
	const readline = require('readline');
	const rl = readline.createInterface({
		input: process.stdin,
		output : process.stdout
	});   

	let input = [];
	rl.on("line", function(line){
		input.push(parseInt(line));
	}).on("close", function(){
		const A = input[0];
		const B = input[1];

		//logic
	});
```
