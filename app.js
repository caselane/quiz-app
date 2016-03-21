$(document).ready(function(){
	//Meme Random Color
	var randomColor = Math.floor(Math.random()*16777215).toString(16);
	
	//Questions
	var q0 = {
		q: "What was the drawing that was scrawled on hundreds of surfaces during WWII, and is widely considered one of the fathers of all memes?",
		a: ["Frodo Lives","Dancing Baby","Kilroy was here","One does not simply walk"],
		ca: 2
	}
	var q1 = {
		q: "What is the popular children's show that has spawned many modern memes, such as the Squidward Dab, or the Mr. Krabs Blur?",
		a: ["Chowder","My Little Pony","The Simpsons","SpongeBob Squarepants"],
		ca: 3
	}
	var q2 = {
		q: "True or False: The amount of memes that exist on the internet is approximately uncountable, as dozens of memes are created each day.",
		a: ["True","False"],
		ca: 0
	}
	var q3 = {
		q: "Which of the following was a popular 2013-2014 meme, consisting of people wildly dancing to a song?",
		a: ["Mad World","Harlem Shake","Dancing Baby","Doge"],
		ca: 1
	}
	var q4 = {
		q: "What are the main icons of the MLG meme, or Major League Gaming?",
		a: ["Mountain Dew and Doritos","Milk and Cookies","Keyboard and Mouse","Halo and Call of Duty"],
		ca: 0
	}

	//Establishing Variables
	var qNumber = 0;
	var questions = [q0,q1,q2,q3,q4];
	var currentQuestion = questions[qNumber]
	var correctAnswers = 0;

	var checkAnswer = function(answer){
		currentQuestion = questions[qNumber];
		if (answer == currentQuestion.ca){
			correctAnswers++;
			$('#wrongOrRight').html('Correct!');
			$('#wrongOrRight').show();
		}
		else {
			$('#wrongOrRight').html('Incorrect!');
			$('#wrongOrRight').show();
		}
		$('#wrongOrRight').fadeOut(3000);
		qNumber++;
		displayQuestion();
	}
	

	//Functionality Section
	applyRandomColor();
	$('#wrongOrRight').hide();
	$('#startButton').click(function(){
		displayQuestion();
		$('#startScreen').hide();
		$('#questionScreen').show();
	});
	$('#submitButton').click(function(){
		var answer = $("input.answerButton:checked").val();
		checkAnswer(answer);
	});
	$('#restart').click(function(){
		qNumber = 0;
		correctAnswers = 0;
		currentQuestion = questions[qNumber];
		displayQuestion();
		$('#questionScreen').show();
		$('#feedbackScreen').hide();
	});

	function applyRandomColor() {
		$('.random-color').css('color', randomColor);
	}

	function displayQuestion(){
		if(qNumber >= questions.length){
			//qNumber is 5 or more, questions.length is 5
			displayFeedback();
		} else {
			currentQuestion = questions[qNumber];
			$('#question').html(currentQuestion.q);
			var html = "";
			for (var i = 0; i < currentQuestion.a.length; i++) {
				html += "<li><input class='answerButton' type='radio' name='answer' value='"+i+"'>"+currentQuestion.a[i]+"</li>";
			}
			$('#answers').html(html);
		}
	}

	var displayFeedback = function(){
		$('#questionScreen').hide();
		$('#feedbackScreen').show();
		if (correctAnswers == 5){
			$('#feedback').html('Memelord');
			$('#points').html('5 out of 5 points!')
			$('#summary').html('You are the all-powerful Memelord!');
		}
		else if (correctAnswers == 4){
			$('#feedback').html('Pretty Dank');
			$('#points').html('4 out of 5 points!')
			$('#summary').html('You are very knowledgeable about the realm of memes.');
		}
		else if (correctAnswers == 3){
			$('#feedback').html('Me Gusta');
			$('#points').html('3 out of 5 points!')
			$('#summary').html('You are good, but not good enough to be a memelord. Not yet.');
		}
		else if (correctAnswers == 2){
			$('#feedback').html('Not Dank Enough');
			$('#points').html('2 out of 5 points!')
			$('#summary').html('You were not educated enough in the realm of memes!');
		}
		else if (correctAnswers == 1){
			$('#feedback').html('Illegal Memes');
			$('#points').html('1 out of 5 points!')
			$('#summary').html('You are not worthy to use memes yet!');
		}
		else {
			$('#feedback').html('Forever Alone');
			$('#points').html('0 out of 5 points!')
			$('#summary').html('You bring shame to the word memes!');
		}
	}
});

