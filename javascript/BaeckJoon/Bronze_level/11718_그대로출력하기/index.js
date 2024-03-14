const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : `${__dirname}/example.txt`;
const inputData = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(data){
  let result = "";
  for(let i=0; i<data.length; i++){
    result += data[i].toString().trim();
    if(i < data.length-1){
      result += "\n";
    }
  }
  return result;
}

console.log(solution(inputData))