var productImg = document.getElementById('productImg');
var pic1 = document.getElementById('pic1');
var pic2 = document.getElementById('pic2');
var pic3 = document.getElementById('pic3');

pic1.addEventListener('click',()=>{
    productImg.src = 'images/pic1.png';
    productImg.className = `w-100% block ml-[40px] md:ml-[40px] lg:ml-[45px] pt-[70px] hover:scale-110`;
    pic2.classList.add('bg-black');
    pic3.classList.add('bg-black');
    pic1.classList.remove('bg-black');
})


pic2.addEventListener('click',()=>{
    productImg.src = 'images/pic2.png';
    productImg.className = `w-100% block ml-[40px] md:ml-[40px] lg:ml-[45px] pt-[70px] hover:scale-110`;
    pic1.classList.add('bg-black');
    pic3.classList.add('bg-black');
    pic2.classList.remove('bg-black');
})

pic3.addEventListener('click',()=>{
    productImg.src = 'images/pic3.png';
    productImg.className = `w-50% block ml-[40px] md:ml-[40px] lg:ml-[45px] pt-[70px] hover:scale-110`;
    pic1.classList.add('bg-black');
    pic2.classList.add('bg-black');
    pic3.classList.remove('bg-black');
})