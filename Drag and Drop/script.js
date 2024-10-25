var lists = document.getElementsByClassName('list');
var rightBox = document.getElementsByClassName('right')[0];
var leftBox = document.getElementsByClassName('left')[0];

for(let list of lists){
  list.addEventListener('dragstart', function(e){
        let selected = e.target;

        rightBox.addEventListener('dragover', function(e){
            e.preventDefault();
        });

        rightBox.addEventListener('drop', function(e){
            rightBox.appendChild(selected);
            selected = null;
        })

        leftBox.addEventListener('dragover', function(e){
            e.preventDefault();
        });

        leftBox.addEventListener('drop', function(e){
            leftBox.appendChild(selected);
            selected = null;
        })
  })
}