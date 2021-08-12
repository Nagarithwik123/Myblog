song = "";
leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;
scoreLeftWrist=0;


function preLoad(){
    song = loadSound("music.mp3");
}
function setup(){
    canvas = createCanvas(400,300);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log('PoseNet is Initialized');
}
function draw(){
    image(video,0,0,400,300);

    fill("#ff0400");
    stroke("#ff0400");
    
    if(scoreLeftWrist>0.2){
        circle(leftWristX,leftWristY,20);
        InNumberLeftWristY = Number(leftWristY);
        removeDecimals = floor(InNumberLeftWristY);
        volume=removeDecimals/300;
        document.getElementById("volume_button").innerHTML = "volume=" + volume;
        song.setVolume(volume);
    }
}
function playsong()
{
    song.play();
    song.setVolume(1);
    song.rate(1);
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);

        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX="+ leftWristX + "leftWristY="+ leftWristY);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;       
        console.log("rightWristX="+ rightWristX + "rightWristY="+ rightWristY);
    }
}