const fs = require('fs');
const inputData = fs.readFileSync('javascript/BaeckJoon/10809_알파벳찾기/example.txt').toString().split("");

let result = "";
let aASC = "a".charCodeAt(0);
let zASC = "z".charCodeAt(0);

for(let i=aASC; i<zASC+1; i++){
	result += inputData.indexOf(String.fromCharCode(i)) + " ";
}

console.log(result);