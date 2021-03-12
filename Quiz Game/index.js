let questions = [
  {
    question: "Who invented JavaScript?",
    answers: {
      a: "Douglas Crockford",
      b: "Sheryl Sandberg",
      c: "Brendan Eich"
    },
    correctAnswer: "c"
  },

  {
    question: "Which one of these is a JavaScript package manager?",
    answers: {
      a: "Node.js",
      b: "TypeScript",
      c: "npm"
    },
    correctAnswer: "c"
  },

  {
    question: "Which tool can you use to ensure code quality?",
    answers: {
      a: "Angular",
      b: "jQuery",
      c: "ESLint"
    },
    correctAnswer: "b"
  },

  {
    question: "The World Largest desert is ?",
    answers: {
      a: "Thar",
      b: "Sahara",
      c:"Sonoran"
    },
    correctAnswer: "b"
  },

  {
    question: "Country that has the highest in Barley Production ?",
    answers: {
      a: "China",
      b: "Russia",
      c:"France"
    },
    correctAnswer: "c"
  },

  {
    question: "The metal whose salts are sensitive to light is ?",
    answers: {
      a: "Zinc",
      b: "Silver",
      c:"Aluminium"
    },
    correctAnswer: "b"
  },

  {
    question: "Black soils are best suited for the cultivation of ?",
    answers: {
      a: "Cotton",
      b: "Rice",
      c:"Sugarcane"
    },
    correctAnswer: "a"
  },

  {
    question: "The gas used for making vegetables is ?",
    answers: {
      a: "Oxygen",
      b: "Carbon dioxide",
      c:"Hydrogen"
    },
    correctAnswer: "c"
  },

  {
    question: "Country that was called as Land of Rising Sun ?",
    answers: {
      a: "Japan",
      b: "Korea",
      c:"Taiwan"
    },
    correctAnswer: "a"
  },

  {
    question: "The hottest planet in the solar system ?",
    answers: {
      a: "Mercury",
      b: "Jupiter",
      c:"Venus"
    },
    correctAnswer: "c"
  },

  {
    question: "Who developed Yahoo ?",
    answers: {
      a: "Mark Zukerberg",
      b: "David Filo & Jerry Yang",
      c:"Bill Gates"
    },
    correctAnswer: "b"
  },

  {
    question: "DB computer abbreviation usually means ?",
    answers: {
      a: "Data Block",
      b: "Double Byte",
      c:"Database"
    },
    correctAnswer: "c"
  },

  {
    question: " Who is the founder of facebook ?",
    answers: {
      a: "Mark Zukerberg",
      b: "Jeff Bezos",
      c: "Bill Gates"
    },
    correctAnswer: "c"
  },

  {
    question: "Who is Donald Fuking trump ?",
    answers: {
      a: "British Cunt",
      b: "American Dickhead",
      c: "Russian Wanker"
    },
    correctAnswer: "b"
  }
];

let button = document.querySelector('.button');
let question = document.querySelector('.question');
let option1 = document.querySelector('.option-1');
let option2 = document.querySelector('.option-2');
let option3 = document.querySelector('.option-3');
let start = document.querySelector('.start_button');
let main = document.querySelector('.main');
let score = document.querySelector('.score');
let scoreNumber = document.querySelector('.score_number');
let scoreDigit = 0;
let number = 0;
let count = 0;
let correctAnswerr = questions[number].answers[questions[number].correctAnswer];

button.addEventListener('click', () => {
  number++
});

start.addEventListener('click',() =>{
   start.classList.add('remove');
   button.style.display = 'inline';
   main.style.display = 'inline';
   score.style.display ='inline';
   nextQuestion();
})

nextQuestion = () => {
  question.innerText = questions[number].question;
  option1.innerText = questions[number].answers.a;
  option2.innerText = questions[number].answers.b;
  option3.innerText= questions[number].answers.c;

  console.log('question = ' + questions[number].question);
  console.log('answer 1 = ' + questions[number].answers.a);
  console.log('answer 2 = ' + questions[number].answers.b);
  console.log('answer 3 = ' + questions[number].answers.c);
  console.log('correctAsnswer = ' + questions[number].answers[questions[number].correctAnswer]);
};

calculatorScore = () => {
  scoreDigit++
  return scoreDigit
}

button.addEventListener("click", nextQuestion);
button.addEventListener("click", () =>{
  option1.classList.remove('color1');
  option2.classList.remove('color1');
  option3.classList.remove('color1');
  option1.classList.remove('color2');
  option2.classList.remove('color2');
  option3.classList.remove('color2');
  score = 0;
});

option1.addEventListener('click', () => {
  if(option1.innerText == questions[number].answers[questions[number].correctAnswer]){
    option1.classList.add('color2');
    option2.classList.add('color1');
    option3.classList.add('color1');
    scoreNumber.innerText = calculatorScore();
    count++
    console.log(count);
  }else {
    option1.classList.add('color1')
  }
});

option2.addEventListener('click', () => {
  if(option2.innerText == questions[number].answers[questions[number].correctAnswer]){
    option2.classList.add('color2');
    option1.classList.add('color1');
    option3.classList.add('color1');
    scoreNumber.innerText = calculatorScore();
    count++
    console.log(count);
  }else {
    option2.classList.add('color1')
  }
});

option3.addEventListener('click', () => {
  if(option3.innerText == questions[number].answers[questions[number].correctAnswer]){
    option3.classList.add('color2');
    option2.classList.add('color1');
    option1.classList.add('color1');
    scoreNumber.innerText = calculatorScore();
    count++
    console.log(count);
  }else {
    option3.classList.add('color1')
  }
});










