'use strict'

let myArr = [];
for(let i=0; i<7; i++){
  myArr[i] = +prompt("Введите число")
}
for(let i=0; i<myArr.length; i++){
  if(myArr[i].toString().startsWith('2') || myArr[i].toString().startsWith('4')){
    console.log(myArr[i]);
  }
}



let n = +prompt("до какого числа выводить простые числа?");

for (let k = 2; k <= n; k++) {
  let check = [1, 2];
    for (let j = 2; j <= Math.sqrt(k); j++) {
    check[j] = k%j;
    }
  if (check.indexOf(0) == -1) {
    console.log(`Число ${k}. Имеет делители только 1 и ${k}`);
  } 

}