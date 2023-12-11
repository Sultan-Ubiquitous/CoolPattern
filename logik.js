const canvas = document.getElementById('LienzoDos');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//setting up the mood

const mouse = {
 x: null,
 y: null,
};

let isMouseDown = false;

function drawCircle(){
    ctx.fillStyle = 'white';
    ctx.beginPath();
    ctx.arc(mouse.x,mouse.y, 50, 0, Math.PI*2);
    ctx.fill();
}

window.addEventListener('resize', function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

//All functions and stuff to draw starts here
window.addEventListener('mousedown', function(){
    isMouseDown = true;
});
window.addEventListener('mouseup', function(){
    isMouseDown = false;
});

window.addEventListener('click', function(event){
    mouse.x = event.x;
    mouse.y = event.y;
    drawCircle();
})

window.addEventListener('mousemove', function(event){
    if(isMouseDown){
        mouse.x = event.x;
        mouse.y = event.y;
        drawCircle();
    }
});


