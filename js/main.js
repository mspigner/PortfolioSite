// when the page loads, nav to fill screen
$(document).ready(function(){
	// Remove main content, main nav and center line
	$('#Content, #Line, #Title-Load2').addClass('Closed');
	// Make background dark grey
	$('body').addClass('PageLoad');
	// Place the nave at the center at teh screen.
	$('#nav-bar').addClass('load');
	// Display the beginning titles
	$('#Title-Load').addClass('Open');
	// Show text - thinker - for 1 second
	$('.Thinker').delay(200).queue(function(){
		$(this).addClass('fade-In');
	});
	// Show designer for one second
	$('.Designer').delay(1500).queue(function(){
		$(this).addClass('fade-In');
	});
	// Show text - strategist - for one second
	$('.Strategist').delay(2800).queue(function(){
		$(this).addClass('fade-In');
	});
	// After a few seconds of delay run function
	$('body').delay(3900).queue(function(){
		// Remove pageload from body 
		$('body').removeClass('PageLoad', 'slow');
		// Shrink the header from full screen and add opcity
		$('header').animate(
			{height: "80px", opacity:0.7}, 
			"slow");
		// Open the main content, show line and the small "strategist"
		$('#Content, #Line, #Title-Load2').removeClass('Closed');
		// Remove the load class to turn off the 100px 
		$('#nav-bar').removeClass('load');
	});

});
// When you click on name in nav
$('#Michelle').on('click',function(){
	// Reload page - to allow for a return to the "home"page without hitting refresh
	location.reload();
});

// When the user clicks the work icon - the text or the icon

// When the user clicks on the Work text or icon
$('#Work-Icon').on('click', function (){
	// Show the work div.
	$('.Work').removeClass('Section_Closed');
});
// When the user clicks on teh Resume text or icon
$('#Resume-Icon').on('click', function (){
	// Show the resume div
	$('.Resume').removeClass('Section_Closed');
});


// When the user clicks on the about icon or text
$('#About-Icon').on('click', function
	(){
	// show the about section 
	$('.About').removeClass('Section_Closed');
});

// [hides the icon abve the open section]
// when the user clicks on the section-text 
$('.Section-Text').on('click',function (){
	// Hide the icon and text
	$(this).addClass('Section_Closed').delay(2000);
	// Hide vertical line
	$('#Line').addClass('Section_Closed').delay(2000);
	// Shift top margin of Work div up so there is less white space at the top.
	$('body').addClass('Collapse').delay(2000);
	$('#Title-Load').removeClass('Open');
	$('#Title-Load').addClass('Closed');

});

// [return the user to list view]
// When the user clicks on the header within each section
$('.Section h1').on('click', function (){
	// Unhide the section text and icon
	$('.Section-Text').removeClass('Section_Closed');
	// Bring the vertical line back into view
	$('#Line').removeClass('Section_Closed');
	// Add the top margin back to the work div, ul, li units
	$('body').removeClass('Collapse');
	// Whatever section is open, close it.
	$('.Section').addClass('Section_Closed');
	// Hide the 
	// // $('.Section-Div-Title').hide();


});
	
// When the user clicks on a work icon.
$('.title').on('click', function(){
	var matchingDiv = $(this).data('section');
	console.log(matchingDiv);
	// // Pull the data dash
	$('.Work_Menu').hide();
	// // Hide the Work Section
	$("." + matchingDiv).addClass('slideIn');
	console.log("." + matchingDiv);
	$('.button_div').addClass('slideIn');
	// // Show the corresponding div section
	// Shrink nav and adhere to top
	$('header').animate(
			{height: "45px"});
	$('header').addClass('Mini_Nav');
	$('body').addClass('Content_Collapse');
	$(window).scrollTop(0,0);
});

// When the user clicks the back button
$('.button_div').on('click', function (){
	// Hide the project div
	$('.project').removeClass('slideIn');
	// Show the full work menu
	$('.Work_Menu').show();
	// Hide the back button
	$('.button_div').removeClass('slideIn');
	$('header').removeClass('Mini_Nav');
	$('header').animate(
			{height: "80px"});
	$('body').removeClass('Content_Collapse');
});
	
// Speed Stick Carousel

// Create an array with all of the picture images and set it with a variable. 
var speedImages = ["html_template/images/Work/Speed_Stick_Image.001.jpg","html_template/images/Work/Speed_Carousel/S_C_1.jpg","html_template/images/Work/Speed_Carousel/S_C_2.jpg","html_template/images/Work/Speed_Carousel/S_C_3.jpg","html_template/images/Work/Speed_Carousel/S_C_4.jpg"]
// Create a variable for the current position
// Set that current position to zero
var currentSpeedImage = 0;
	
// When the user clicks the next arrow
$('.Right_Arrow').on('click',function (){
	if (currentSpeedImage == 4){
		$('.Right_Arrow').prop('disabled',true);
		currentSpeedImage += 0;
	}
	else {
	// Enable the previous button
	$('.Left_Arrow').prop('disabled',false);
	// Grab the current position and add 1
	currentSpeedImage += 1;
	console.log(currentSpeedImage);
	// Display the image that corresponds with that variable position
	$('#Speed_Carousel').attr('src',speedImages[currentSpeedImage]);
	
	}
});

// When the user clicks previous button
$('.Left_Arrow').on('click', function(){
	if (currentSpeedImage === 0) {
		$('.Left_Arrow').prop('disabled',true);
	}
	else { 
	// Enable the next button
	$('.Right_Arrow').prop('disabled',false);
	// Grab the current position and subtract 1
	currentSpeedImage -= 1;
	console.log(currentSpeedImage);
	// Dispaly the image that corresponds with that variable position
	$('#Speed_Carousel').attr('src',speedImages[currentSpeedImage]);
	}
});
		









