let time = document.querySelector('.time');
let flip = document.querySelector('.flip');
let start = document.querySelector('.start_button');
let game = document.querySelector('.game');
let front = document.querySelectorAll('.front');
let boxes = document.querySelectorAll('.boxes');
let back = document.querySelectorAll('.back');
let timer = 100;
let flips = 1;

shuffle = () => {
    boxes.forEach(boxes=>{
        let a = Math.floor(Math.random()* 20);
        boxes.style.order = a;
    });
};

setInterval(() => {
    if(timer >= 0){
        time.textContent = timer--
    };
}, 1000);

start.addEventListener('click',()=>{
    start.style.display = 'none';
    game.style.display = 'inline';
    shuffle();
});

boxes.forEach(boxes => {
    boxes.addEventListener('click',()=> {
        boxes.classList.toggle("rotate");
        flip.textContent = flips++;
        console.log(boxes.dataset.name);
    });
});