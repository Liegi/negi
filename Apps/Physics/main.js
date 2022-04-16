var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

context.scale(1, -1);
context.translate(0, -canvas.height);

const g = 9.86;
var t = 0;
var r = 10;
var x = 10;
var y = 10;

var draw = setInterval(function(){
    if(y >= 0){
        var c_x = document.getElementById("circ_x");
        var c_y = document.getElementById("circ_y");
        var v0 = document.getElementById("v0");
        var theta = document.getElementById("theta");
        v0 = v0.value;
        theta = theta.value;
        v0 = Number(v0);
        theta = Number(theta)*Math.PI / 180;
        context.clearRect(0, 0, canvas.width, canvas.height);
        y = (-0.5*g*(t**2) + v0*t*Math.sin(theta));
        x = t * v0 * Math.cos(theta);
        t += 0.06;
        context.beginPath();
        context.arc(x, y, r, 0 * Math.PI / 180, 360 * Math.PI / 180, false);
        c_x.innerHTML = String(Math.round(x * 100)/100);
        c_y.innerHTML = String(Math.round((y+1) * 100)/100);
        context.stroke();
    }
}, 10);

function clear_draw(){
    context.clearRect(0, 0, canvas.width, canvas.height);
    x = 10;
    y = 40;
    t = 0;
}