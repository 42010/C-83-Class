var touchEvent = "";
var l_x, l_y, c_x, c_y;
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
var color = "red";
var width = 10;
var width1 = screen.width;
var new_width = screen.width - 70;
var new_height = screen.height - 300;

if (width < 992) {
    document.getElementById("myCanvas").width = new_width;
    document.getElementById("myCanvas").height = new_height;
    document.body.style.overflow = "hidden";
}

canvas.addEventListener("touchstart", my_touchstart);

function my_touchstart(e){
     console.log("my_touchstary")

    l_x = e.touches[0].clientX - canvas.offsetLeft;
    l_y = e.touches[0].clientY - canvas.offsetTop;
}
    

canvas.addEventListener("touchmove", my_touchmove);

function my_touchmove(e){
    console.log("my_touchmove");
    c_x = e.touches[0].clientX - canvas.offsetLeft;
    c_y = e.touches[0].clientY - canvas.offsetTop;

    ctx.beginPath();
    ctx.strokestyle = color;
    ctx.lineWidth = width

    console.log("l_x", "l_y");
    console.log("c_x", "c_y");
    ctx.lineTo("c_x", "c_y");
    ctx.stroke();

    l_x = c_x
    l_y = c_y
}
    



