var imageBox = document.getElementById('image-box');
var qrImage = document.getElementById('qrImg');
var qrText = document.getElementById('qrText');

function qrGenerate(){
    if(qrText.value.length > 0 ){
        qrImage.src =  "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
        imageBox.classList.add('max-h-[160px]' , 'm-[10px_auto]' , 'border-1' , 'border-[#d1d1d1]');
    }else{
        return alert('please fill required field')
    }
   
}