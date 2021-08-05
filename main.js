function setup(){
    video = createCapture(VIDEO);
    video.size(520,480)

   canvas = createCanvas(520,480);
   canvas.position(560,100);
   poseNet = ml5.poseNet(video,modelLoaded);
   poseNet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log('Posenet is Initialised');
}
function gotPoses(results){
   if(results.length>0){
       console.log(results);
   }
}
function draw(){
    background('#a19d9e');
}