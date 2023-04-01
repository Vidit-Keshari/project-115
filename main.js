function preload() {
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.position(385, 150);
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    image(video, 0, 0, 300, 300);
}

function take_snapshot() {
    save('project_114.png');
}

function modelLoded() {
    console.log("poseNet model is successfully loaded and initialized!");
}

function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
        console.log("nose X = " + results.pose.nose.x);
        console.log("nose Y = " + results.pose.nose.y);
    }
}