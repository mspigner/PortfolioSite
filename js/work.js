// Set up array for all divs
var projects= ['.BH_OOH','.BH_Wall','.HW','.SpeedStick','.Gatorade','.VictoriaS','.Challenge']
// // set current position at 0
var currentPosition = 0;

$('#Next').on('click', function (){
	$('div',projects[currentPosition]).addClass('active');
	if ($('div').hasClass('.active')){
		$('div').removeClass('active');
		$('div').slideUp();
	}
	// else {
	// 	$('div').removeClass('active');
	// 	currentPosition += 1;
	// 	$('div',projects[currentPosition]).slideDown();
	// }
	
});
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