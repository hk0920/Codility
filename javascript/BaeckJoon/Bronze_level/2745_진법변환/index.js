const fs = require("fs");
const inputData = fs.readFileSync("./example.txt").toString().trim().split(" ");

function solution(data){
    const n = data[0].trim().split("");
    const b = Number(data[1].trim());
    let result = 0;
    let temp = [];

    console.log(n)

    for(let i=0; i<n.length; i++){
        // console.log(n[i].charCodeAt());
        let remain = Number(n[i].charCodeAt()) - 55;
        temp.push(Math.floor(b%remain));
        // Math.floor(remain%b)
        for(let j=0; j<temp.length; j++){
            console.log("j=>", j)
            result += b * b;
        }
        // result += b*b;
    }

    // console.log(temp)

    return result;
}

console.log(solution(inputData));