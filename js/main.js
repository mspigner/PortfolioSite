// when the page loads, nav to fill screen
	// Show text - thinker - for 1 second
	// Clear all text
	// Show text - designer - for 1 second
	// Clear all text
	// Show text - web developer - for 1 second
	// Clear all text
	// Show text - strategist - and hold on screen

// when user scrolls 
	// Add class Shrink to Nav (shrink nav, change text and background color)
	// Fix to top  of the screen

// when user hovers over Work Image or Icon
	// change mouse cursor to hand
// when the user clicks on Work Image or Icon
	// Close all open divs
	// Slide down (Slide Toggle) Work div
	// Add Open class to Work Image
	// Add Open Class to Work Text 
// wwhen user clicks on project
	// Hide Work Div 
	// Display corresponding project page

// when user hovers over Resume Image or Icon
	// change mouse cursor to hand
// when user clicks on Resume Image or Icon
	// Close all open Divs
	// Clear Open class from all images
	// Clear open class from all text
	// Slide Down (Slide Toggle) Resume Div
	// Add Open class to Resume Image
	// Add Open class to Resuem Text

// when user clicks View Resume PDF text
	// Open PDF in separate page

// when user hovers over About Image or Icon
	// change mouse cursor to hand
// when user clicks on About Image or Icon
	// close all open Divs
	// Clear Open class from all images
	// Clear Open class from all text
	// slide down (slide toggle) About Div
	// Add Open class to Resume Image
	// Add Open class to Resume Text

// when user hovers over Email Address
	// change mouse cursor to hand
// when user clicks Email Address in footer
	// Open email in user's email program

// $('li.Work-Icon').children('p').on('click', function (){
 
// 	$('.Work').slideToggle();
// 	// OpenDiv ();
// });

// $('#Line').height($(document).height());
$('#Work-Icon').children('p','img').on('click', function (){
	$('.Resume').slideUp();
	$('.About').slideUp();
	$('.Work').slideToggle(200);

});

$('#Resume-Icon').on('click', function (){
	$('.Work').slideUp();
	$('.About').slideUp();
	$('.Resume').slideToggle(200);
});

$('#About-Icon').on('click', function
	(){
	$('.Resume').slideUp();
	$('Work').slideUp();
	$('.About').slideToggle(200);
});






