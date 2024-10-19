let scrollContainer = document.querySelector('.gallery');
var backBtn = document.getElementById('backBtn');
var nextBtn = document.getElementById('nextBtn');

scrollContainer.addEventListener('wheel', (evt)=>{
    evt.defaultPrevented();
    scrollContainer.scrollLeft += evt.deltaY;
    scrollContainer.style.scrollBehavior = 'auto';
})

nextBtn.addEventListener('click' , ()=>{
    scrollContainer.style.scrollBehavior = 'smooth';
    scrollContainer.scrollLeft += 900;
})

backBtn.addEventListener('click' , ()=>{
    scrollContainer.style.scrollBehavior = 'smooth';
    scrollContainer.scrollLeft -= 900;
})