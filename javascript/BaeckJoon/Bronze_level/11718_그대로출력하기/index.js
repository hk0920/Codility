const fs = require("fs");
const inputData = fs.readFileSync("./example.txt").toString().trim().split("\n");

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