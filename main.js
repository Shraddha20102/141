HP = "";
PP = "";

function preload(){
    HP = loadSound('music.mp3');
    PP = loadSound('music2.mp3');
}

function setup(){
    canvas = createCanvas(500, 400);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 0, 0, 500, 400);
}