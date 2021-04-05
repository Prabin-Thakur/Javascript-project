let numbers = document.querySelectorAll('.data-number');
let operators = document.querySelectorAll('.data-operation');
let allClear = document.querySelector('.data-allclear');
let equalButton = document.querySelector('.data-eqaul');
let deleteButton = document.querySelector('.data-delete');
let previousScreen = document.querySelector('.data-previous');
let currentScreen = document.querySelector('.data-current');

let previous;
let current;

clear = () => {
    currentScreen.innerText = '';
    previousScreen.innerText = '';
};

deletee = () => {
    currentScreen.innerText = currentScreen.innerText.slice(0,-1);
};

function hasNumbers(t){
    var regex = /\d/g;
    return regex.test(t);
};

append = number => {
    if(number == '.' && currentScreen.innerText.includes('.'))return;
    // if(number == '*' && currentScreen.innerText.includes('*'))return;
    // if(number == '+' && currentScreen.innerText.includes('+'))return;
    // if(number == '-' && currentScreen.innerText.includes('-'))return;
    // if(number == '÷' && currentScreen.innerText.includes('÷'))return;
    if(currentScreen.innerText.includes('*') == true && currentScreen.innerText.includes('-') && hasNumbers(currentScreen.innerText) == true)return;
    if(currentScreen.innerText.includes('÷') == true && currentScreen.innerText.includes('-') && hasNumbers(currentScreen.innerText) == true)return;
    currentScreen.innerText = currentScreen.innerText.toString() + number.toString();
};

operation = (operator) => {
    if(operator == '')return;
    if(currentScreen.innerText.includes('+') == false && currentScreen.innerText.includes('-') == false && currentScreen.innerText.includes('*') == false && currentScreen.innerText.includes('÷') == false){
        append(operator.innerText);
    }
    if( operator.innerText == '-' && currentScreen.innerText.includes('*') == true ){
        append(operator.innerText);
    }
    if( operator.innerText == '-' && currentScreen.innerText.includes('÷') == true ){
        append(operator.innerText);
    }   
};

compute = () => {
    previous
};

updateDisplay = () => {

};

numbers.forEach(number => {
    number.addEventListener('click', ()=>{
        console.log(number.innerText);
        append(number.innerText);
        previousScreen.innerText = '';
    });
});

operators.forEach(operator => {
    operator.addEventListener('click', ()=>{
        console.log(operator.innerText);
        operation(operator);
        previousScreen.innerText = '';
    });
});

allClear.addEventListener('click',clear);
deleteButton.addEventListener('click', ()=>{
    deletee();
    previousScreen.innerText = '';
});
equalButton.addEventListener('click',()=>{
    previousScreen.innerText = currentScreen.innerText;
    currentScreen.innerText = eval(currentScreen.innerText);
})

