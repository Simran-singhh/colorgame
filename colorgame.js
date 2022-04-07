var numSquares=6;
var colors = generateRandomColors(numSquares);

var squares=document.querySelectorAll(".square");
var pickedcolor=pickColor();
var colorDisplay=document.getElementById("colordisplay");
var messageDisplay=document.querySelector("#message");
var h1=document.querySelector("h1"); 
var resetButton=document.querySelector("#reset");
var easybtn=document.querySelector("#easybtn");
var hardbtn=document.querySelector("#hardbtn");

colorDisplay.textContent=pickedcolor;

for(var i=0; i<squares.length; i++){
	squares[i].style.backgroundColor=colors[i];

	squares[i].addEventListener("click",function(){
	//grab color of clicked square
	var clickedcolor=this.style.backgroundColor;
	//compare color to pickedcolor
	if(clickedcolor===pickedcolor){
		messageDisplay.textContent="correct";
		resetButton.textContent="Play Again!!";
		changeColors(clickedcolor);
		h1.style.background=clickedcolor;
	}
	else{
		this.style.background="#232323";
		messageDisplay.textContent="Try Again";
	}
	});
}

function changeColors(color){
	//lop through all squares 
	for(var i=0;i<squares.length;i++){
		//change each color to match given color
		squares[i].style.background=color;
	}
}
function pickColor(){
	//to generate a random no
	var random=Math.floor(Math.random()*colors.length);//math.random gives random no b/w 0 and 1 in decimal so * it with the length of color to 
	//get a no max no upto 5.999 and we want upto max no of 5 and math.floor removes all digits after decimal
	return colors[random];
}

function generateRandomColors(num){
	//make an array
	var arr=[];
	//reprat num times
	for(var i=0;i<num;i++){
	//get random color and push into an array
		arr.push(randomcolor());
	}
	//return that array
	    return arr;
	}

	function randomcolor(){
		//pick a "red" from 0-255
		var r=Math.floor(Math.random()*256);
		//pick a "green" from 0-255
		var g=Math.floor(Math.random()*256);
		//pick a "blue" from 0-255
		var b=Math.floor(Math.random()*256);
       return "rgb(" + r + ", " + g + ", " + b + ")";
	}

 resetButton.addEventListener("click",function(){
 	//generate all new colors
 	colors=generateRandomColors(numSquares);
 	//pick a new color from array
 	pickedcolor=pickColor();
 	//change colorDisplay to match picked color
 	colorDisplay.textContent=pickedcolor;
 	//change colors of squares
 	for(var i=0;i<squares.length;i++)
 	 {
 	 	squares[i].style.background=colors[i];
 	 }
 	 //change the background of heading to white
 	 h1.style.background="steelblue";
 	 resetButton.textContent="NEW COLORS";
 	 messageDisplay.textContent="";
 	});
	
    

    easybtn.addEventListener("click",function(){
    	hardbtn.classList.remove("selected");
    	easybtn.classList.add("selected");
    	numSquares=3;
    	colors=generateRandomColors(numSquares);
    	pickedcolor=pickColor();
    	colorDisplay.textContent=pickedcolor;
    	for(var i=0;i<squares.length;i++)
    	{
    		if(colors[i]){
    			squares[i].style.background=colors[i];
    		}
    		else{
    			squares[i].style.display="none";
    		}
    	}
    	
    });

     hardbtn.addEventListener("click",function(){
    	hardbtn.classList.add("selected");
    	easybtn.classList.remove("selected");
    	numSquares=6;
    	colors=generateRandomColors(numSquares);
    	pickedcolor=pickColor();
    	colorDisplay.textContent=pickedcolor;
    	for(var i=0;i<squares.length;i++)
    	{
    			squares[i].style.background=colors[i];
    			squares[i].style.display="block";
    		
    	}
    	

     });
