$(document).ready(function(){
	//Meme Random Color
	var randomColor = Math.floor(Math.random()*16777215).toString(16);
	function applyRandomColor() {
		$('.random-color').css('color', randomColor);
	}
	applyRandomColor();
});