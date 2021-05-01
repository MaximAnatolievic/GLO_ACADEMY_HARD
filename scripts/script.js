'use strict'
let
ourText = document.querySelector('h1'),
btn = document.querySelector('#start');

function get_random_color() 
{
let letters = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];
let color = "";
for (let i = 0; i < 6; i++ ) 
    {
    color += letters[Math.round(Math.random() * 15)];
    }
    ourText.textContent = "#" + color;
    document.body.style.backgroundColor = "#" + color;
}

btn.addEventListener('click', get_random_color);


let week = [
  "Воскресенье",
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
];
let monYer = [
  "января",
  "февраля",
  "марта",
  "апреля",
  "мая",
  "июня",
  "июля",
  "августа",
  "сентября",
  "октября",
  "ноября",
  "декабря",
]

function getDays(){
let date = new Date();
let day = date.getDay();
let dayNum = date.getDate();
let month = date.getMonth();
let year = date.getFullYear();
let hour = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();

let hourResult = function(){
  if(hour==1||hour==21){
    return "час";
  }
  else if(hour>=2&&hour<=4||hour>=22&&hour<=24){
  return "часа";
  }
  else{
    return "часов";
  }
}

let minutesResult = function(){
  if(minutes==1||minutes==21||minutes==31||minutes==41||minutes==51){
    return "минута";
  }
  else if(minutes>=2&&minutes<=4||minutes>=22&&minutes<=24||minutes>=32&&minutes<=34||minutes>=42&&minutes<=44||minutes>=52&&minutes<=54){
  return "минуты";
  }
  else{
    return "минут";
  }
}

let sekondResult = function(){
  if(seconds==1||seconds==21||seconds==31||seconds==41||seconds==51){
    return "секунда";
  }
  else if(seconds>=2&&seconds<=4||seconds>=22&&seconds<=24||seconds>=32&&seconds<=34||seconds>=42&&seconds<=44||seconds>=52&&seconds<=54){
  return "секунды";
  }
  else{
    return "секунд";
  }
}

function correctNum(num){
  if(num<10){
    num = "0" + num;
  }
  return num;
}

let resultString1 = `Сегодня ${week[day]}, ${dayNum} ${monYer[month]} ${year} года, ${hour} ${hourResult()} ${minutes} ${minutesResult()} ${seconds} ${sekondResult()}`;
let resultString2 = `${correctNum(dayNum)}.${correctNum(month)}.${year} - ${correctNum(hour)}:${correctNum(minutes)}:${correctNum(seconds)}`;

  document.getElementById('time1').innerHTML = resultString1;
  document.getElementById('time2').innerHTML = resultString2;
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

function getTimes(){
  setInterval(getDays, 100);
}


