

let dayNum = document.getElementById("day_num")
let dayDay = document.getElementById("day_day")
let dayPlace = document.getElementById("day_place")


function daysdoNY() {
   year = '2020'
   month = '01'
   day = '11'
   todayData = new Date()
   nextDate = new Date([year, month, day].join(','))
   msPerDay = 24 * 60 * 60 * 1000
   nextDate1 = Math.floor((nextDate.getTime() - todayData.getTime()) / msPerDay)
   console.log(nextDate1)
   return nextDate1
}

let days = daysdoNY()
dayNum.innerHTML = days

let n = days % 10
let n1 = days % 100
let ickl = n1>10 && n1<15

if (n == 1 && !ickl) {
   dayDay.innerHTML = 'день'
   dayPlace.innerHTML = 'остался'
   console.log(n)
}

if (n > 1 && n < 5 && !ickl) {
   dayDay.innerHTML = 'дня'
   console.log(n)
}


/*let a = nextDate1
 switch (a) {
    case 21:
     console.log(nextDate1 ')
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

 }*/