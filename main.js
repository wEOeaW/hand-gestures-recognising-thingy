Webcam.set({
    width:350,
    hieght:300,
    image_format : 'png',
    png_quality:90
});

camara = documant.getElementById("camara");

Webcam.attach( '#camara' );

function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}

console.log('ml5 version:',ml5.version);

Classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/a90RrrPH3/ ',modelLoaded);

function modelLoaded() {
    console.log('Model Loaded!');
}

function check()
{
    img = document.getElementById('captured_image');
    classifier.classifier.classify(img, gotResult);
}

function speak(){
    var synth = window.speechSynthesis;
    speak_data_1 = "The first one is"+prediction_1;
    speak_data_2 = "The other one is"+prediction_2;
    var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
    utterThis.rate = 0.5;
    synth.speak(utterThis);
}

function gotResult(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("result_emotion_name").innerHTML = results[0].label;
        document.getElementById("result_emotion_name2").innerHTML = results[1].label;
        prediction_1 = results[0].label;
        prediction_2 = results[1].label; 
        speak();
        if(results[0] == "happy")
        {
            document.getElementById("update_emoji").innerHTML = "&#128522;";
        }
        if(results[0] == "sad")
        {
            document.getElementById("update_emoji").innerHTML = "&#128532;";
        }
        if(results[0] == "angry")
        {
            document.getElementById("update_emoji").innerHTML = "&#128548;";
        }





        if(results[1] == "happy")
        {
            document.getElementById("update_emoji2").innerHTML = "&#128522;";
        }
        if(results[1] == "sad")
        {
            document.getElementById("update_emoji2").innerHTML = "&#128532;";
        }
        if(results[1] == "angry")
        {
            document.getElementById("update_emoji2").innerHTML = "&#128548;";
        }

    }

}
