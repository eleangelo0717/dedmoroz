
day = 34

dayPlace = document.getElementById("day_place")

dayPlace.innerHTML="6"

alert('Javascript подключен')
console.log ('jkgkuvyjh')

function daysdoNY () {
    todayData = new Date()
    todayDay = todayData.getDate()
    currentDate = new Date(2019, 12, 31)
    currentDay = currentDate.getDate()
    dateDifference = currentDate.getDate() - todayData.getDate()
    console.log(dateDifference)
    return dateDifference
}

dayPlace.innerHTML=daysdoNY()
