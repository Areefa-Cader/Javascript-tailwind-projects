let speech = new SpeechSynthesisUtterance();
let voices = [];

let voiceSelect = document.getElementById('voiceOption');

var playBtn = document.getElementById('playBtn');

window.speechSynthesis.onvoiceschanged =()=>{
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];

    voices.forEach((voice,i)=> (voiceSelect.options[i] = new Option(voice.name, i)));

};
voiceSelect.addEventListener('change' , ()=>{
    speech.voice = voices[voiceSelect.value];
})


playBtn.addEventListener('click',()=>{
    var textArea = document.getElementById('textArea').value;
    speech.text = textArea;
    window.speechSynthesis.speak(speech);
})