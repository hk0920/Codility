const fs = require('fs');
const inputData = fs.readFileSync("./example.txt").toString().trim().split("\n");

function solution(data){
    const n = data[0].split(" ")[0];
    const m = data[0].split(" ")[1];
    let result = "";
    let arr = [];

    for(let i=0; i<n; i++) arr.push(i+1);

    for(let k=1; k<=m; k++){
        const i = data[k].split(" ")[0];
        const j = data[k].split(" ")[1];

        console.log("i, j =>", i, j)

        let cnt = 1;

        for(let start=i; start<=j; start++){
            let end = j-cnt;
            let endVal =  arr[end];
            let startVal =  arr[start-1];

            // console.log(j ,"-", cnt , "=", j-cnt )

            arr.splice(start, end, endVal);
            
            console.log(arr)
            cnt++;


            // console.log("start, end =>", start, end)
            
            // for(let end=j; end>i; end--){

            //     console.log("start, end =>", start, end)
            //     // const val1 = arr[idx-1];
            //     // const val2 = arr[end-1];
            //     // arr[idx-1] = val1;
            //     // arr[end-1] = val2;
            // }
        }
    }

    console.log(arr)
    return result;
}

console.log(solution(inputData))