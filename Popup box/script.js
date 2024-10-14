var open = document.getElementById('open');
var close = document.getElementById('close');
var popup = document.getElementById('popup');

open.addEventListener('click', function(){
    popup.style.display = 'block';
   
})

close.addEventListener('click' , function(){
    popup.style.display = 'none';
})