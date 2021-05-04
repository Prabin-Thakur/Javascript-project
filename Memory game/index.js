let time = document.querySelector('.time');
let start = document.querySelector('.start_button');
let game = document.querySelector('.game')
let a = 100;

// setInterval(()=>{
//     if(a >= 0){
//         time.textContent = a--
//     }
// },100)

start.addEventListener('click',()=>{
    start.style.display = 'none';
    game.style.display = 'inline'
})
