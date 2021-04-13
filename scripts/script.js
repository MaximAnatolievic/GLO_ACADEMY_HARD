let num = 266219;
let digits = num.toString().split('');
let realDigits = digits.map(Number)
let summary = 1;
for(i=0; i<realDigits.length;i++){
    summary *= realDigits[i];
}
console.log(summary);
sumpow = summary**3;
console.log(sumpow.toString().substring(0, 2));