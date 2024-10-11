var progress = document.getElementById('progress');
var song = document.getElementById('song');
var ctrlIcon = document.getElementById('ctrlIcon');

song.onloadedmetadata = function(){
    progress.max = song.duration;
    progress.value = song.currentTime;
}

ctrlIcon.addEventListener('click' , function(){
    if(ctrlIcon.classList.contains("fa-circle-pause")){
        song.pause();
        ctrlIcon.classList.remove('fa-circle-pause');
        ctrlIcon.classList.add('fa-circle-play');
    }else{
        song.play();
        ctrlIcon.classList.add('fa-circle-pause');
        ctrlIcon.classList.remove('fa-circle-play');
    }
})

if(song.play()){

    setInterval(()=>{
        progress.value = song.currentTime;
    },500)

}

progress.onchange = function(){
    song.play();
    song.currentTime = progress.value;
    ctrlIcon.classList.add('fa-circle-pause');
    ctrlIcon.classList.remove('fa-circle-play');
}