const canvas = document.getElementById("pong");
const ctx  = canvas.getContext("2d");

var stoper=1;
var ly=5; var dly=3;
var ry=5; var dry=3;
var lengbar = 40;
var realx=2; var realy=2;
var bx=95; var dbx=-1*realx;
var by=50; var dby=-1*realy;
ctx.fillStyle = "#";
ctx.fillRect(0, 0, canvas.width, canvas.height);

function drawleft(params) {
    ctx.beginPath();
    ctx.lineWidth = "6";
    ctx.strokeStyle = "red";
    let x = ctx.rect(5, ly, 1, lengbar);
    ctx.stroke();
}

function drawright(params) {
    ctx.beginPath();
    ctx.lineWidth = "6";
    ctx.strokeStyle = "blue";
    ctx.rect(canvas.width-5, ry, 1, lengbar);
    ctx.stroke();
}

function drawcircle(params) {
    ctx.beginPath();
    ctx.lineWidth = "6";
    ctx.strokeStyle = "green";
    ctx.arc(bx, by, 3, 0, 2 * Math.PI);
    ctx.stroke();
}

function update(params) {
    bx+=dbx;by+=dby;
    //console.log(bx+"     "+by)
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    drawcircle();
    drawleft();
    drawright();
    if(bx<15 || bx>canvas.width-15){
        touch();
        if(check()){
            if(check()==1){
                console.log("player one won")
                ok();
            }
            else{
                console.log("player second won")
                ok();
            }
        }
    }
    
    counter();
}

function touch() {
    if(by>=ly && by<=ly+lengbar){
        dbx=1*realx;
    }
    if(by>=ry && by<=ry+lengbar){
        dbx=-1*realx;
    }
}

function check(){
    if(canvas.width-bx < 0)
    return 1;
    if(bx<0)
    return 2;
}

function counter(){
    if(by>canvas.height-5)
    dby=-1*realy;
    if(by<5)
    dby=1*realy;
}

setInterval(() => {
    if(stoper!=1)
    return;
    update();
}, 1000/30);


function ok() {
    stoper=-1;
}

document.addEventListener("keydown", (idk)=>{
    //console.log(idk)
    if(idk.key=="ArrowDown")
    ly+=dly; 
    if(idk.key=="ArrowUp")
    ly-=dly;
    if(idk.key=="s")
    ry+=dry; 
    if(idk.key=="w")
    ry-=dry;  
    
    //ArrowUp
    //console.log("SMART BRO")
});

console.log("player one won")
console.log("player one won")
console.log("player second won")