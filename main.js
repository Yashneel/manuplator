
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;





function setup() {
	canvas =  createCanvas(400, 400);
	canvas.center();

	video = createCapture(VIDEO);
	

	poseNet = ml5.poseNet(video, modelLoaded);
	poseNet.on('pose', gotPoses);
}
function modelLoaded() {
	console.log('PoseNet Is Initialized');
  }
function gotPoses(results)
  {
	if(results.length > 0)
	{
	  console.log(results);
	  leftWristX = results[0].pose.leftWrist.x;
	  rightWristX = results[0].pose.rightWrist.x;
	  
	  difference  = floor(leftWristX - rightWristX)

	}
  } 
function draw() {
	background("#FF0000");

    textSize(difference)
	fill("#FFA500")
	text("Hello", 50, 400)
}


  
  





