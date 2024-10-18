var nameError = document.getElementById('name-error');
var emailError = document.getElementById('email-error');
var numberError = document.getElementById('number-error');
var dobError = document.getElementById('dob-error');
var fileError = document.getElementById('file-error');
var submitError = document.getElementById('submit-error');



function validateName(){
    var name = document.getElementById('name').value;
    console.log(name);
    
    if(name.length == 0){
        nameError.classList.add('text-red-500', 'text-[13px]')
        nameError.innerHTML = `*Name is required`;
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.classList.add('text-red-500', 'text-[13px]')
        nameError.innerHTML = 'Write your fullname';
        return false;
        }
    
        nameError.innerHTML = '<i class="fa-solid fa-circle-check text-green-800"></i>';
        return true;
    
}

function validateEmail(){
    var email = document.getElementById('email').value;
    if(email.length == 0){
        emailError.innerHTML = '*Email is required';
        return false;
    }
    if(!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)){
        emailError.innerHTML = '*Please enter the valid email address'; 
        return false;
    }

    emailError.innerHTML = '<i class="fa-solid fa-circle-check text-green-800"></i>';
    return true
}

function validateNumber(){
    var number = document.getElementById('number').value;
    if(number.length == 0){
        numberError.innerHTML = '*Number is required';
        return false;
    }
    if(number.length !== 10){
        numberError.innerHTML = 'Number should be 10 digits';
        return false;
    }

    numberError.innerHTML ='<i class="fa-solid fa-circle-check text-green-800"></i>';
    return true;
}

function validateDate(){
    var date = document.getElementById('date').value;
    if(date.length == 0){
        dobError.innerHTML = '*DOB is required';
        return false;
    }

    dobError.innerHTML = '<i class="fa-solid fa-circle-check text-green-800"></i>';
    return true;
}

function validateFile(){
    var file = document.getElementById('file');
    if(file.files.length === 0){
        fileError.innerHTML = '*Please select a file';
        return false;
    }
    fileError.innerHTML = '<i class="fa-solid fa-circle-check text-green-800"></i>';

}

function submit(event){
    event.preventDefault();

    if(!validateName() || !validateNumber() || !validateEmail() || !validateDate() || !validateFile() ){
        submitError.innerHTML = '*Please fill the required field';
        return false
    }

    submitError.innerHTML = `<button class="bg-green-400 text-black"><i class="fa-solid fa-thumbs-up text-white"></i>Successfully Submitted!!!</button>`;
    return true;
}
