let question = document.querySelector('.question');
let options = document.querySelector('.options');
let buttton = document.querySelector('button');

let Questions = [
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
        correctAnswer: "d"
      }
]


let questionName = Questions[Math.floor(Math.random()* Questions.length)].question

buttton.addEventListener('click',() => {
  document.querySelector('.question').textContent = questionName
});

addEventListener