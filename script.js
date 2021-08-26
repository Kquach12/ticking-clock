function getSecondsSinceStartOfDay() {
    return new Date().getSeconds() + 
      new Date().getMinutes() * 60 + 
      new Date().getHours() * 3600;
}

let rotateSeconds = 180
let rotateMinutes = 180
let rotateHour = 180

setInterval( function() {
    var time = getSecondsSinceStartOfDay();
    console.log(time);
      // your code here
    document.querySelector("#seconds").style.transform = `rotate(${rotateSeconds += 6}deg)`
    document.querySelector("#minutes").style.transform = `rotate(${rotateMinutes += .1}deg)`
    document.querySelector("#hour").style.transform = `rotate(${rotateHour += .00833}deg)`
}, 1000);

