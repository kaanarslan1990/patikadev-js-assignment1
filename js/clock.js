
let nameYour = prompt("Adınızı giriniz")
let myName = document.querySelector("#myName")
myName.innerHTML = `${nameYour}`

const weekday = ["Pazar","MPazartesi","Salı","Çarşamba","TPerşembe","Cuma","Cumartesi"];

function time() {
let date = new Date();
let h = date.getHours();
h = h < 10 ? "0" + h : h;
let m = date.getMinutes();
m = m < 10 ? "0" + m : m;
let s = date.getSeconds();
s = s < 10 ? "0" + s : s;
let d = weekday[date.getDay()];
let now = h +":" + m +":" + s+ " " + d
document.querySelector("#myClock").innerHTML = `${now}`;
}

setInterval(time, 1000);