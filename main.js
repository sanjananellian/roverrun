canvas=document.getElementById("canvas")
ctx=canvas.getContext("2d")
roverx=10
rovery=10
rover_width=100
rover_height=90
array=["nasa1.jfif","nasa2.jpg","nasa3.jpg","nasa4.jpg","mars.jpg"]
randomnumber=Math.floor(Math.random()*5)
backgroundimage=array[randomnumber]
roverimage="rover.png"
function add() {
backgroundimagetag=new Image()
backgroundimagetag.onload=upload_background
backgroundimagetag.src=backgroundimage
roverimagetag=new Image()
roverimagetag.onload=uploadrover
roverimagetag.src=roverimage
}
function upload_background(){
ctx.drawImage(backgroundimagetag,0,0,canvas.width,canvas.height) 
}
function uploadrover(){
ctx.drawImage(roverimagetag,roverx,rovery,rover_width,rover_height)
}
window.addEventListener("keydown",keydown)
function keydown(e){
keypress=e.keyCode
console.log(keypress)
if (keypress=="38") {
up()
console.log("up")   
}
if (keypress=="40") {
    down()
    console.log("down")   
    }
    if (keypress=="37") {
        left()
        console.log("left")   
        }
        if (keypress=="39") {
            right()
            console.log("right")   
            }
}
function up() {
if (rovery>0) {
 rovery=rovery-10
upload_background()
uploadrover()
}
}
function down(){
    if (rovery<500) {
     rovery=rovery+10
    upload_background()
    uploadrover()
    }
}
function left(){
    if (roverx>0) {
     roverx=roverx-10
    upload_background()
    uploadrover()
    }
}
function right(){
    if (roverx<700) {
     roverx=roverx+10
    upload_background()
    uploadrover()
    }
}
