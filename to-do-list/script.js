var inputBox = document.getElementById('inputBox');
var add = document.getElementById('add');
var listContainer = document.getElementById('listContainer')

add.addEventListener('click', function(){
    if(inputBox.value === ''){
        alert('You must write something');
    }else{
        var li = document.createElement('li');
        li.className = 'flex justify-between items-center border-b border-slate-200 py-3 px-2 border-l-4 border-l-transparent';
        var divBox = document.createElement('div');
        divBox.className = 'inline-flex items-center space-x-2 ml-[3px]';

        var divImage = document.createElement('img');
        divImage.className = 'w-5 h-5 hover:cursor-pointer';
        divImage.src = 'images/unchecked.png';

        divImage.addEventListener('click', function(){
            if(divImage.src.includes('images/unchecked.png')){
                divImage.className = 'w-7 h-7 hover:cursor-pointer'
                divImage.src = 'images/checked.png';
                inputTask.classList.add('line-through');
              
            }else if(divImage.src.includes('images/checked.png')){
                divImage.className = 'w-5 h-5 hover:cursor-pointer';
                divImage.src = 'images/unchecked.png';
                inputTask.classList.remove('line-through');
               
            }
            
           
        })

        var inputTask = document.createElement('div');
        inputTask.innerHTML = inputBox.value;


        divBox.appendChild(divImage);
        divBox.appendChild(inputTask);

        var deleteImage = document.createElement('img');
        deleteImage.className = 'w-6 h-6 text-slate-500 hover:color-gray hover:cursor-pointer';
        deleteImage.src = 'images/deleteicon.png';

        deleteImage.addEventListener('click', function(){
            li.remove();
            
        })

        li.appendChild(divBox);
        li.appendChild(deleteImage);

        // Finally, append the list item to the list container
        listContainer.appendChild(li);
       

    }
    inputBox.value = '';

});

