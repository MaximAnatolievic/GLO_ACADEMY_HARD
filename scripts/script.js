'use strict'

function getModifiedString(incomeString){
if (typeof(incomeString) != 'string'){
  return alert("Введена не строка");
}
else{
let modifiedString = incomeString.trim();
if(modifiedString.length>30){
modifiedString = modifiedString.slice(0, 30) + "...";
}
return modifiedString;
}
}

let tryString = prompt("Введите строку");
let resultString = getModifiedString(tryString);
console.log(resultString);