let time = document.querySelector('.time');
let flip = document.querySelector('.flip');
let start = document.querySelector('.start_button');
let game = document.querySelector('.game');
let front = document.querySelectorAll('.front');
let boxes = document.querySelectorAll('.boxes');
let back = document.querySelectorAll('.back');
let restart = document.querySelector('.restart')
let restartButton = document.querySelector('.restart_button')
let timer = 100;
let flips = 0;

shuffle = () => {
    boxes.forEach(boxes=>{
        let a = Math.floor(Math.random()* 20);
        boxes.style.order = a;
    });
};

start.addEventListener('click',()=>{
    start.style.display = 'none';
    game.style.display = 'inline';
    shuffle();
    setInterval(() => {
        if(timer >= 0){
            time.textContent = timer--
        }
        if(timer < 0){
            game.style.display = 'none';
            restart.style.display = 'inline';
            timer = 100;
        };
    }, 1000);    
});

boxes.forEach(boxes => {
    boxes.addEventListener('click',()=> {
        boxes.classList.add("rotate");
        console.log(boxes.dataset.name);
        setTimeout(()=> {
            boxes.classList.remove("rotate")
        },1500);
    });
});

restartButton.addEventListener('click',()=>{
    start.style.display = 'none';
    game.style.display = 'inline';
    restart.style.display = 'none';
    shuffle();
    timer = 100;
    flips = 0;
    flip.textContent = flips;
    boxes.forEach(boxes => {
        boxes.classList.remove("rotate");
    });
});

front.forEach(front =>{
    front.addEventListener('click',()=>{
        flips++;
        flip.textContent = flips;
    });
});