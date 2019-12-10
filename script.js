
day = 34

let dayPlace = document.getElementById("day_place")
let dayDay = document.getElementById("day_day")
alert('Javascript подключен')


function daysdoNY () {
     year = '2020'
     month = 01
     day = 01
    todayData = new Date();
    nextDate=new Date([year,month,day].join(',')); 
    msPerDay = 24*60*60*1000; 
    nextDate1 = Math.floor((nextDate.getTime()-todayData.getTime())/msPerDay); 
    console.log(nextDate1)

   return nextDate1
}

   dayPlace.innerHTML=daysdoNY()

 if (nextDate1=21){
   dayDay.innerHTML='день'
    console.log('день')
 }