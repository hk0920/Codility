const fs = require('fs');
const inputData = fs.readFileSync("./example2.txt").toString().trim().split("\n");

function solution(data){
    let result = "";
    const arr = [];
    for(let i=0; i<30; i++) arr.push(i+1);

    // console.log(data.map(Number))
    const dataArr = data.map(Number);

    // console.log(dataArr.length)
    for(let i=0; i<dataArr.length; i++){
        for(let j=0; j<i; j++){
            if(Number(dataArr[i]) < Number(dataArr[j])){
                const iValue = dataArr[i]
                const jValue = dataArr[j]
                dataArr[i] = jValue;
                dataArr[j] = iValue;
            }
        }
    }

    for(let i=0; i<arr.length; i++){
        if(arr[i] !== dataArr[i]){
            dataArr.splice(i, 0, "empty");
            result += arr[i]+"\n";
        }
    }

    // console.log(dataArr)

    return result;
}

console.log(solution(inputData))