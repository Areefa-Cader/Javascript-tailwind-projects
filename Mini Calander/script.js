var date = document.getElementById('date');
var day = document.getElementById('day');
var month = document.getElementById('month');
var year = document.getElementById('year');

const today = new Date();
console.log(today);

var weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday','Sataurday','Sunday'];
var allMonths = ['January', 'February','March','April','May','June','July','August', 'September','October','November','December'];

date.innerHTML =(today.getDate()< 10 ? "0" : "") + today.getDate();
day.innerHTML = weekdays[today.getDay()];
month.innerHTML = allMonths [today.getMonth()];
year.innerHTML = today.getFullYear();
