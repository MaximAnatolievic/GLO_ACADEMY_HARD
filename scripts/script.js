//Первое задание
let lang = prompt('Введите ru или en').trim().toLowerCase();

let daysru = [
    'Воскресенье',
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота'
  ];
  let daysen = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ];
//через if
if(lang==='ru'){
    console.log(daysru);
}
else if(lang==='en'){
    console.log(daysen);
}
else{
    console.log('You typed wrong');
}
//через switch
switch(lang){
    case "ru":
        console.log(daysru);
        break;
    case "en":
        console.log(daysen);
        break;
    default:
        console.log('You typed wrong');
}
  //через многомерный массив  
let lang_days = [];
lang_days['ru'] = [
    'Воскресенье',
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота'
  ];
lang_days['en'] = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ];

console.log(lang_days[lang]);

//2е задание
let namePerson = prompt('Введите имя').trim()
console.log(namePerson == "Артем"?"Директор":namePerson=="Максим"?"преподпватель":"студент");