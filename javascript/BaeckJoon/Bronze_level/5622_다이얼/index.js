const fs = require("fs");
const inputData = fs.readFileSync("./example.txt").toString().trim();

function solution(data){
    let result = 0;
    const phonArr = ["ABC", "DEF", "GHI", "JKL", "MNO", "PQRS", "TUV", "WXYZ", "empty"];
    const numberArr = data.split("");
    // console.log(numberArr)

    for(let j=0; j<numberArr.length; j++){
        for(let i=0; i<phonArr.length; i++){
            if(phonArr[i].match(numberArr[j]) !== null){
                // console.log(phonArr[i].match(numberArr[j]), i);

                result += (i+3);
            }
        }
    }

    return result;
}

console.log(solution(inputData));