const fs = require('fs');
const inputData = fs.readFileSync('javascript/BaeckJoon/11654_아스키코드/example.txt').toString();

console.log(inputData.charCodeAt(0));