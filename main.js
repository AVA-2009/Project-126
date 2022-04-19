var song="";
function preload(){
    song=loadSound("music.mp3")
}
function setup(){
    canv=createCanvas(700,400);
    canv.center();
    video=createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video,0,0,700,400);
}
function start(){
    song.play();
}