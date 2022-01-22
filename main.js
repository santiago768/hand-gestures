prediction1=""
prediction2=""

Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});
Webcam.attach("#camera")

function takepic(){
    Webcam.snap(function(campic){
        document.getElementById("result").innerHTML='<img id="pic" src="'+campic+'">';
    });
}
model=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/s8_wK5tut/model.json",modelloded)

function modelloded(){
    console.log("modelloded succesfuly");
}

function speak(){
speak_data1="the prediction 1 is " + prediction1;
speak_data2="and the prediction 2 is " +prediction2;
speech_audio=new SpeechSynthesisUtterance(speak_data1+speak_data2);
window.speechSynthesis.speak(speech_audio);
}
