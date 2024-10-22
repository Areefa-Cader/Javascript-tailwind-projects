var openMenu = document.getElementById('openMenu');
var list = document.getElementById('list');
var select = document.getElementById('select');
var options = document.querySelectorAll('.option');

openMenu.addEventListener('click', function(){
    
        list.style.display = 'block';
        openMenu.classList.add('transform', 'rotate-180');  
})

for(option of options){
    option.onclick = function(){
        select.innerHTML = this.textContent;
        list.style.display = 'none';
        openMenu.classList.remove('rotate-180');  
    }
}