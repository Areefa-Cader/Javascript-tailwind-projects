var createNote = document.getElementById('createNote');
var noteBox = document.getElementById('noteBox');
var notes = document.querySelectorAll('.input-box');

// function showData(){
//     noteBox.innerHTML = localStorage.getItem('notes');
// }
// showData();

// function updateData(){
//     localStorage.setItem('notes', noteBox.innerHTML);
// }

createNote.addEventListener('click', function(){
    var field = document.createElement('p');
    field.setAttribute('contenteditable','true');
    field.classList.add('relative','mt-2','h-[100%]', 'bg-white' , 'text-[#083B6C]' , 'p-[10px]' , 'outline-0' , 'rounded');

    var deleteIcon = document.createElement('img');
    deleteIcon.classList.add('absolute' ,'w-[20px]','bottom-4', 'right-4', 'cursor-pointer');
    deleteIcon.src = 'images/delete.png';
    
    // var deleteIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    // deleteIcon.setAttribute('viewBox' , '0 0 24 24');
    // deleteIcon.setAttribute('fill' , 'currentColor');
    // deleteIcon.classList.add('size-6' , 'absolute' , 'bottom-4' , 'right-4' , 'cursor-pointer' , 'hover:text-red-500');

    // var path = document.createElementNS('http://www.w3.org/2000/svg' , 'path');
    // path.setAttribute('fill-rule' , 'evenodd');
    // path.setAttribute('d' ,'M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z');
    // path.setAttribute('clip-rule' , 'evenodd');

    field.appendChild(deleteIcon);
    noteBox.appendChild(field);

})

noteBox.addEventListener('click', function(e){
    if(e.target.tagName === 'IMG'){
        e.target.parentElement.remove();
       
    // }else if(e.target.tagName === 'P'){
    //     notes = document.querySelectorAll('.input-box');
    //     notes.forEach(nt =>{
    //         nt.onkeupn= function(){
    //             updateData();
    //         }
    //     })
    } 
})

document.addEventListener('keydown' , event =>{
    if(event.key === 'Enter'){
        document.execCommand('insertLineBreak');
        event.preventDefault();
    }
})