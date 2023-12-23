var cursor = document.querySelector('.cursor')
var home = document.querySelector('.home');
home.addEventListener("mousemove",function(dets){
    cursor.style.opacity = 1;
    cursor.style.left = dets.x +"px"
    cursor.style.top = dets.y + "px"
})
home.addEventListener("mouseleave",function(dets){
    cursor.style.opacity = 0;
})