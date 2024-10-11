var toastBox = document.getElementById('toastBox');
var successmsg = '<i class="fa-solid fa-circle-check icon-success" style="color: #398e75;"></i> Successfully Submitted!';
var errorMsg = '<i class="fa-solid fa-circle-xmark icon-error" style="color: #CB5A5A;"></i> Please fix the Error';
var invalidMsg = '<i class="fa-solid fa-circle-exclamation icon-invalid" style="color: #E4B15E;"></i> Invalid input, check again';


function showToast(msg){
    let toast = document.createElement('div');
    toast.classList.add('relative','w-[300px]', 'h-[60px]', 'bg-white', 'm-[15px_0]' , 'shadow-[0_0_10px_rgba(0,0,0,2)]', 'flex', 'items-center');
    toast.innerHTML = msg;
    toastBox.appendChild(toast);

    var icon = toast.querySelector('i');

    if(icon){

    if(msg.includes('success')){
        icon.classList.add('mr-[20px]','ml-[20px]' , 'text-2xl');
        toast.classList.add('bg-green', 'absolute', 'left-0','bottom-0', 'w-[100%]','h-[5px]');
    }

    else if(msg.includes('error')){
        icon.classList.add('mr-[20px]','ml-[20px]' , 'text-2xl');
        // toast.classList.add('bg-[#DC9191]');
    }

    else if(msg.includes('invalid')){
        icon.classList.add('mr-[20px]','ml-[20px]' , 'text-2xl');
        // toast.classList.add('bg-[#EDCB93]');
    }

    setTimeout(()=>{
        toast.remove();
    },6000)
}

}