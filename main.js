img = "";
status = "";

function preload()
{
    img = loadImage('dog_cat.jpg');
}



function modelLoaded() {
    console.log("Model Loaded!")
    status = true;
    objectDetector.detedt(img, gotResult);
}

function gotResult(errror, results) {
     if (errror) {
        console.log(error);
     }
      console.log(results);
}


function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossed', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}