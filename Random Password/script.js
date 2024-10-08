var passwordField = document.getElementById('passwordField');
var generatePassword = document.getElementById('generatePassword');
var copyPassword = document.getElementById('copyPassword');
var length = 8;
var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lowercase = 'abcdefghijklmnopqrstuvwxyz';
var number = '0123456789';
var symbol = '@#$%^&*';

var allchars = uppercase + lowercase + number + symbol;

generatePassword.addEventListener('click', function(){
    var password = '';

    password += uppercase[Math.floor(Math.random() * uppercase.length)];
    password += lowercase[Math.floor(Math.random() * lowercase.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];
    password += number[Math.floor(Math.random() * number.length)];

    while(length > password.length){
        password += allchars[Math.floor(Math.random() * allchars.length)];
    }
    passwordField.value = password;
    console.log(passwordField.value);
    
})

copyPassword.addEventListener('click', function(){
    passwordField.select();
    document.execCommand('copy');
})
