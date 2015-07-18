
var projects = [".BH_OOH",".BH_Wall",".HW",".SpeedStick",".Gatorade",".VictoriaS"]
// set current position at 0
var currentPosition = 0;
// var nextDiv = currentPosition-1;

$('#Next').on('click', function (){

	currentPosition += 1;
	var previousDiv = currentPosition-1;

	console.log(currentPosition);
	console.log(previousDiv);

	$('#Previous').prop('disabled',false);

	$(projects[currentPosition]).delay(1).queue(function(){
		$(projects[currentPosition]).addClass('slideIn');
	});
	$(projects[previousDiv]).removeClass('slideIn');

	console.log(projects[previousDiv]);

	if (currentPosition === projects.length-1) {
		$('#Next').prop('disabled', true);
	}

});

// When the user clicks previous
$('#Previous').on('click', function (){
	// Enable the next button
	$('#Next').prop('disabled', false);
	// Subtract 1 from current position
	currentPosition -= 1;
	// Display project that corresponds with the current position
	$(projects[currentPosition]).addClass('slideIn');
	// Add 1 to the current position
	var nextDiv = currentPosition+1;
	// Hide the project that correspondes ot the current position +1
	$(projects[nextDiv]).removeClass('slideIn');
	// if the current position is equal to 0
	if (currentPosition === 0) {
		// Disable the previous button
		$('#Previous').prop('disabled',true);
	}
});

// $('#Previous').on('click', function (){

// 	currentPosition -= 1;
// 	var nextDiv = currentPosition+1;

// 	$('#Next').prop('disabled', false);
// 	$(projects[currentPosition]).delay(1).queue(function(){
// 		$(projects[currentPosition]).addClass('slideIn');
// 	});

// 	$(projects[nextDiv]).removeClass('slideIn');
	
// 	if (currentPosition === 0 ) {
// 		$('#Previous').prop('disabled', true);
// 	}

// });

//when the user clicks on next
// $('#Next').on('click',function (){
// //store the current project number
// 	$('.project').removeClass('.active');
// 	//add 1
// 	// currentPosition += 1;
// 	// //Enable previous button
// 	// $('#prev').prop('disabled',false);
// 	// $('div',projects[currentPosition]).slideToggle();
// 	// // run change div function
// 	// // changeProject();

// });
	
//when the user clicks next


//change project function
// function changeProject(){
// 	if ($('div').hasClass('.active')) {
// 		$('div').removeClass('.active');
// 		$('div').hide();
// 	}
// 	else {
// 	$('div',projects[currentPosition]).slideToggle();
// 	$('div', projects[currentPosition]).addClass('.active');
// 	}
// }