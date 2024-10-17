var changeModeDark = document.getElementById('changeModeDark');
var changeModeLight = document.getElementById('changeModeLight');
var darkMode = document.getElementById('darkMode');
var lightMode = document.getElementById('lightMode');



changeModeDark.addEventListener('click' , function(){
        darkMode.classList.remove('hidden');
        lightMode.classList.add ('hidden');
        console.log(darkMode.classList.contains('hidden'));
    
    
})

changeModeLight.addEventListener('click', function(){
   darkMode.classList.add('hidden');
   lightMode.classList.remove('hidden');
})