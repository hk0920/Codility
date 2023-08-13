const fs = require("fs");
const inputData = fs.readFileSync("./example.txt").toString().trim();

function solution(data){
  let result = "";
  const N = (2 * Number(data)) - 1;

  let diviceN = Math.floor(N/2);
  for(let i=0; i<diviceN; i++){
    let start = diviceN - i;
    let end = diviceN + i;

    for(let k=0;k<N; k++){
      if(k < start || k > end){
        result += " ";
      }else{
        result += "*";
      }
    }

    result += "\n";
    
    // console.log(diviceN, i, start, end)
  }

  for(let i=diviceN; i>-1; i--){
    let start = diviceN - i;
    let end = diviceN + i;

    for(let k=0;k<N; k++){
      if(k < start || k > end){
        result += " ";
      }else{
        result += "*";
      }
    }

    if(i != 0){
      result += "\n";
    }
    
    // console.log(diviceN, i, start, end)
  }
  

  return result;
}

console.log(solution(inputData));