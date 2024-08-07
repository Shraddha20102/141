HP = "";
PP = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightwristY = 0;

function preload(){
    HP = loadSound('music.mp3');
    PP = loadSound('music2.mp3');
}

function setup(){
    canvas = createCanvas(500, 400);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('PoseNet Is Initialized');
}

function draw(){
    image(video, 0, 0, 500, 400);
}

function gotPoses(results){
    if(results.length > 0){
        console.log(result);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX = " + leftWristX +" leftWristY = "+ leftWristY);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX = " + rightWristX +" rightWristY ="+ rightWristY);

    }
}