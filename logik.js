const canvas = document.getElementById('LienzoDos');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const mouse = {
 x: null,
 y: null,
};

window.addEventListener('click', function(event){
    mouse.x=event.x;
    mouse.y=event.y;
    console.log(event);
});

window.addEventListener('resize', function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ctx.fillStyle = 'white';
    ctx.fillRect(30,30,200,120);
    
    ctx.beginPath();
    ctx.arc(500,500, 100, 0, Math.PI*2);
    ctx.fill();
});


function drawCircle(){
    ctx.fillStyle = 'white';
    ctx.beginPath();
    ctx.arc(mouse.x,mouse.y, 100, 0, Math.PI*2);
    ctx.fill();
}