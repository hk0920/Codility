# 배열
> 메모리 상에 원소를 연속하게 배치한 자료구조

## 배열의 성질
> **1. O(1)에 k번째 원소를 확인/변경 가능**   
> 
> **2. 추가적으로 소모되는 메모리의 양(-overhead)가 거의 없음**   
> 
> **3. Cache hit rate가 높음**   
> => 명령이나 자료를 찾기 위해서 캐시 메모리에 접근했을 때, 원하는 정보가 있을 수도/ 없을 수도 있다.   
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 만약 원하는 정보가 캐시 메모리에 기억되어 있을 때  적중(Hit)되었다고 하고, 기억되고 있지 않으면 실패했다고 한다.   
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 적중률은 캐시 기억장치가 있는 컴퓨터의 성능을 나타내는 척도로 이용된다.   
> 
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; **※ 적중률 = 적중횟수 / 총 접근 횟수**   
>    
> **4. 메모리 상에 연속한 구간을 잡아야해서 할당에 제약이 걸림**   

## 배열의 시간복잡도
> 임의의 위치에 있는 원소를 확인/변경 => **O(1)**   
> 원소를 끝에 추가 => **O(1)**   
> 마지막 원소를 제거 => **O(1)**   
> 임의의 위치에 있는 원소를 추가/제거 => **O(N)**   

## 배열 method
> 1. 배열 추가 
```javascript
	Array.push(); 		// 배열의 마지막 요소에 추가 => 시간복잡도: O(1)
	Array.unshift();	// 배열의 첫번째 요소에 추가 => 시간복잡도: O(N)
	Array.splice(); 	// 배열의 N번째 요소에 추가 => 시간복잡도: O(N) => splice(idx, 삭제갯수, [값1, 값2 ...])
```

> 2. 배열 삭제
```javascript
	Array.pop(); 		// 배열의 마지막 요소에 삭제 => 시간복잡도: O(1)
	Array.shift();		// 배열의 첫번째 요소에 삭제 => 시간복잡도: O(N)
	Array.splice();		// 배열의 N번째 요소에 삭제 => 시간복잡도: O(N) => splice(idx, 삭제갯수)
```

> 3. 배열 초기화
```javascript
	Array.fill();				// 방법1. fill(값, 시작idx, 끝idx);

	for(let i=0; i<Array.length; i++){ 	// 방법2. for문을 이용하여 값 초기화
		Array[i] = "값";
	}
```

> 4. 배열 정렬
```javascript
	// 오류 : ASCII 문자 순서대로 정렬되어 숫자크기대로 나오지 않음.
	sort(); 						

	// 오름차순
	sort(function(a,b){	
		return a-b;
	});

	// 내림차순
	sort(function(a,b){	
		return b-a;
	});
```

> 5. 문자열 배열 => 숫자 배열
```javascript
	Array.map(function(i){
		return Number(i);
	});
```