let time = document.querySelector('.time');
let start = document.querySelector('.start_button');
let game = document.querySelector('.game')
let boxes = document.querySelectorAll('.boxes');
let timer = 100;

flip = () =>{
    
}

start.addEventListener('click',()=>{
    start.style.display = 'none';
    game.style.display = 'inline';
});

boxes.forEach(boxes => {
    boxes.addEventListener('click',()=> flip);
});
