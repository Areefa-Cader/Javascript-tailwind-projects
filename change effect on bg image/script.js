var imgBox = document.querySelector('.img-box');
var imgWrap = document.querySelector('.img-wrap');
var originalImage = document.getElementById('originalImage');

originalImage.style.width = imgBox.offsetWidth + "px";
console.log(originalImage.style.width);


var leftSpace = imgBox.offsetLeft;

console.log(leftSpace);


imgBox.onmousemove = function(e){
    console.log(e.pageX);
    
    var boxWidth = (e.pageX - leftSpace) + "px";
    console.log(boxWidth);
    
    
    imgWrap.style.width = boxWidth;
    console.log(imgWrap.style.width);
    
}