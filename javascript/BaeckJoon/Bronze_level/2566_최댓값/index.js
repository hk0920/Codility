const fs = require("fs");
const inputData = fs.readFileSync("./example.txt").toString().trim().split("\n");

function solution(data){
  let max = 0;
  let x = 0;
  let y = 0;

  for(let i=0; i<data.length; i++){
    const rowArr = data[i].split(" ");
    data[i] = rowArr;

    for(let j=0; j<rowArr.length; j++){
      if(Number(data[i][j]) > max){
        max = Number(data[i][j]);
        x = j;
        y = i;
      }
    }
  }

  console.log(max);
  console.log((y+1),(x+1));
}

console.log(solution(inputData))