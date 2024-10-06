const questions = [
    {
        question: "which is largest animal in the world?",
        answers:[
            {text : "Shark" , correct :false},
            {text : "Blue Whale" , correct :true},
            {text : "Elephant" , correct :false},
            {text : "Giraff", correct :false},
        ]
    },
    {
        question: "which is largest desert in the world?",
        answers:[
            {text : "Kalahari" , correct :false},
            {text : "Antartica", correct :false},
            {text : "Gobi" , correct :false},
            {text : "Sahara", correct :true},
        ]
    },
    {
        question: "which is the smallest continent in the world?",
        answers:[
            {text : "Australia" , correct :true},
            {text : "Asia" , correct :false},
            {text : "Artic" , correct :false},
            {text : "Africa", correct :false},
        ]
    },
]



const questionElement = document.getElementById('question');
const answerBtn = document.getElementById('answerBtn');
const nextBtn = document.getElementById('nextBtn');

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextBtn.innerHTML = 'Next';
    showQuestion();
}

function showQuestion(){
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + " . " + currentQuestion.question;

     answerBtn.innerHTML ='';
     
    currentQuestion.answers.forEach(answer =>{
        const button = document.createElement('button');
        button.classList.add('middle', 'none', 'center', 'text-left', 'mr-3', 'rounded-lg', 'border', 'border-blue-500', 'py-3','px-6', 'font-sans', 'text-xs', 'font-bold',  'text-black-500', 'transition-all',  'hover:bg-black', 'hover:text-white', 'focus:ring', 'focus:ring-white-200', 'disabled:pointer-events-none', 'disabled:opacity-50', 'disabled:shadow-none', 'w-full', 'mt-2','mb-2');
        button.innerHTML = answer.text;
        console.log(button.innerHTML);
        
        answerBtn.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
            console.log(button.dataset.correct);
            
        }
        button.addEventListener('click' , selectAnswer)
    });
}
function reset(){
    nextBtn.style.display = 'none';
    while(answerBtn.firstChild){
        answerBtn.removeChild(answerBtn.firstChild);
    }
}
function selectAnswer(e){
  const selectBtn = e.target;
  const isCorrect = selectBtn.dataset.correct === 'true';
  if(isCorrect){
    selectBtn.classList.add('bg-[#9AE0B7]','hover:bg-[#9AE0B7]','hover:text-black');
    score++;
  }else{
    selectBtn.classList.add('bg-[#FF9B90]', 'hover:bg-[#FF9B90]','hover:text-black');
  }
  Array.from(answerBtn.children).forEach(button =>{
    if(button.dataset.correct === 'true'){
    button.classList.add('bg-[#9AE0B7]','hover:bg-[#9AE0B7]','hover:text-black');
    }
    button.disabled = true;
  });
  nextBtn.style.display = 'block';
}
function showScore(){
    reset();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length} ! `;
    nextBtn.innerHTML = 'Play Again';
    nextBtn.style.display = 'block';
}

function handlenextBtn(){
    currentQuestionIndex++;
    if(currentQuestionIndex< questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextBtn.addEventListener('click', ()=>{
    if(currentQuestionIndex < questions.length){
        handlenextBtn();
    }else{
        startQuiz();
    }
})
startQuiz();