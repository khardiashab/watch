function time(){
    let date  = new Date();
console.log(date)
let hour = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds()

let secRatio = sec / 60
let minRatio = (secRatio + min)/ 60
let hourRatio = (minRatio  + hour) / 12

let secRotation = secRatio * 360 + "deg"
let minRotation = minRatio * 360 + "deg"
let hourRotation = hourRatio * 360 + "deg"
document.documentElement.style.setProperty("--rotate-sec", secRotation)
document.documentElement.style.setProperty("--rotate-min", minRotation)
document.documentElement.style.setProperty("--rotate-hour", hourRotation)


}
time()
setInterval(time, 1000)