
day = 34

dayPlace = document.getElementById("day_place")

dayPlace.innerHTML="6"

alert('Javascript подключен')
console.log ('jkgkuvyjh')

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
