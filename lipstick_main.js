lipstickX=0;
lipstickY=0;

function preload(){
    lipstick = loadImage('https://i.postimg.cc/zfmy6Ps8/lipstick.png');
}

function setup(){
    canvas = createCanvas(250,250);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(250,250);
    video.hide();

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log('PoseNet is Initialized');
}

function draw(){
    image(video,0,0,250,250);
    image(lipstick,lipstickX,lipstickY,30,30);
}

function take_snapshot(){
    save('lipstick_filter_image.png');
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        lipstickX=results[0].pose.lipstick.x;
        lipstickY=results[0].pose.lipstick.y;
        console.log("lipstick x ="+lipstickX);
        console.log("lipstick y ="+lipstickY);
    }
}