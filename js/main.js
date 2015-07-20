// when the page loads, nav to fill screen
$(document).ready(function(){
	// // Remove uls and  line
	$('#Content, #Line, #Title-Load2').addClass('Closed');
	// // Expand Nav to Fill Screen
	$('body').addClass('PageLoad');
	$('#nav-bar').addClass('load');
	$('#Title-Load').addClass('Open');
	// Show text - thinker - for 1 second
	$('.Thinker').delay(200).queue(function(){
		$(this).addClass('fade-In');
	});
	$('.Designer').delay(1500).queue(function(){
		$(this).addClass('fade-In');
	});
	
	$('.Strategist').delay(2800).queue(function(){
		$(this).addClass('fade-In');
	});
	$('body').delay(3900).queue(function(){
		$('body').removeClass('PageLoad', 'slow');
		$('header').animate(
			{height: "80px", opacity:0.6}, 
			"slow");
		$('#Content, #Line, #Title-Load2').removeClass('Closed');
		$('#nav-bar').removeClass('load');
	});

});
$('#Michelle').on('click',function(){
	location.reload();
});

// When the user clicks the work icon - the text or the icon
var scrollHeight = $(window).scrollTop();

$('#Work-Icon').on('click', function (){
	// Show the work div.
	$('.Work').removeClass('Section_Closed');
});

$('#Resume-Icon').on('click', function (){

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
	






