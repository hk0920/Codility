const fs = require("fs");
const inputData = fs.readFileSync("./example2.txt").toString().trim().split(" ");

function solution(data){
  let result = [1, 1, 2, 2, 2, 8];

  for(let i=0; i<data.length; i++){
    result[i] = Number(result[i]) - Number(data[i]);
  }

  return result.join(" ");
}

console.log(solution(inputData));