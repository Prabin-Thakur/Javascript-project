let bill = document.querySelector('.bill_button')
let billPercent = document.querySelector('.bill_percent')
let button = document.querySelector('.button');
let tip = document.querySelector('.tip');
let sum = document.querySelector('.sum');

button.addEventListener('click',function(){
    let tipp = bill.value * billPercent.value / 100 ;
    tip.innerText = tipp;
    let billl = bill.value + tipp;
    sum.innerText = billl;
})

