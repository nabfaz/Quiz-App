// Copyright 2023 lovel
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//     http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

const questions = [
    {
      question: "What is the capital of France?",
      answers : [
        {text:"Berlin", correct:false}, 
        {text:"Madrid", correct:false}, 
        {text:"Paris", correct:true}, 
        {text:"Rome",correct:false},
        ]
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers:
                [
          { text: "Mars", correct: true },
          { text: "Jupiter", correct: false },
          { text: "Venus", correct: false },
          { text: "Saturn", correct: false },
        ]
      },
      {
        question: "What is the largest mammal in the world?",
        answers: [
          { text: "Elephant", correct: false },
          { text: "Blue Whale", correct: true },
          { text: "Giraffe", correct: false },
          { text: "Hippopotamus", correct: false },
        ]
      },
      {
        question: "In which year did World War II end?",
        answers: [
          { text: "1943", correct: false },
          { text: "1945", correct: true },
          { text: "1947", correct: false },
          { text: "1950", correct: false },
        ]
      },
      {
        question: "Who wrote 'Romeo and Juliet'?",
        answers: [
          { text: "Charles Dickens", correct: false },
          { text: "William Shakespeare", correct: true },
          { text: "Jane Austen", correct: false },
          { text: "Mark Twain", correct: false },
        ]
      },
      {
        question: "What is the largest ocean on Earth?",
        answers: [
          { text: "Atlantic Ocean", correct: false },
          { text: "Indian Ocean", correct: false },
          { text: "Southern Ocean", correct: false },
          { text: "Pacific Ocean", correct: true },
        ]
      },
      {
        question: "Which element has the chemical symbol 'O'?",
        answers: [
          { text: "Oxygen", correct: true },
          { text: "Gold", correct: false },
          { text: "Iron", correct: false },
          { text: "Silver", correct: false },
        ]
      },
      {
        question: "Who painted the Mona Lisa?",
        answers: [
          { text: "Leonardo da Vinci", correct: true },
          { text: "Vincent van Gogh", correct: false },
          { text: "Pablo Picasso", correct: false },
          { text: "Claude Monet", correct: false },
        ]
      },
      {
        question: "What is the capital of Japan?",
        answers: [
          { text: "Beijing", correct: false },
          { text: "Seoul", correct: false },
          { text: "Tokyo", correct: true },
          { text: "Bangkok", correct: false },
        ]
      },
      {
        question: "What is the main ingredient in guacamole?",
        answers: [
          { text: "Tomato", correct: false },
          { text: "Avocado", correct: true },
          { text: "Onion", correct: false },
          { text: "Cilantro", correct: false },
        ]
      }];
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML="Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = "true";
    });
        nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scorder ${score} out of $ {question.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex <questions.length){
        showQuestion();
    }else{
        showScore();
    }

}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});

startQuiz(); 