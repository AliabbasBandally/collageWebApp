


var SpeechRecognition = window.webkitSpeechRecognition;
var Recognition = new SpeechRecognition();
function start()
{
    document.getElementById("textbox").innerHTML="";
    recognition.start();
}
recognition.onresult=function(event){
    console.log("event");
    var Content=event.results[0][0][0].transcript;
    console.log(Content)
    document.getElementById("textbox").innerHTML="content";
    if (Content=="take my sëlfie"){
        console.log("takingselfie in 5 seconds");
        speak();
    }
}
function speak(){
    var synth=window.speechSynthesis;
    speak_data="Taking selfie in 5 seconds";
var utterThis=new SpeechSynthesisUtterance(speak_data);
synth.speak(utterThis)
}
Webcam.set({
    width:360,
    height:250,
    image_format:'png',
    png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach(camera)
setTimeout(function(){
    take_snapshot();
    save();
},5000);
function take_snapshot(){
    Webcam.snap(fuction(data_urI));
    {
        document.getElementById ("result").innerHTML='<img id="selfie_image" src=" '+data_uri+' "/>';
    }
}
function save(){
    link=document.getElementById("link");
    Image=document.getElementById("selfie_image").src
    link.href=Image;
    link.click()
}


