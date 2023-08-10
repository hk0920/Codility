const fs = require('fs');
const inputData = fs.readFileSync("./example.txt").toString().trim().split("\n");

function solution(data){
    const n = data[0].split(" ")[0];
    const m = data[0].split(" ")[1];
    let result = "";
    let arr = [];

    for(let i=0; i<n; i++) arr.push(i+1);

    for(let k=1; k<=m; k++){
        const i = Number(data[k].split(" ")[0]);
        const j = Number(data[k].split(" ")[1]);

        // console.log("i, j =>", i, j)
        let arr2 = [];

        for(let q=i; q<=j; q++){
            arr2.push(arr[q-1])
        }
        arr2.reverse();
        
        let cnt = 0;
        for(let q=i; q<=j; q++){
            arr[q-1] = arr2[cnt];
            cnt++;
        }
    }

    // console.log(arr)
    result = arr.join(" ");
    return result;
}

console.log(solution(inputData))