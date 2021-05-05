
'use strict';

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
  let greet = ()=>{
      let str = '';
      if(hour>=5&&hour<9){
          str = 'Длброе утро.';
      }
      else if(hour>=9&&hour<17){
          str = 'Добрый день.';
      }
      else if(hour>=17&&hour<22){
        str = 'Добрый вечер.';
    } else {
        str = 'Доброй ночи.';
    }
    return str;
  }

  let tillNewYear = () => {
        let nowDay = new Date(),
        thisYear = nowDay.getTime(),
        nextYear = new Date((nowDay.getFullYear() + 1), 0, 1).getTime(),
        difference = Math.floor((nextYear - thisYear) / 1000 / 60 /60 / 24);
        return difference;
  }


  document.getElementById('time1').textContent = greet();
  document.getElementById('time2').textContent = `Сегодня: ${week[day]}`;
  document.getElementById('time3').textContent = `Текущее время: ${correctNum(hour)}:${correctNum(minutes)}:${correctNum(seconds)}`;
  document.getElementById('time4').textContent = `До нового года остаолось ${tillNewYear()} дней`;

  
  
  /*
  let resultString2 = `${correctNum(dayNum)}.${correctNum(month)}.${year} - ${correctNum(hour)}:${correctNum(minutes)}:${correctNum(seconds)}`;
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
    */
}
 
  function getTimes(){
    setInterval(getDays, 100);
  }
  

  document.addEventListener('DOMContentLoaded', getTimes)