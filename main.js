nose_X=0;
nose_Y=0;

function preload(){
    clown_nose = loadImage('https://i.postimg.cc/7ZBcjDqp/clownnose.png');
}
function setup(){
    canvas=createCanvas(350,350);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(350,350);
    video.hide();
    
    posenet=ml5.poseNet(video,modelLoaded);
    posenet.on("pose",gotposes);
}

function modelLoaded(){
    console.log("PoseNet is initialized");

}

function draw(){
image(video,0,0,350,350);
image(clown_nose,nose_X,nose_Y,40,40);
}
function gotposes(result){
    console.log(result);
    if (result.length>0){
        nose_X=result[0].pose.nose.x;
        nose_Y=result[0].pose.nose.y;
    }
}
function takepic(){
    save("me-with-clown-nose.png");
}
