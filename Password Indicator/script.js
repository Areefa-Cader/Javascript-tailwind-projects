var message = document.getElementById('message');
var password = document.getElementById('password');
var strength = document.getElementById('strength');

password.addEventListener('input', ()=>{
    if(password.value.length > 0){
        message.style.display = 'block';
    }else{
        message.style.display = 'none';
        password.classList.add(`translate-y-[-5%]`)
    }

    if(password.value.length <= 4){
        strength.innerHTML = 'Weak';
        password.style.borderColor = 'red';
        message.style.color = 'red';
        password.classList.add(`translate-y-[15%]`)

    }else if(password.value.length >=4 && password.value.length <= 8){
        strength.innerHTML = 'Medium';
        password.style.borderColor = 'yellow';
        message.style.color = 'yellow';
        password.classList.add(`translate-y-[10%]`)

    }else if(password.value.length >=8 && password.value.length <= 12){
        strength.innerHTML = 'Strong';
        password.style.borderColor = 'green';
        message.style.color = 'green';
        password.classList.add(`translate-y-[10%]`)
    }
})