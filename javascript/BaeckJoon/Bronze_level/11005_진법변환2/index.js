const fs = require("fs");
const inputData = fs.readFileSync("./example.txt").toString().trim().split(" ");

function solution(data){
    let n = Number(data[0].trim());
    const b = Number(data[1].trim());
    let result = "";
    let temp = [];

    while(n > 0){
        let remain = Math.floor(n%b);
        temp.push(remain);
        n = Math.floor(n/b);
    }

    // console.log(temp)

    // 진법 계산시 나머지를 거꾸로 계산하기 때문에 temp 배열에 있는 값을 reverse() 해줘야한다.
    temp.reverse();

    for(let i=0; i<temp.length; i++){
        if(temp[i] >=10 && temp[i] <= 36){
            // 아스키코드를 문자로 변환 : String.fromCharCode()
            // 문자를 아스키코드로 변환 : String.charCodeAt()
            temp[i] = String.fromCharCode(temp[i]+55)
        }
    }
    // console.log(temp)

    result = temp.join("").trim();

    return result;
}
console.log(solution(inputData))