
day = 34

let dayNum = document.getElementById("day_num")
let dayDay = document.getElementById("day_day")
let dayPlace = document.getElementById("day_place")
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

   dayNum.innerHTML=daysdoNY()

 /*if (nextDate1=21){
   dayDay.innerHTML='день'
    console.log('день')
 }*/
 
 let a = nextDate1
  switch (a) {
     case 21:
      console.log(nextDate1) 
      dayDay.innerHTML='день'
      dayPlace.innerHTML = 'остался'
      break
      case 22:
      console.log(nextDate1 ) 
      dayDay.innerHTML='дня'
      break
      case 25:
      console.log(nextDate1) 
      dayDay.innerHTML='дней'
      break
   default:
   console.log(nextDate1)
   dayDay.innerHTML='/////'

  }