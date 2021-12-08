song=''
leftWristX=0
leftWristY=0
rightWristX=0
rightWristY=0
function setup()
{
canvas=createcanvas(600,500);
canvas.center();
video=createCapture(VIDEO);
video.hide();
posenet.ml5.posenet(video,modelLoaded);
posenet.on('Pose',gotPoses);
}
function preload()
{
song.loadSound('music.mp3');    
}
function draw()
{
image(video,0,0,600,500);
fill('#800080');
stroke('#800080');
if(scoreLeftWrist>.02);
{
circle(leftWristX,leftWristY,20);
InNumberleftwristY=Number(leftWristY);
volume=remove_decimals/500;
document.getElementById("volume").innerHTML="Volume="+volume;
song.setvolume(volume);
}   
}
function play()
{
song.play();
song.setvolume(1);
setup.rate(1);
}
function modelLoaded()
{
console.log('Posenet Is Initialized');    
}
function gotPoses(results)
{
if(results.length>0)
{
console.log(results);
scoreLeftWrist=results.pose[0].keypoints[9].score;
console.log("scoreLeftWrist="+scoreLeftWrist);
leftWristX=results[0].pose.leftWrist.x;
leftWristY=results[0].pose.leftWrist.y;
console.log("leftWristX="=leftWristX+"leftWristY="+leftWristY);
rightWristX=results[0].pose.rightWrist.x;
rightWristY=results[0].pose.rightWrist.y;
console.log("rightWristX="=rightWristX+"rightWristY="+rightWristY);
}
}