var eyeIcon = document.getElementById('eyeIcon');
var password = document.getElementById('password');
var inputBox = document.getElementById('inputBox');

eyeIcon.addEventListener('click', function(){
    if(password.type == 'password'){
       password.type = 'text';
       eyeIcon.classList.add('fa-solid', 'fa-eye','cursor-pointer','ml-[30px]', 'md:ml-[100px]','lg:ml-[100px]');
        
    }else{
        password.type = 'password';
        eyeIcon.classList.remove('fa-solid', 'fa-eye','cursor-pointer','ml-[30px]', 'md:ml-[100px]','lg:ml-[100px]');
        eyeIcon.classList.add('fa-solid', 'fa-eye-slash','cursor-pointer','ml-[30px]', 'md:ml-[100px]','lg:ml-[100px]');
    }
})