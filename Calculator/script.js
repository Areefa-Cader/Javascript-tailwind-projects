var display = document.getElementById('display');
var deleteData = document.getElementById('delete');
var equal = document.getElementById('equal');

deleteData.addEventListener('click' , function(){
    display.value = display.value.toString().slice(0 , -1);
})

equal.addEventListener('click' , function(){
    display.value = eval(display.value);
})