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
model=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/jd5VAHzsf/model.json",modelloded)

function modelloded(){
    console.log("modelloded succesfuly");
}

function speak(){
speak_data1="the prediction 1 is " + prediction1;
speak_data2="and the prediction 2 is " +prediction2;
speech_audio=new SpeechSynthesisUtterance(speak_data1+speak_data2);
window.speechSynthesis.speak(speech_audio);
}
function identifypic(){
    img=document.getElementById("pic");
    model.classify(img,getresults)
    
}
function  getresults(e,r){
    if (e){
        console.error(e)
    }
    else {
        console.log(r)
        prediction1=r[0].label;
        prediction2=r[1].label;
        document.getElementById("emotion_name1").innerHTML=prediction1;
        document.getElementById("emotion_name2").innerHTML=prediction2;

        if (prediction1=="okay"){
            document.getElementById("emoji1").innerHTML="&#128077;"
        }
        if (prediction1=="stop"){
            document.getElementById("emoji1").innerHTML="&#9995;"
        }
        if (prediction1=="peace"){
            document.getElementById("emoji1").innerHTML="&#9996;"
        }
        if (prediction2=="perfect"){
            document.getElementById("emoji2").innerHTML="&#128076;"
        }
        if (prediction2=="okay"){
            document.getElementById("emoji2").innerHTML="&#128077;"
        }
        if (prediction2=="stop"){
            document.getElementById("emoji2").innerHTML="&#9995;"

        } 
        
        if (prediction2=="peace"){
            document.getElementById("emoji2").innerHTML="&#9996;"
        }

        if (prediction2=="perfect"){
            document.getElementById("emoji2").innerHTML="&#128076;"
        }


        

        

    }
}
