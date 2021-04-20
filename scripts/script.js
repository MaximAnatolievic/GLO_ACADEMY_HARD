'use strict'

let week = [
  "Воскресенье",
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
];

let day = new Date().getDay();

console.log(day);

function getDays(){
  for(let i = 0; i<week.length; i++){
    if(i>=1&&i<=5){
    document.getElementById(i).innerHTML = week[i];
    }
    else{
      document.getElementById(i).innerHTML = "<i>" + week[i] +"</i>";
    }
  };
  if(day>=1&&day<=5){
  document.getElementById(day).innerHTML = "<b>" + week[day] + "</b>";
  }
  else{
    document.getElementById(day).innerHTML = "<b><i>" + week[day] + "</i></b>"
  }
}

