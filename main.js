function setup(){
    canvas = createCanvas(270,270);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/8QpQep7-7/model.json',modelLoaded);
}

function draw(){
 image(video,0,0,270,270);
 classifier.classify(video,gotResult);
}

function modelLoaded(){
    console.log("model is loaded");
}

function gotResult(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("result_family_member_name").innerHTML=results[0].label;
        document.getElementById("result_family_member_accuracy").innerHTML=results[0].confidence.toFixed(3);
    }
}