noseX=0;
noseY=0;

function preload(){
    mustache = loadImage('https://i.postimg.cc/KcDdCkgW/mustache.png');
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
    image(mustache,noseX,noseY,30,30);
}

function take_snapshot(){
    save('mustache_filter_image.png');
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX=results[0].pose.nose.x-15;
        noseY=results[0].pose.nose.y;
    }
}