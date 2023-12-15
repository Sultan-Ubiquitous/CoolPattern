const canvas = document.getElementById('LienzoDos');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;    
});

const mouse = {
    x: null,
    y: null,
};

let isMouseDown = false;

window.addEventListener('mousedown', function(event){
    mouse.x=event.x;
    moues.y=event.y;
    isMouseDown = true;
});

window.addEventListener('mouseup', function(){
    isMouseDown = false;
});

window.addEventListener('mousemove', function(event){
    if(isMouseDown){
        mouse.x=event.x;
        moues.y=event.y;
    }
});

class Particle {
    constructor(){
        this.x=mouse.x;
        this.y=mouse.y;
    }
}