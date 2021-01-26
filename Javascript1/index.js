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
    question: " DB computer abbreviation usually means ?",
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
  }
];

let button = document.querySelector('.button');
let Question = document.querySelector('.question');
let option1 = document.querySelector('.option-1');
let option2 = document.querySelector('.option-2');
let option3 = document.querySelector('.option-3');

nextQuestion = () => {

  let number = Math.floor(Math.random()*questions.length);

  Question.textContent = questions[number].question;
  option1.textContent = questions[number].answers.a;
  option2.textContent = questions[number].answers.b;
  option3.textContent = questions[number].answers.c;

  console.log(number);
  console.log(questions[number].question);
  console.log(questions[number].answers.a);
  console.log(questions[number].answers.b);
  console.log(questions[number].answers.c);
  console.log(questions[number].correctAnswer);

};

button.addEventListener('click', nextQuestion());
