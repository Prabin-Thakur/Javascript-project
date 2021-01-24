let backgrounds = ['#C064E5','#C9442A','#159575','#27D6E0','#D8E027','#273DE0','#9F16CA','#CA166D','#F14646','#5CD2BD'];
let background = document.getElementById('background');
let button = document.getElementById('button');
let code = document.querySelector('.code')
let color = Math.floor(Math.random()*backgrounds.length + 1);
let colorcode = backgrounds[color];

changeColor = () => {
    background.style.backgroundColor = colorcode;
    code.textContent = colorcode;
};

button.addEventListener('click',changeColor);

