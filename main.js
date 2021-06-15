var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start(){
    document.getElementById("text_box").innerHTML = "";
    recognition.start();
}

recognition.onresult= function(event){
    console.log(event);
    var Content=event.results[0][0].transcript;
    document.getElementById("text_box").innerHTML=Content;
    console.log(Content);
    speak();
}
function speak(){
    var synth = window.speechSynthesis;
    speak_data = "taking your selfie in 5 seconds";
    var utterThis = SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    Webcam.attach(camera);
}
Webcam.set({
    width:360,
    height:250,
    image_format:'jpeg',
    jpeg_quality:90
});
camera=document.getElementById("camera");
