const fs = require("fs");
const inputData = fs.readFileSync("./example.txt").toString().trim();

function solution(data){
  let result = "";
  const cnt = (2 * Number(data)) - 1;
  // let arr = [];
  // for(let i=0; i<cnt; i++){
  //   arr.push(i);
  // }

  let end = Math.floor(cnt/2);
  let start = Math.floor(cnt/2);
  for(let i=0; i<cnt; i++){
    for(let j=0; j<cnt; j++){
      if(j < (start) || j > (end-i)){
        result += " ";
      }else{
        result += "*";
      }
    }
    if(end <= cnt+2){
      end += 2;
    }
    if(start > cnt+1){
      start += 1;
    }else{
      start -= 1;
    }
    result += "\n";
  }

  return result;
}

console.log(solution(inputData));