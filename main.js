canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
 var mouseEvent = "";
 radius = 5;
 color = "black";
 width = 2;
 console.log(radius, color, width)
 var last_x, last_y;

 
canvas.addEventListener("mousedown", myMouseDown);
function myMouseDown(e) 
{
radius = document.getElementById("radius").value;
color = document.getElementById("color").value;
width = document.getElementById("width").value;
console.log(radius, color, width);
mouseEvent = "mousedown";
}
canvas.addEventListener("mouseup", MouseUp);
function MouseUp(e) {
    mouseEvent = "mouseup";
}
canvas.addEventListener("mouseleave", MouseLeave);
function MouseLeave(e) {
    mouseEvent = "mouseleave";
}
canvas.addEventListener("mousemove", MouseMove);
function MouseMove(e) {
    current_x = e.clientX - canvas.offsetLeft;
    current_y = e.clientY - canvas.offsetTop;
    if (mouseEvent == "mousedown")
    {
        ctx.beginPath();
        ctx.strokeStyle= color;
        ctx.lineWidth= width;
        ctx.arc(current_x, current_y, radius, 0, 2*Math.PI);
        ctx.stroke();
    }
}
function ClearArea()
    {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    }


